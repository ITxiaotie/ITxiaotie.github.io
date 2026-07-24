"""Convert the supplied 408 choice-workbook PDFs into browser question data.

The source books are preserved as page images so formulas, code and diagrams do
not depend on unreliable text extraction.  The official-book answer page for
each chapter section is included as a review reference.  Answer-key OCR is
intentionally a separate verification pass: an unverified key must never be
used for automatic scoring.
"""
from __future__ import annotations

import argparse
import json
import re
from collections import defaultdict
from pathlib import Path

import pypdfium2 as pdfium
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "题本练习"
ASSET_ROOT = TARGET / "assets" / "408"

SUBJECTS = {
    "ds": {
        "name": "数据结构",
        "workbook": Path(r"E:\BaiduNetdiskDownload\王道课后题【做题本】\数据结构\题本\【A4留白】27王道《数据结构》 - 选择部分.pdf"),
        "official": Path(r"E:\BaiduNetdiskDownload\王道课后题【做题本】\数据结构\原书PDF\27王道《数据结构》高清带书签.pdf"),
    },
    "co": {
        "name": "计算机组成原理",
        "workbook": Path(r"E:\BaiduNetdiskDownload\王道课后题【做题本】\计算机组成原理\题本\【A4留白】计算机组成原理选择题做题本.pdf"),
        "official": Path(r"E:\BaiduNetdiskDownload\王道课后题【做题本】\计算机组成原理\原书PDF\27王道《计算机组成原理》高清带书签.pdf"),
    },
    "os": {
        "name": "操作系统",
        "workbook": Path(r"E:\BaiduNetdiskDownload\王道课后题【做题本】\操作系统\题本\【A4留白】操作系统选择题做题本.pdf"),
        "official": Path(r"E:\BaiduNetdiskDownload\王道课后题【做题本】\操作系统\原书PDF\27王道《操作系统》高清带书签.pdf"),
    },
    "net": {
        "name": "计算机网络",
        "workbook": Path(r"E:\BaiduNetdiskDownload\王道课后题【做题本】\计算机网络\题本\【A4有留白】王道计算机网络选择题.pdf"),
        "official": Path(r"E:\BaiduNetdiskDownload\王道课后题【做题本】\计算机网络\原书PDF\27王道《计算机网络》高清带书签.pdf"),
    },
}


def clean_text(value: str) -> str:
    value = value.replace("\uf001", "")
    value = value.replace("公众号：做题本集结地", "")
    value = re.sub(r"(?:WD|王道)·.*?第\d+页，共\d+页·", "", value)
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def section_answer_pages(pdf: PdfReader) -> dict[str, int]:
    pages: dict[str, int] = {}

    def walk(nodes: list[object]) -> None:
        for node in nodes:
            if isinstance(node, list):
                walk(node)
                continue
            title = str(getattr(node, "title", ""))
            match = re.search(r"(\d+\.\d+)\.\d+\s*答案与解析", title)
            if not match:
                continue
            try:
                pages[match.group(1)] = pdf.get_destination_page_number(node) + 1
            except Exception:
                continue

    walk(pdf.outline)
    return pages


def split_questions(text: str, subject: str, section: str, page: int) -> list[dict]:
    questions: list[dict] = []
    starts = list(re.finditer(r"(?<![\d.])(\d{1,3})\.(?=[\u4e00-\u9fff【A-Z])", text))
    for index, start in enumerate(starts):
        end = starts[index + 1].start() if index + 1 < len(starts) else len(text)
        block = text[start.start():end].strip()
        option_marks = list(re.finditer(r"([A-D])\.\s*", block))
        if len(option_marks) < 4:
            continue
        option_marks = option_marks[:4]
        prompt = block[:option_marks[0].start()].strip()
        options = []
        for option_index, mark in enumerate(option_marks):
            next_start = option_marks[option_index + 1].start() if option_index < 3 else len(block)
            text_value = block[mark.end():next_start].strip()
            if not text_value:
                break
            options.append({"key": mark.group(1), "text": text_value})
        if len(options) != 4 or len(prompt) < 3:
            continue
        questions.append({
            "number": int(start.group(1)),
            "subject": subject,
            "section": section,
            "prompt": prompt,
            "options": options,
            "page": page,
        })
    return questions


def render_page(document: pdfium.PdfDocument, number: int, path: Path) -> None:
    if path.exists():
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    page = document[number - 1]
    bitmap = page.render(scale=1.45)
    image = bitmap.to_pil().convert("RGB")
    image.save(path, format="WEBP", quality=80, method=6)
    bitmap.close()
    page.close()


def convert(subject_id: str, config: dict) -> tuple[list[dict], int]:
    workbook_path: Path = config["workbook"]
    official_path: Path = config["official"]
    if not workbook_path.exists() or not official_path.exists():
        raise FileNotFoundError(f"Missing source for {config['name']}")
    workbook = PdfReader(workbook_path)
    answers = section_answer_pages(PdfReader(official_path))
    section = "未分类"
    questions: list[dict] = []
    used_workbook_pages: set[int] = set()
    used_answer_pages: set[int] = set()

    for page_index, raw_page in enumerate(workbook.pages, start=1):
        raw = clean_text(raw_page.extract_text() or "")
        markers = list(re.finditer(r"(\d+\.\d+)\s*(.*?)\s*一、单项选择题", raw))
        parts: list[tuple[str, str]] = []
        if markers:
            if markers[0].start() > 0:
                parts.append((section, raw[:markers[0].start()]))
            for marker_index, marker in enumerate(markers):
                title = re.sub(r"\s+", " ", marker.group(2)).strip()
                raw_code = marker.group(1)
                major, minor = raw_code.split(".", 1)
                # Page extraction occasionally joins the final option text with
                # the following heading (for example "5" + "3.3").  All four
                # 408 books use one-digit chapter numbers, so retain the final
                # digit of the major section number.
                section_code = f"{major[-1]}.{minor}"
                section = f"{section_code} {title}"
                end = markers[marker_index + 1].start() if marker_index + 1 < len(markers) else len(raw)
                parts.append((section, raw[marker.end():end]))
        else:
            parts.append((section, raw))
        for section_name, part in parts:
            section_code = section_name.split(" ", 1)[0]
            for item in split_questions(part, config["name"], section_name, page_index):
                item["id"] = f"workbook-{subject_id}-{section_code.replace('.', '-')}-{item['number']}-{page_index}"
                item["paperImage"] = f"assets/408/{subject_id}/question-{page_index:03d}.webp"
                answer_page = answers.get(section_code)
                item["answerImage"] = f"assets/408/{subject_id}/answer-{answer_page:03d}.webp" if answer_page else ""
                item["answerPage"] = answer_page
                item["answer"] = None
                item["analysis"] = "官方答案与解析页已保留。查看后请按实际结果标记掌握或加入错题集。"
                questions.append(item)
                used_workbook_pages.add(page_index)
                if answer_page:
                    used_answer_pages.add(answer_page)

    workbook_render = pdfium.PdfDocument(workbook_path)
    official_render = pdfium.PdfDocument(official_path)
    asset_dir = ASSET_ROOT / subject_id
    for page in sorted(used_workbook_pages):
        render_page(workbook_render, page, asset_dir / f"question-{page:03d}.webp")
    for page in sorted(used_answer_pages):
        render_page(official_render, page, asset_dir / f"answer-{page:03d}.webp")
    workbook_render.close()
    official_render.close()
    return questions, len(used_workbook_pages)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--subject", choices=sorted(SUBJECTS), action="append")
    parser.add_argument("--append", action="store_true", help="Merge this subject into the existing browser data file")
    args = parser.parse_args()
    selected = args.subject or sorted(SUBJECTS)
    all_questions: list[dict] = []
    report: dict[str, int] = {}
    data_file = TARGET / "data.js"
    if args.append and data_file.exists():
        source = data_file.read_text(encoding="utf-8")
        match = re.fullmatch(r"window\.WORKBOOK_PRACTICE=(.*);\s*", source, re.S)
        if match:
            prior = json.loads(match.group(1))
            selected_names = {SUBJECTS[item]["name"] for item in selected}
            all_questions.extend(question for question in prior.get("questions", []) if question.get("subject") not in selected_names)
            report.update({key: value for key, value in prior.get("report", {}).items() if key not in selected_names})
    for subject_id in selected:
        questions, page_count = convert(subject_id, SUBJECTS[subject_id])
        all_questions.extend(questions)
        report[SUBJECTS[subject_id]["name"]] = len(questions)
        print(f"{SUBJECTS[subject_id]['name']}: {len(questions)} questions from {page_count} pages", flush=True)
    TARGET.mkdir(parents=True, exist_ok=True)
    payload = {"version": 1, "questions": all_questions, "report": report}
    data_file.write_text(
        "window.WORKBOOK_PRACTICE=" + json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(all_questions)} questions", flush=True)


if __name__ == "__main__":
    main()

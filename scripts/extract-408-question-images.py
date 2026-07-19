from __future__ import annotations

import os
import re
import subprocess
from pathlib import Path

from PIL import Image, ImageChops
from rapidocr_onnxruntime import RapidOCR


TARGETS = {
    2009: [3, 4, 42, 44, 45, 46, 47],
    2010: [3, 4, 8, 14, 27, 29, 34, 42, 43, 44, 45, 46],
    2011: [1, 3, 21, 27, 32, 37, 41, 42, 43, 44, 45, 47],
    2012: [1, 2, 7, 9, 13, 15, 27, 29, 40, 41, 42, 44, 46, 47],
    2013: [2, 7, 8, 9, 12, 16, 27, 31, 34, 41, 42, 44, 45, 46, 47],
    2014: [1, 2, 3, 4, 7, 34, 42, 43, 44],
    2015: [1, 5, 6, 8, 16, 34, 38, 40, 41, 42, 43, 44, 45, 46, 47],
    2016: [1, 2, 3, 4, 6, 8, 9, 13, 15, 17, 19, 25, 27, 28, 29, 30, 41, 42, 43, 44, 45, 47],
    2017: [1, 5, 8, 14, 23, 25, 35, 41, 42, 43, 44, 45, 46, 47],
    2018: [3, 6, 7, 15, 19, 24, 25, 37, 42, 44, 46, 47],
    2019: [1, 5, 13, 17, 18, 31, 38, 41, 45, 47],
    2020: [1, 4, 5, 7, 14, 27, 33, 35, 37, 40, 41, 43, 44, 47],
    2021: [1, 3, 6, 7, 8, 28, 34, 37, 40, 41, 42, 43, 45, 47],
    2022: [1, 7, 8, 15, 25, 26, 36, 41, 43, 45, 46, 47],
    2023: [2, 5, 12, 19, 29, 33, 37, 38, 41, 43, 44, 45, 47],
    2024: [1, 2, 4, 7, 12, 14, 33, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 47],
}

QUESTION_RE = re.compile(r"^\s*(?:第\s*)?0?([1-9]|[1-3]\d|4[0-7])\s*[.．、]")


def pdf_for(year: int) -> Path:
    root = Path(os.environ["PDF_BANK"])
    parent = Path(os.environ["PDF_PARENT"])
    folder = root if year <= 2023 else parent
    candidates = [p for p in folder.glob(f"{year}*.pdf") if "解析" not in p.name]
    if not candidates:
        raise FileNotFoundError(f"No source PDF for {year}")
    return candidates[0]


def render_pdf(pdf_path: Path, render_dir: Path, poppler: Path) -> list[Path]:
    render_dir.mkdir(parents=True, exist_ok=True)
    prefix = render_dir / "page"
    pages = sorted(render_dir.glob("page-*.png"))
    if not pages:
        subprocess.run([str(poppler), "-png", "-r", "144", str(pdf_path), str(prefix)], check=True)
        pages = sorted(render_dir.glob("page-*.png"))
    return pages


def locate_questions(page_paths: list[Path], ocr: RapidOCR) -> dict[int, tuple[int, int]]:
    candidates: dict[int, list[tuple[int, int, float]]] = {}
    exam_start: tuple[int, int] | None = None
    for page_index, page_path in enumerate(page_paths):
        result, _ = ocr(str(page_path))
        if not result:
            continue
        with Image.open(page_path) as page_image:
            left_limit = page_image.width * 0.28
        for box, text, score in result:
            if "单项选择题" in str(text):
                position = (page_index, int(min(point[1] for point in box)))
                if exam_start is None or position < exam_start:
                    exam_start = position
            match = QUESTION_RE.match(str(text))
            if not match:
                continue
            x = min(point[0] for point in box)
            y = int(min(point[1] for point in box))
            if x > left_limit or score < 0.42:
                continue
            number = int(match.group(1))
            candidates.setdefault(number, []).append((page_index, y, float(score)))

    locations: dict[int, tuple[int, int]] = {}
    previous = exam_start or (-1, -1)
    for number in range(1, 48):
        choices = sorted(candidates.get(number, []), key=lambda row: (row[0], row[1], -row[2]))
        choices = [row for row in choices if (row[0], row[1]) > previous]
        if not choices:
            continue
        page_index, y, _ = choices[0]
        locations[number] = (page_index, y)
        previous = (page_index, y)
    return locations


def trim_white(image: Image.Image) -> Image.Image:
    rgb = image.convert("RGB")
    background = Image.new("RGB", rgb.size, "white")
    diff = ImageChops.difference(rgb, background).convert("L")
    bbox = diff.point(lambda value: 0 if value < 12 else 255).getbbox()
    if not bbox:
        return rgb
    left, top, right, bottom = bbox
    return rgb.crop((max(0, left - 18), max(0, top - 14), min(rgb.width, right + 18), min(rgb.height, bottom + 14)))


def clip_before_red_answer(image: Image.Image) -> Image.Image:
    """The supplied 2024 recall PDF prints answers in red directly below stems."""
    rgb = image.convert("RGB")
    pixels = rgb.load()
    for y in range(36, rgb.height):
        red_pixels = sum(
            1
            for x in range(rgb.width)
            if pixels[x, y][0] > 135
            and pixels[x, y][0] > pixels[x, y][1] * 1.35
            and pixels[x, y][0] > pixels[x, y][2] * 1.25
        )
        if red_pixels >= 12:
            return trim_white(rgb.crop((0, 0, rgb.width, max(40, y - 8))))
    return rgb


def crop_question(page_paths: list[Path], start: tuple[int, int], end: tuple[int, int] | None) -> Image.Image:
    start_page, start_y = start
    end_page, end_y = end if end else (len(page_paths) - 1, 10**9)
    strips: list[Image.Image] = []
    for page_index in range(start_page, end_page + 1):
        with Image.open(page_paths[page_index]) as page:
            page = page.convert("RGB")
            margin_x = int(page.width * 0.055)
            top = max(0, start_y - 18) if page_index == start_page else int(page.height * 0.055)
            bottom = min(page.height, end_y - 12) if page_index == end_page and end else int(page.height * 0.955)
            if bottom > top + 20:
                strips.append(page.crop((margin_x, top, page.width - margin_x, bottom)))
    if not strips:
        raise ValueError("Empty crop")
    width = max(strip.width for strip in strips)
    height = sum(strip.height for strip in strips)
    combined = Image.new("RGB", (width, height), "white")
    offset = 0
    for strip in strips:
        combined.paste(strip, (0, offset))
        offset += strip.height
    return trim_white(combined)


def existing_image_valid(path: Path) -> bool:
    if not path.exists():
        return False
    try:
        with Image.open(path) as image:
            return image.height <= 4000 and image.height / max(1, image.width) <= 3.2
    except Exception:
        return False


def main() -> None:
    workspace = Path.cwd()
    output = workspace / "408真题" / "assets" / "question-images"
    render_root = workspace / "tmp" / "pdfs" / "question-pages"
    output.mkdir(parents=True, exist_ok=True)
    poppler = Path(os.environ["PDFTOPPM_EXE"])
    ocr = RapidOCR()
    produced = 0
    missing: list[str] = []
    force = os.environ.get("OVERWRITE", "") == "1"

    if os.environ.get("POSTPROCESS_2024", "") == "1":
        for path in output.glob("2024-*.webp"):
            with Image.open(path) as image:
                clipped = clip_before_red_answer(image)
                clipped.save(path, "WEBP", quality=82, method=6)
        print("postprocessed 2024 images", flush=True)
        return

    requested_years = {
        int(value)
        for value in os.environ.get("EXTRACT_YEARS", "").split(",")
        if value.strip()
    }
    selected_targets = (
        {year: targets for year, targets in TARGETS.items() if year in requested_years}
        if requested_years
        else TARGETS
    )

    for year, targets in selected_targets.items():
        remaining_targets = [number for number in targets if force or not existing_image_valid(output / f"{year}-{number}.webp")]
        if not remaining_targets:
            print(f"{year}: all target images already exist", flush=True)
            continue
        pages = render_pdf(pdf_for(year), render_root / str(year), poppler)
        locations = locate_questions(pages, ocr)
        print(f"{year}: located {len(locations)}/47 question starts", flush=True)
        for number in remaining_targets:
            start = locations.get(number)
            if not start:
                missing.append(f"{year}-{number}")
                continue
            next_numbers = [candidate for candidate in locations if candidate > number]
            end = locations[min(next_numbers)] if next_numbers else None
            try:
                image = crop_question(pages, start, end)
                if year == 2024:
                    image = clip_before_red_answer(image)
                if image.width > 1200:
                    height = round(image.height * 1200 / image.width)
                    image = image.resize((1200, height), Image.Resampling.LANCZOS)
                image.save(output / f"{year}-{number}.webp", "WEBP", quality=82, method=6)
                produced += 1
            except Exception:
                missing.append(f"{year}-{number}")
    print(f"produced={produced}; missing={','.join(missing) if missing else 'none'}")


if __name__ == "__main__":
    main()

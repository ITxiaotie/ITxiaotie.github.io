"""Create a compact browser-friendly reference PDF from the supplied scan."""
from __future__ import annotations

import io
from pathlib import Path

import pypdfium2 as pdfium
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(r"E:\BaiduNetdiskDownload\张宇考研题本\27张宇《基础30讲》\27张宇基础30讲线代.pdf")
TARGET = ROOT / "tmp" / "math30-linear-reference.pdf"


def main() -> None:
    if not SOURCE.exists():
        raise FileNotFoundError(SOURCE)
    TARGET.parent.mkdir(parents=True, exist_ok=True)
    document = pdfium.PdfDocument(SOURCE)
    output = canvas.Canvas(str(TARGET), pageCompression=1)
    for page in document:
        width, height = page.get_size()
        output.setPageSize((width, height))
        bitmap = page.render(scale=1.55, rotation=0)
        image = bitmap.to_pil().convert("RGB")
        encoded = io.BytesIO()
        image.save(encoded, format="JPEG", quality=68, optimize=True, progressive=True)
        encoded.seek(0)
        output.drawImage(ImageReader(encoded), 0, 0, width=width, height=height)
        output.showPage()
        bitmap.close()
        page.close()
    output.save()
    document.close()
    print(f"{TARGET} ({TARGET.stat().st_size / 1048576:.1f} MB)")


if __name__ == "__main__":
    main()

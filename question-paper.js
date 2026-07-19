(() => {
  "use strict";

  // Keep the stem as selectable text. Only the embedded diagram becomes an
  // image, so its layout stays stable without pulling in PDF watermarks.
  function xml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");
  }

  function hasComplexLayout(markup) {
    return /<table|<svg|<pre|<code/i.test(markup || "") || String(markup || "").includes("\n");
  }

  function makePaperImage(source, label) {
    if (!source || source.dataset.paperReady === "1") return;
    source.dataset.paperReady = "1";

    requestAnimationFrame(() => {
      const width = Math.max(320, Math.min(1120, Math.ceil(source.getBoundingClientRect().width || source.scrollWidth || 760)));
      const height = Math.max(80, Math.min(4200, Math.ceil(source.scrollHeight + 2)));
      const clone = source.cloneNode(true);
      clone.removeAttribute("id");
      clone.dataset.paperReady = "";
      clone.classList.add("paper-image-content");
      clone.style.cssText = [
        `width:${width}px`,
        "min-height:100%",
        "margin:0",
        "padding:22px 24px",
        "color:#161616",
        "background:#fffdf8",
        "font:16px/1.75 Georgia, 'Times New Roman', 'Microsoft YaHei', serif",
        "white-space:pre-wrap",
        "overflow:hidden"
      ].join(";");
      clone.querySelectorAll("script").forEach((node) => node.remove());
      clone.querySelectorAll("mjx-container").forEach((node) => { node.style.maxWidth = "100%"; node.style.overflowX = "auto"; });

      const style = `
        *{box-sizing:border-box} p{margin:0 0 12px} table{border-collapse:collapse;max-width:100%}td,th{padding:6px 8px;border:1px solid #777}pre,code{white-space:pre-wrap;font:14px/1.55 Consolas,'Microsoft YaHei',monospace}svg{max-width:100%;height:auto}.choice-label{font-weight:800}`;
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml"><style>${style}</style>${clone.outerHTML}</div></foreignObject></svg>`;
      const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
      const image = new Image();
      image.className = "question-paper-image";
      image.alt = label || "真题题面图片";
      image.loading = "lazy";
      image.onload = () => {
        source.hidden = true;
        source.parentElement?.classList.add("paper-image-ready");
      };
      image.onerror = () => URL.revokeObjectURL(image.src);
      image.src = URL.createObjectURL(blob);
      source.before(image);
    });
  }

  function visualOnlyImage(svg, label, index) {
    if (!svg || svg.dataset.visualImageReady === "1") return;
    svg.dataset.visualImageReady = "1";
    const clone = svg.cloneNode(true);
    clone.querySelectorAll("script").forEach((node) => node.remove());
    clone.removeAttribute("id");
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const blob = new Blob([new XMLSerializer().serializeToString(clone)], { type: "image/svg+xml;charset=utf-8" });
    const image = new Image();
    image.className = "question-diagram-image";
    image.alt = `${label || "真题"}图 ${index + 1}`;
    image.loading = "lazy";
    image.onload = () => { URL.revokeObjectURL(image.src); svg.replaceWith(image); };
    image.onerror = () => { URL.revokeObjectURL(image.src); svg.dataset.visualImageReady = ""; };
    image.src = URL.createObjectURL(blob);
  }

  function makeVisualOnlyImages(source, label) {
    if (!source) return;
    source.querySelectorAll("svg").forEach((svg, index) => visualOnlyImage(svg, label, index));
  }

  window.QuestionPaperImage = Object.freeze({ hasComplexLayout, makePaperImage, makeVisualOnlyImages });
})();

(() => {
  "use strict";

  // GitHub Pages cannot set custom anti-framing response headers. Hide the
  // document when embedded so another site cannot overlay its own interface.
  if (window.top !== window.self) {
    document.documentElement.hidden = true;
    return;
  }

  const allowedExternalHosts = new Set([
    "www.bilibili.com",
    "www.cnblogs.com",
    "csgraduates.com",
    "www.csgraduates.com",
    "www.doubao.com",
  ]);

  function secureLink(link) {
    const rawHref = link.getAttribute("href");
    if (!rawHref || rawHref.startsWith("#")) return;

    let url;
    try {
      url = new URL(rawHref, window.location.href);
    } catch {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
      return;
    }

    if (url.origin === window.location.origin) return;

    if (url.protocol !== "https:" || !allowedExternalHosts.has(url.hostname)) {
      link.removeAttribute("href");
      link.removeAttribute("target");
      link.setAttribute("aria-disabled", "true");
      link.title = "为保护访问者，未知外部链接已被禁用";
      return;
    }

    link.target = "_blank";
    link.rel = "noopener noreferrer external";
    link.referrerPolicy = "no-referrer";
  }

  function secureLinks(root) {
    if (root instanceof HTMLAnchorElement) secureLink(root);
    root.querySelectorAll?.("a").forEach(secureLink);
  }

  document.addEventListener("DOMContentLoaded", () => secureLinks(document));
  new MutationObserver((records) => {
    for (const record of records) {
      record.addedNodes.forEach((node) => {
        if (node instanceof Element) secureLinks(node);
      });
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
})();

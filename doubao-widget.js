(() => {
  "use strict";
  if (document.querySelector("#doubaoKnowledgeWidget")) return;
  const scriptUrl = new URL(document.currentScript.src);
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = new URL("doubao-widget.css", scriptUrl).href;
  document.head.appendChild(css);

  function mount() {
    const widget = document.createElement("section");
    widget.id = "doubaoKnowledgeWidget";
    widget.className = "doubao-widget";
    widget.innerHTML = `<button class="doubao-fab" type="button" aria-expanded="false">豆包知识助手</button><div class="doubao-panel" hidden><header><div><strong>豆包知识助手</strong><small>适合随时追问当前知识点</small></div><button class="doubao-close" type="button" aria-label="关闭">×</button></header><label>想查什么知识点？<textarea rows="4" maxlength="800" placeholder="例如：请用非科班能听懂的方式解释 TCP 三次握手，并结合 408 常见陷阱。"></textarea></label><p class="doubao-status" aria-live="polite"></p><div class="doubao-actions"><button class="doubao-copy" type="button">复制提问并打开豆包</button><a href="https://www.doubao.com/chat/" target="_blank" rel="noopener noreferrer">直接打开豆包</a></div><p class="doubao-tip">为了保护账号安全，本站不读取豆包登录信息；提问内容会先复制到剪贴板，再由你粘贴发送。</p></div>`;
    document.body.appendChild(widget);
    const fab = widget.querySelector(".doubao-fab");
    const panel = widget.querySelector(".doubao-panel");
    const close = widget.querySelector(".doubao-close");
    const textarea = widget.querySelector("textarea");
    const status = widget.querySelector(".doubao-status");
    function toggle(open) { panel.hidden = !open; fab.setAttribute("aria-expanded", String(open)); if (open) textarea.focus(); }
    fab.addEventListener("click", () => toggle(panel.hidden));
    close.addEventListener("click", () => toggle(false));
    widget.querySelector(".doubao-copy").addEventListener("click", async () => {
      const query = textarea.value.trim();
      if (!query) { status.textContent = "请先输入要查询的知识点。"; return; }
      const prompt = `你是考研辅导老师，请面向非科班学生，按“直观理解→准确定义→解题步骤→易错点→一道小练习”的顺序讲解。\n当前页面：${document.title}\n我的问题：${query}`;
      try { await navigator.clipboard.writeText(prompt); status.textContent = "提问已复制，请在豆包中粘贴发送。"; }
      catch { status.textContent = "浏览器未允许自动复制，请手动复制输入框内容。"; }
      window.open("https://www.doubao.com/chat/", "_blank", "noopener,noreferrer");
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount, { once: true }); else mount();
})();

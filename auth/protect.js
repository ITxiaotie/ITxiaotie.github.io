(() => {
  "use strict";
  if (!window.LocalAccount?.guard()) return;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => window.LocalAccount.mountUserBar(), { once: true });
  else window.LocalAccount.mountUserBar();
})();

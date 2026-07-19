(() => {
  "use strict";
  const scriptUrl = new URL(document.currentScript.src);
  window.ACCESS_CONFIG = Object.freeze({
    apiBase: "https://xiaotie-study-access.black-shrew-5161.chatgpt.site",
    tokenKey: "xiaotie-access-token",
    rootUrl: new URL("../", scriptUrl).href,
  });
})();

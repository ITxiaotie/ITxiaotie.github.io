(() => {
  "use strict";
  const config = window.ACCESS_CONFIG;

  function token() {
    return localStorage.getItem(config.tokenKey) || "";
  }

  function setToken(value) {
    if (value) localStorage.setItem(config.tokenKey, value);
    else localStorage.removeItem(config.tokenKey);
  }

  async function request(path, options = {}) {
    const headers = new Headers(options.headers || {});
    headers.set("Accept", "application/json");
    if (options.body && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
    const authToken = token();
    if (authToken) headers.set("Authorization", `Bearer ${authToken}`);
    let response;
    try {
      response = await fetch(`${config.apiBase}${path}`, {
        ...options,
        headers,
        credentials: "omit",
        cache: "no-store",
      });
    } catch {
      throw new Error("账号服务暂时无法连接，请稍后重试");
    }
    let data = {};
    try { data = await response.json(); } catch { data = {}; }
    if (!response.ok) {
      if (response.status === 401 && path !== "/api/auth") setToken("");
      throw new Error(data.error || `请求失败（${response.status}）`);
    }
    return data;
  }

  function isPaid(user) {
    return Boolean(user && (user.role === "paid" || user.role === "admin" || user.isSuperadmin));
  }

  function url(path = "") {
    return new URL(path, config.rootUrl).href;
  }

  window.AccessClient = Object.freeze({ token, setToken, request, isPaid, url });
})();

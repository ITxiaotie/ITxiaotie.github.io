(() => {
  "use strict";

  const USERS_KEY = "xiaotie-study-users-v2";
  const SESSION_KEY = "xiaotie-study-session-v2";
  const encoder = new TextEncoder();

  function bytesToBase64(bytes) {
    let binary = "";
    bytes.forEach((value) => { binary += String.fromCharCode(value); });
    return btoa(binary);
  }

  function base64ToBytes(value) {
    return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
  }

  function users() {
    try {
      const value = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
      return Array.isArray(value) ? value : [];
    } catch { return []; }
  }

  function normalize(value) { return String(value || "").trim().normalize("NFKC").toLowerCase(); }

  async function passwordHash(password, salt) {
    const key = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
    const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt, iterations: 180000 }, key, 256);
    return bytesToBase64(new Uint8Array(bits));
  }

  function session() {
    try {
      const value = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
      if (!value || value.expiresAt < Date.now()) { localStorage.removeItem(SESSION_KEY); return null; }
      return value;
    } catch { return null; }
  }

  async function register({ username, phone, password }) {
    username = String(username || "").trim().normalize("NFKC");
    phone = String(phone || "").trim();
    password = String(password || "");
    if (!/^[\p{L}\p{N}_-]{2,24}$/u.test(username)) throw new Error("账号需为 2—24 位中文、字母、数字、下划线或短横线。");
    if (!/^1\d{10}$/.test(phone)) throw new Error("请输入正确的 11 位手机号。");
    if (password.length < 8 || password.length > 64) throw new Error("密码长度需为 8—64 位。");
    const rows = users();
    const usernameNorm = normalize(username);
    if (rows.some((row) => row.usernameNorm === usernameNorm || row.phone === usernameNorm || row.usernameNorm === phone || row.phone === phone)) throw new Error("账号或手机号已注册，请直接登录。");
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const row = { id: crypto.randomUUID(), username, usernameNorm, phone, salt: bytesToBase64(salt), passwordHash: await passwordHash(password, salt), createdAt: Date.now() };
    rows.push(row);
    localStorage.setItem(USERS_KEY, JSON.stringify(rows));
    return createSession(row);
  }

  async function login({ identifier, password }) {
    const id = normalize(identifier);
    const row = users().find((item) => item.usernameNorm === id || item.phone === String(identifier || "").trim());
    if (!row) throw new Error("账号、手机号或密码错误。");
    const actual = await passwordHash(String(password || ""), base64ToBytes(row.salt));
    if (actual !== row.passwordHash) throw new Error("账号、手机号或密码错误。");
    return createSession(row);
  }

  function createSession(row) {
    const value = { id: row.id, username: row.username, phone: row.phone, expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000 };
    localStorage.setItem(SESSION_KEY, JSON.stringify(value));
    return value;
  }

  function logout() { localStorage.removeItem(SESSION_KEY); }

  function rootUrl() {
    const script = [...document.scripts].find((item) => item.src.includes("/auth/local-session.js"));
    return script ? new URL("../", script.src) : new URL("./", location.href);
  }

  function loginUrl() {
    const root = rootUrl();
    const target = `${location.pathname}${location.search}${location.hash}`;
    const url = new URL("auth/", root);
    if (!location.pathname.endsWith("/auth/") && !location.pathname.endsWith("/auth/index.html")) url.searchParams.set("next", target);
    return url.href;
  }

  function safeNext() {
    const value = new URLSearchParams(location.search).get("next") || "";
    if (!value.startsWith("/") || value.startsWith("//")) return rootUrl().href;
    const target = new URL(value, location.origin);
    return target.origin === location.origin ? target.href : rootUrl().href;
  }

  function guard() {
    if (session()) return true;
    location.replace(loginUrl());
    return false;
  }

  function mountUserBar() {
    const current = session();
    if (!current || document.querySelector(".local-userbar")) return;
    if (!document.querySelector("#local-userbar-style")) {
      const style = document.createElement("link");
      style.id = "local-userbar-style";
      style.rel = "stylesheet";
      style.href = new URL("auth/local-session.css", rootUrl()).href;
      document.head.appendChild(style);
    }
    const bar = document.createElement("div");
    bar.className = "local-userbar";
    const name = document.createElement("span");
    name.textContent = `已登录：${current.username}`;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "退出";
    button.addEventListener("click", () => { logout(); location.replace(loginUrl()); });
    bar.append(name, button);
    document.body.appendChild(bar);
  }

  window.LocalAccount = Object.freeze({ users, session, register, login, logout, guard, mountUserBar, rootUrl, safeNext });
})();

(() => {
  "use strict";
  const client = window.AccessClient;
  const access = document.documentElement.dataset.access || "auth";
  document.documentElement.classList.add("auth-pending");

  function loginUrl() {
    const next = encodeURIComponent(location.href);
    return `${client.url("auth/")}?next=${next}`;
  }

  function addUserBar(user) {
    const bar = document.createElement("div");
    bar.className = "access-userbar";
    const badge = client.isPaid(user) ? (user.isSuperadmin ? "超级管理员" : "已解锁") : "普通用户";
    bar.innerHTML = `<span class="access-user"><b></b><em></em></span><span class="access-badge"></span><a class="access-admin" href="${client.url("admin/")}">后台</a><a class="access-upgrade" href="${client.url("pay/")}">升级</a><button type="button">退出</button>`;
    bar.querySelector("b").textContent = user.username;
    bar.querySelector("em").textContent = user.phone;
    bar.querySelector(".access-badge").textContent = badge;
    bar.querySelector(".access-admin").hidden = !user.isSuperadmin;
    if (client.isPaid(user)) bar.querySelector(".access-upgrade").hidden = true;
    bar.querySelector("button").addEventListener("click", async () => {
      try { await client.request("/api/auth", { method: "POST", body: JSON.stringify({ action: "logout" }) }); } catch { /* local logout still succeeds */ }
      client.setToken("");
      location.replace(client.url("auth/"));
    });
    document.body.appendChild(bar);
  }

  async function verify() {
    if (!client.token()) {
      location.replace(loginUrl());
      throw new Error("redirect");
    }
    try {
      const data = await client.request("/api/auth");
      const user = data.user;
      if (access === "paid" && !client.isPaid(user)) {
        location.replace(client.url("pay/?locked=1"));
        throw new Error("redirect");
      }
      if (access === "admin" && !user.isSuperadmin) {
        location.replace(client.url("?denied=admin"));
        throw new Error("redirect");
      }
      window.AUTH_CONTEXT = Object.freeze({ user, isPaid: client.isPaid(user) });
      document.documentElement.classList.remove("auth-pending");
      document.documentElement.classList.add(client.isPaid(user) ? "auth-paid" : "auth-free");
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => addUserBar(user), { once: true });
      } else addUserBar(user);
      return window.AUTH_CONTEXT;
    } catch (error) {
      if (error.message !== "redirect") {
        client.setToken("");
        location.replace(loginUrl());
      }
      throw error;
    }
  }

  window.authReady = verify();
})();

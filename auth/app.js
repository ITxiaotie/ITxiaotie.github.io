(() => {
  "use strict";
  const client = window.AccessClient;
  const loginForm = document.getElementById("loginForm");
  const message = document.getElementById("message");

  function showMessage(text, success = false) {
    message.textContent = text;
    message.classList.toggle("success", success);
  }

  async function submit(form) {
    const button = form.querySelector("button[type=submit]");
    const data = Object.fromEntries(new FormData(form));
    button.disabled = true;
    showMessage("正在安全验证……");
    try {
      const result = await client.request("/api/auth", { method: "POST", body: JSON.stringify({ action: "login", ...data }) });
      if (!result.user?.isSuperadmin) {
        client.setToken("");
        showMessage("此入口仅限超级管理员账号使用。");
        button.disabled = false;
        return;
      }
      client.setToken(result.token);
      showMessage("登录成功，正在进入后台……", true);
      location.replace(client.url("admin/"));
    } catch (error) {
      showMessage(error.message);
      button.disabled = false;
    }
  }

  loginForm.addEventListener("submit", event => { event.preventDefault(); submit(loginForm); });
  if (client.token()) {
    client.request("/api/auth").then(({ user }) => {
      if (user.isSuperadmin) location.replace(client.url("admin/"));
      else client.setToken("");
    }).catch(() => client.setToken(""));
  }
})();

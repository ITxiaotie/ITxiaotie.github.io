(() => {
  "use strict";
  const client = window.AccessClient;
  const tabs = [...document.querySelectorAll("[data-tab]")];
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const title = document.getElementById("formTitle");
  const message = document.getElementById("message");

  function showMessage(text, success = false) {
    message.textContent = text;
    message.classList.toggle("success", success);
  }

  function selectTab(name) {
    tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.tab === name));
    loginForm.hidden = name !== "login";
    registerForm.hidden = name !== "register";
    title.textContent = name === "login" ? "登录学习站" : "创建普通用户账号";
    showMessage("");
  }

  function safeNext(user) {
    if (user.isSuperadmin) return client.url("admin/");
    const candidate = new URLSearchParams(location.search).get("next");
    if (!candidate) return client.url();
    try {
      const target = new URL(candidate, client.url());
      return target.origin === new URL(client.url()).origin ? target.href : client.url();
    } catch { return client.url(); }
  }

  async function submit(form, action) {
    const button = form.querySelector("button[type=submit]");
    const data = Object.fromEntries(new FormData(form));
    if (action === "register" && data.password !== data.confirmPassword) {
      showMessage("两次输入的密码不一致");
      return;
    }
    delete data.confirmPassword;
    button.disabled = true;
    showMessage("正在安全验证……");
    try {
      const result = await client.request("/api/auth", { method: "POST", body: JSON.stringify({ action, ...data }) });
      client.setToken(result.token);
      showMessage(action === "register" ? "注册成功，正在进入……" : "登录成功，正在进入……", true);
      location.replace(safeNext(result.user));
    } catch (error) {
      showMessage(error.message);
      button.disabled = false;
    }
  }

  tabs.forEach(tab => tab.addEventListener("click", () => selectTab(tab.dataset.tab)));
  loginForm.addEventListener("submit", event => { event.preventDefault(); submit(loginForm, "login"); });
  registerForm.addEventListener("submit", event => { event.preventDefault(); submit(registerForm, "register"); });
  if (client.token()) {
    client.request("/api/auth").then(({ user }) => location.replace(safeNext(user))).catch(() => client.setToken(""));
  }
})();

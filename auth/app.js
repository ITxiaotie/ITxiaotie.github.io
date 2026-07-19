(() => {
  "use strict";
  const account = window.LocalAccount;
  const loginTab = document.querySelector("#loginTab");
  const registerTab = document.querySelector("#registerTab");
  const loginForm = document.querySelector("#loginForm");
  const registerForm = document.querySelector("#registerForm");
  const title = document.querySelector("#formTitle");
  const message = document.querySelector("#message");

  function show(text, success = false) { message.textContent = text; message.classList.toggle("success", success); }
  function switchMode(register) {
    loginTab.classList.toggle("active", !register); registerTab.classList.toggle("active", register);
    loginForm.hidden = register; registerForm.hidden = !register;
    title.textContent = register ? "创建学习账号" : "登录学习账号"; show("");
  }
  async function submit(form, action) {
    const button = form.querySelector("button[type=submit]");
    button.disabled = true; show(action === "register" ? "正在安全创建账号…" : "正在验证账号…");
    try {
      const data = Object.fromEntries(new FormData(form));
      if (action === "register") await account.register(data); else await account.login(data);
      show(action === "register" ? "注册成功，正在进入题库…" : "登录成功，正在进入题库…", true);
      location.replace(account.safeNext());
    } catch (error) { show(error instanceof Error ? error.message : "操作失败，请重试。"); button.disabled = false; }
  }
  loginTab.addEventListener("click", () => switchMode(false));
  registerTab.addEventListener("click", () => switchMode(true));
  loginForm.addEventListener("submit", (event) => { event.preventDefault(); submit(loginForm, "login"); });
  registerForm.addEventListener("submit", (event) => { event.preventDefault(); submit(registerForm, "register"); });
  if (account.session()) location.replace(account.safeNext());
})();

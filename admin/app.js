(() => {
  "use strict";
  const client = window.AccessClient;
  const rows = document.getElementById("userRows");
  const message = document.getElementById("adminMessage");
  const search = document.getElementById("search");
  const status = document.getElementById("status");
  const statIds = { total: "totalStat", paid: "paidStat", pending: "pendingStat", disabled: "disabledStat" };
  let timer;

  function show(text, ok = false) { message.textContent = text; message.classList.toggle("ok", ok); }
  function date(value) { return value ? new Date(Number(value)).toLocaleString("zh-CN", { hour12: false }) : "—"; }
  function labelRole(user) {
    const role = user.role === "paid" ? "付费" : "普通";
    const payment = user.payment_status === "pending" ? '<span class="pill pending">待审核</span>' : "";
    const disabled = user.account_status === "disabled" ? '<span class="pill disabled">已停用</span>' : "";
    return `<span class="pill">${role}</span>${payment}${disabled}`;
  }
  function actionButtons(user) {
    const buttons = [];
    if (user.payment_status === "pending") buttons.push(["approve", "批准解锁", ""], ["reject", "拒绝", "danger"]);
    if (user.role === "paid") buttons.push(["set_free", "设为普通", "danger"]);
    else buttons.push(["set_paid", "直接解锁", ""]);
    if (user.account_status === "disabled") buttons.push(["enable", "启用", ""]);
    else buttons.push(["disable", "停用", "danger"]);
    return buttons.map(([action, text, cls]) => `<button type="button" class="${cls}" data-action="${action}" data-user="${user.id}">${text}</button>`).join("");
  }
  function renderUsers(users) {
    if (!users.length) { rows.innerHTML = '<tr><td colspan="5">没有符合条件的用户。</td></tr>'; return; }
    rows.innerHTML = users.map(user => `<tr><td><b></b></td><td></td><td>${labelRole(user)}</td><td><small>注册：${date(user.created_at)}</small><small>登录：${date(user.last_login_at)}</small></td><td><div class="actions">${actionButtons(user)}</div></td></tr>`).join("");
    [...rows.children].forEach((row, index) => {
      row.cells[0].querySelector("b").textContent = users[index].username;
      row.cells[1].textContent = users[index].phone;
    });
  }
  async function load() {
    await window.authReady;
    show("正在读取……");
    try {
      const params = new URLSearchParams();
      if (search.value.trim()) params.set("q", search.value.trim());
      if (status.value) params.set("status", status.value);
      const data = await client.request(`/api/admin?${params}`);
      Object.entries(statIds).forEach(([key, id]) => { document.getElementById(id).textContent = Number(data.stats[key] || 0); });
      renderUsers(data.users);
      show("");
    } catch (error) { show(error.message); }
  }
  async function act(action, userId, button) {
    const wording = { approve: "批准该用户解锁", reject: "拒绝该付款申请", set_free: "取消该用户的付费权限", set_paid: "直接为该用户解锁", disable: "停用该用户", enable: "启用该用户" }[action];
    if (!confirm(`确认${wording}？`)) return;
    button.disabled = true;
    try {
      await client.request("/api/admin", { method: "POST", body: JSON.stringify({ action, userId }) });
      show("操作已完成。", true);
      await load();
    } catch (error) { show(error.message); button.disabled = false; }
  }
  rows.addEventListener("click", event => { const button = event.target.closest("button[data-action]"); if (button) act(button.dataset.action, button.dataset.user, button); });
  document.getElementById("refresh").addEventListener("click", load);
  search.addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(load, 350); });
  status.addEventListener("change", load);
  document.querySelectorAll("[data-panel]").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-panel]").forEach(item => item.classList.toggle("active", item === button));
    document.querySelectorAll(".panel").forEach(panel => panel.classList.toggle("active", panel.id === `${button.dataset.panel}Panel`));
  }));
  document.getElementById("passwordForm").addEventListener("submit", async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const output = document.getElementById("passwordMessage");
    if (data.newPassword !== data.confirmPassword) { output.textContent = "两次输入的新密码不一致"; return; }
    const button = form.querySelector("button"); button.disabled = true; output.textContent = "正在更换……";
    try {
      await client.request("/api/auth", { method: "POST", body: JSON.stringify({ action: "change_password", currentPassword: data.currentPassword, newPassword: data.newPassword }) });
      client.setToken(""); alert("密码已更换，请使用新密码重新登录。"); location.replace(client.url("auth/"));
    } catch (error) { output.textContent = error.message; button.disabled = false; }
  });
  load();
})();

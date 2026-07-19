(() => {
  "use strict";
  const client = window.AccessClient;
  const els = Object.fromEntries(["statusTitle","username","phone","role","paymentStatus","notice","requestUnlock","continueStudy","message"].map(id => [id, document.getElementById(id)]));
  const labels = { none: "尚未申请", pending: "等待管理员核对", approved: "已通过", rejected: "未通过，请核对付款备注" };

  function show(text, ok = false) {
    els.message.textContent = text;
    els.message.classList.toggle("ok", ok);
  }

  function render(user, request) {
    const unlocked = client.isPaid(user);
    const status = unlocked ? "approved" : (request?.status || user.paymentStatus || "none");
    els.username.textContent = user.username;
    els.phone.textContent = user.phone;
    els.role.textContent = unlocked ? (user.isSuperadmin ? "超级管理员" : "付费用户") : "普通用户";
    els.paymentStatus.textContent = labels[status] || status;
    els.statusTitle.textContent = unlocked ? "全部功能已经解锁" : status === "pending" ? "申请正在等待核对" : "完成付款后提交申请";
    els.requestUnlock.hidden = unlocked;
    els.continueStudy.hidden = !unlocked;
    els.requestUnlock.disabled = status === "pending";
    if (status === "pending") els.notice.textContent = "申请已提交。管理员核对微信到账后会开通；刷新本页即可查看最新状态，请不要重复付款。";
    if (status === "rejected") els.notice.textContent = "上次申请未通过。请确认已支付 9.9 元，并且付款备注与本页账号或手机号一致，然后可重新提交。";
  }

  async function load() {
    await window.authReady;
    try {
      const data = await client.request("/api/payment");
      render(data.user, data.request);
    } catch (error) { show(error.message); }
  }

  els.requestUnlock.addEventListener("click", async () => {
    if (!confirm("确认已经通过上方微信二维码支付 9.9 元，并填写了账号或手机号作为备注？")) return;
    els.requestUnlock.disabled = true;
    show("正在提交申请……");
    try {
      await client.request("/api/payment", { method: "POST", body: "{}" });
      show("申请已提交，等待管理员核对。", true);
      await load();
    } catch (error) {
      show(error.message);
      els.requestUnlock.disabled = false;
    }
  });
  load();
})();

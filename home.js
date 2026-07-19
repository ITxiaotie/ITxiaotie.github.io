window.authReady.then(({ isPaid }) => {
  if (isPaid) return;
  document.querySelectorAll("[data-paid-card]").forEach(card => {
    card.classList.add("locked");
    card.href = "pay/?locked=1";
    const action = card.querySelector("div > span:last-child");
    if (action) action.textContent = "支付 9.9 元解锁 →";
  });
});

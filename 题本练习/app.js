(() => {
  "use strict";
  const bank = window.WORKBOOK_PRACTICE?.questions || [];
  const pageSize = 10;
  const state = { subject: "", section: "", search: "", wrongOnly: false, page: 1, selected: new Map(), revealed: new Set() };
  const el = (id) => document.getElementById(id);
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const unique = (values) => [...new Set(values)].filter(Boolean);
  const wrongIds = () => new Set(window.WrongBook?.read().filter((row) => row.module === "408 题本练习").map((row) => row.id));
  const answerText = (item) => item.answer || "请以打开的官方答案页为准";

  function currentRows() {
    const query = state.search.trim().toLowerCase();
    const wrong = wrongIds();
    return bank.filter((item) => (!state.subject || item.subject === state.subject)
      && (!state.section || item.section === state.section)
      && (!state.wrongOnly || wrong.has(item.id))
      && (!query || `${item.number} ${item.prompt} ${item.section}`.toLowerCase().includes(query)));
  }

  function fillFilters() {
    const subjects = unique(bank.map((item) => item.subject));
    el("subject").innerHTML = `<option value="">全部科目</option>${subjects.map((value) => `<option value="${esc(value)}">${esc(value)}</option>`).join("")}`;
    fillSections();
  }

  function fillSections() {
    const sections = unique(bank.filter((item) => !state.subject || item.subject === state.subject).map((item) => item.section));
    if (!sections.includes(state.section)) state.section = "";
    el("section").innerHTML = `<option value="">全部章节</option>${sections.map((value) => `<option value="${esc(value)}">${esc(value)}</option>`).join("")}`;
    el("section").value = state.section;
  }

  function wrongEntry(item) {
    return { id: item.id, module: "408 题本练习", subject: item.subject, topic: item.section, prompt: item.prompt, options: item.options, answer: answerText(item), analysis: "请回看原书官方答案与解析页，梳理每个选项的依据。", href: `${location.pathname}?subject=${encodeURIComponent(item.subject)}&section=${encodeURIComponent(item.section)}` };
  }

  function card(item) {
    const selected = state.selected.get(item.id);
    const revealed = state.revealed.has(item.id);
    return `<article class="card" data-id="${esc(item.id)}"><div class="card-head"><h2>${esc(item.subject)} 第 ${item.number} 题</h2><span class="tag">选择题</span><span class="tag section">${esc(item.section)}</span><span class="tag source">原题第 ${item.page} 页</span></div><div class="content"><div class="prompt">${esc(item.prompt)}</div><div class="choices">${item.options.map((option) => `<button type="button" class="choice ${selected === option.key ? "selected" : ""}" data-choice="${option.key}"><b>${option.key}.</b>${esc(option.text)}</button>`).join("")}</div><div class="actions"><button class="check-answer" type="button" ${selected ? "" : "disabled"}>提交并核对答案</button></div><details class="source"><summary>查看原题页（公式、代码、图形以此为准）</summary><img loading="lazy" src="${esc(item.paperImage)}" alt="${esc(item.subject)} ${item.section} 原题第 ${item.page} 页"></details>${revealed ? `<section class="review"><p>${item.answer ? `自动判分答案：<b>${esc(item.answer)}</b>。` : "本题答案已在下方官方答案页显示，请核对后选择学习结果。"}</p>${item.answerImage ? `<details open><summary>官方答案与解析页（原书第 ${item.answerPage} 页）</summary><img loading="lazy" src="${esc(item.answerImage)}" alt="官方答案与解析页"></details>` : "<p>暂未定位到该小节的答案页，请先回看原题资料后自评。</p>"}<div class="mastery"><button type="button" class="correct">我答对了</button><button type="button" class="wrong">记录为错题</button></div></section>` : ""}</div></article>`;
  }

  function render() {
    const rows = currentRows();
    const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));
    state.page = Math.min(state.page, pageCount);
    const start = (state.page - 1) * pageSize;
    el("total").textContent = bank.length;
    el("visible").textContent = rows.length;
    el("list").innerHTML = rows.length ? rows.slice(start, start + pageSize).map(card).join("") : el("empty").innerHTML;
    el("pageInfo").textContent = `第 ${state.page} / ${pageCount} 页`;
    el("previous").disabled = state.page <= 1;
    el("next").disabled = state.page >= pageCount;
  }

  function getItem(id) { return bank.find((item) => item.id === id); }
  el("list").addEventListener("click", (event) => {
    const article = event.target.closest("[data-id]");
    if (!article) return;
    const item = getItem(article.dataset.id);
    if (!item) return;
    const choice = event.target.closest("[data-choice]");
    if (choice) { state.selected.set(item.id, choice.dataset.choice); render(); return; }
    if (event.target.closest(".check-answer")) { state.revealed.add(item.id); render(); return; }
    if (event.target.closest(".correct")) { window.WrongBook?.resolve(item.id); render(); return; }
    if (event.target.closest(".wrong")) { window.WrongBook?.capture(wrongEntry(item), false); render(); }
  });

  el("subject").addEventListener("change", () => { state.subject = el("subject").value; state.page = 1; fillSections(); render(); });
  el("section").addEventListener("change", () => { state.section = el("section").value; state.page = 1; render(); });
  el("search").addEventListener("input", () => { state.search = el("search").value; state.page = 1; render(); });
  el("wrongOnly").addEventListener("change", () => { state.wrongOnly = el("wrongOnly").checked; state.page = 1; render(); });
  el("previous").onclick = () => { state.page -= 1; render(); scrollTo({ top: 0, behavior: "smooth" }); };
  el("next").onclick = () => { state.page += 1; render(); scrollTo({ top: 0, behavior: "smooth" }); };
  fillFilters();
  render();
})();

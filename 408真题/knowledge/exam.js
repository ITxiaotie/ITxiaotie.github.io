(function () {
  "use strict";

  const cards = window.KNOWLEDGE_DATA || [];
  const subjects = Object.keys(window.KNOWLEDGE_SUBJECTS || {});
  const realQuestions = (window.EXAMS || []).flatMap((exam) => exam.items || []).filter((question) => question.options?.length && /^[A-D]$/.test(question.answer || ""));
  const els = {
    setup: document.querySelector("#examSetup"), screen: document.querySelector("#examScreen"), result: document.querySelector("#examResult"),
    subject: document.querySelector("#examSubject"), knowledge: document.querySelector("#examKnowledge"), count: document.querySelector("#examQuestionCount"), minutes: document.querySelector("#examMinutes"), pool: document.querySelector("#poolCount"), start: document.querySelector("#startExam"),
    scope: document.querySelector("#examScope"), progress: document.querySelector("#examProgress"), timer: document.querySelector("#examTimer"), submit: document.querySelector("#submitExam"), question: document.querySelector("#examQuestion"), sheet: document.querySelector("#answerSheet"), answered: document.querySelector("#answeredCount"), unanswered: document.querySelector("#unansweredCount"), previous: document.querySelector("#previousQuestion"), next: document.querySelector("#nextQuestion"),
    score: document.querySelector("#resultScore"), resultTitle: document.querySelector("#resultTitle"), resultSummary: document.querySelector("#resultSummary"), breakdown: document.querySelector("#resultBreakdown"), review: document.querySelector("#resultReview"), retry: document.querySelector("#retryExam")
  };

  const state = { questions: [], answers: [], current: 0, seconds: 0, deadline: 0, timerId: null, submitted: false, scopeLabel: "" };

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  }

  function optionText(option) {
    if (typeof option === "string") return option;
    if (option.text) return String(option.text).replace(/^[A-Z][.、]\s*/i, "").trim();
    const holder = document.createElement("div");
    holder.innerHTML = option.html || option.key || "";
    return holder.textContent.replace(/^[A-Z][.、]\s*/i, "").trim();
  }

  function normalizePractice(card) {
    return {
      id: `practice-${card.id}`,
      source: "章节巩固题",
      subject: card.subject,
      topic: card.title,
      knowledgeIds: [card.id],
      prompt: card.practice.prompt,
      promptHtml: "",
      options: card.practice.options.map((text, index) => ({ key: String(index), text })),
      correct: String(card.practice.correct),
      answerLabel: card.practice.answer,
      analysis: card.practice.explanation
    };
  }

  function normalizeReal(question) {
    const refs = window.findKnowledgeRefs(question);
    return {
      id: question.id,
      source: `${question.year} 年 408 真题`,
      subject: question.subject,
      topic: question.topic,
      knowledgeIds: refs.map((item) => item.id),
      prompt: question.question,
      promptHtml: question.questionHtml || "",
      options: question.options.map((option, index) => ({ key: option.key || String(index), text: optionText(option) })),
      correct: question.answer,
      answerLabel: question.answer,
      analysis: question.analysis
    };
  }

  const questionBank = [...cards.map(normalizePractice), ...realQuestions.map(normalizeReal)];

  function shuffle(items) {
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const target = Math.floor(Math.random() * (index + 1));
      [result[index], result[target]] = [result[target], result[index]];
    }
    return result;
  }

  function currentPool() {
    const subject = els.subject.value;
    const knowledge = els.knowledge.value;
    return questionBank.filter((question) => {
      if (subject && question.subject !== subject) return false;
      if (knowledge && !question.knowledgeIds.includes(knowledge)) return false;
      return true;
    });
  }

  function fillKnowledge() {
    const current = els.knowledge.value;
    const subject = els.subject.value;
    const available = cards.filter((card) => !subject || card.subject === subject);
    els.knowledge.innerHTML = `<option value="">${subject ? "本科目综合" : "四科综合"}</option>${available.map((card) => `<option value="${escapeHtml(card.id)}">${escapeHtml(card.chapter)}｜${escapeHtml(card.title)}</option>`).join("")}`;
    if (available.some((card) => card.id === current)) els.knowledge.value = current;
    updatePool();
  }

  function updatePool() {
    const pool = currentPool();
    els.pool.textContent = `${pool.length} 题可用`;
    const requested = Number(els.count.value);
    els.start.disabled = pool.length === 0;
    els.start.textContent = pool.length ? `开始模拟考试（抽取 ${Math.min(requested, pool.length)} 题）` : "当前范围暂无可用题目";
  }

  function scopeName() {
    if (els.knowledge.value) return window.KNOWLEDGE_BY_ID.get(els.knowledge.value)?.title || "知识点专项";
    return els.subject.value || "408 四科综合";
  }

  function startExam() {
    const pool = currentPool();
    if (!pool.length) return;
    const amount = Math.min(Number(els.count.value), pool.length);
    state.questions = shuffle(pool).slice(0, amount);
    state.answers = Array(amount).fill(null);
    state.current = 0;
    state.seconds = Number(els.minutes.value) * 60;
    state.deadline = Date.now() + state.seconds * 1000;
    state.submitted = false;
    state.scopeLabel = scopeName();
    els.setup.hidden = true;
    els.result.hidden = true;
    els.screen.hidden = false;
    els.scope.textContent = state.scopeLabel;
    clearInterval(state.timerId);
    state.timerId = setInterval(() => {
      state.seconds = Math.max(0, Math.ceil((state.deadline - Date.now()) / 1000));
      renderTimer();
      if (state.seconds <= 0) submitExam(true);
    }, 1000);
    renderTimer();
    renderExam();
    scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderTimer() {
    const minutes = Math.floor(Math.max(0, state.seconds) / 60);
    const seconds = Math.max(0, state.seconds) % 60;
    els.timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    els.timer.classList.toggle("urgent", state.seconds <= 60);
  }

  function renderExam() {
    const question = state.questions[state.current];
    const selected = state.answers[state.current];
    els.progress.textContent = `第 ${state.current + 1} / ${state.questions.length} 题`;
    els.question.innerHTML = `<div class="exam-question-meta"><span>${escapeHtml(question.source)}</span><span>${escapeHtml(question.subject)}</span><span>${escapeHtml(question.topic)}</span></div><h2>${state.current + 1}. ${question.promptHtml || escapeHtml(question.prompt)}</h2><div class="exam-answer-options">${question.options.map((option, index) => `<button class="exam-answer-option ${selected === option.key ? "selected" : ""}" type="button" data-value="${escapeHtml(option.key)}"><span>${String.fromCharCode(65 + index)}</span><b>${escapeHtml(option.text)}</b></button>`).join("")}</div><p class="keyboard-hint">键盘可按 1—4 选择，← → 切换题目</p>`;
    els.previous.disabled = state.current === 0;
    els.next.textContent = state.current === state.questions.length - 1 ? "检查答题卡 →" : "下一题 →";
    renderSheet();
  }

  function renderSheet() {
    els.sheet.innerHTML = state.questions.map((_, index) => `<button type="button" data-index="${index}" class="${state.answers[index] !== null ? "answered" : ""} ${index === state.current ? "current" : ""}">${index + 1}</button>`).join("");
    const answered = state.answers.filter((answer) => answer !== null).length;
    els.answered.textContent = answered;
    els.unanswered.textContent = state.questions.length - answered;
  }

  function chooseAnswer(value) {
    state.answers[state.current] = value;
    renderExam();
  }

  function moveTo(index) {
    state.current = Math.max(0, Math.min(index, state.questions.length - 1));
    renderExam();
    els.question.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function submitExam(autoSubmit = false) {
    if (state.submitted) return;
    const unanswered = state.answers.filter((answer) => answer === null).length;
    if (!autoSubmit && unanswered && !confirm(`还有 ${unanswered} 题未作答，确定交卷吗？`)) return;
    state.submitted = true;
    clearInterval(state.timerId);
    els.screen.hidden = true;
    els.result.hidden = false;
    const correct = state.questions.reduce((sum, question, index) => sum + (state.answers[index] === question.correct ? 1 : 0), 0);
    const score = Math.round(correct / state.questions.length * 100);
    const wrong = state.questions.length - correct;
    const answered = state.answers.filter((answer) => answer !== null).length;
    els.score.textContent = score;
    els.resultTitle.textContent = score >= 85 ? "掌握得很扎实" : score >= 60 ? "基础合格，继续补漏" : "建议回到知识卡复习";
    els.resultSummary.textContent = `${state.scopeLabel} · 共 ${state.questions.length} 题，答对 ${correct} 题，答错或未答 ${wrong} 题。`;
    els.breakdown.innerHTML = `<div><strong>${correct}</strong><span>答对</span></div><div><strong>${wrong}</strong><span>答错/未答</span></div><div><strong>${answered}</strong><span>已作答</span></div><div><strong>${formatDuration(Number(els.minutes.value) * 60 - state.seconds)}</strong><span>用时</span></div>`;
    els.review.innerHTML = state.questions.map((question, index) => renderReview(question, index)).join("");
    saveResult({ date: Date.now(), scope: state.scopeLabel, score, total: state.questions.length, correct });
    scrollTo({ top: 0, behavior: "smooth" });
  }

  function formatDuration(seconds) {
    const value = Math.max(0, seconds);
    return `${Math.floor(value / 60)}分${value % 60}秒`;
  }

  function renderReview(question, index) {
    const selected = state.answers[index];
    const isCorrect = selected === question.correct;
    const refs = question.knowledgeIds.map((id) => window.KNOWLEDGE_BY_ID.get(id)).filter(Boolean);
    return `<article class="review-card ${isCorrect ? "review-correct" : "review-wrong"}"><div class="review-meta"><strong>第 ${index + 1} 题 · ${isCorrect ? "正确" : selected === null ? "未作答" : "错误"}</strong><span>${escapeHtml(question.source)}</span></div><h3>${question.promptHtml || escapeHtml(question.prompt)}</h3><div class="review-options">${question.options.map((option, optionIndex) => { const classes = [option.key === question.correct ? "correct" : "", option.key === selected && selected !== question.correct ? "incorrect" : ""].filter(Boolean).join(" "); return `<div class="${classes}"><span>${String.fromCharCode(65 + optionIndex)}</span><b>${escapeHtml(option.text)}</b></div>`; }).join("")}</div><div class="review-analysis"><strong>标准答案：${escapeHtml(question.answerLabel)}</strong><p>${escapeHtml(question.analysis)}</p><div class="review-links">${refs.map((ref) => `<a href="index.html#${escapeHtml(ref.id)}">复习：${escapeHtml(ref.title)}</a>`).join("")}</div></div></article>`;
  }

  function saveResult(result) {
    try {
      const history = JSON.parse(localStorage.getItem("kaoyan-408-mock-history") || "[]");
      history.unshift(result);
      localStorage.setItem("kaoyan-408-mock-history", JSON.stringify(history.slice(0, 20)));
    } catch { /* 浏览器禁止存储时不影响考试 */ }
  }

  els.subject.innerHTML = `<option value="">四科综合</option>${subjects.map((subject) => `<option>${escapeHtml(subject)}</option>`).join("")}`;
  const requested = new URLSearchParams(location.search).get("knowledge");
  if (window.KNOWLEDGE_BY_ID.has(requested)) els.subject.value = window.KNOWLEDGE_BY_ID.get(requested).subject;
  fillKnowledge();
  if (window.KNOWLEDGE_BY_ID.has(requested)) { els.knowledge.value = requested; updatePool(); }
  els.subject.addEventListener("change", fillKnowledge);
  els.knowledge.addEventListener("change", updatePool);
  els.count.addEventListener("change", updatePool);
  els.start.addEventListener("click", startExam);
  els.submit.addEventListener("click", () => submitExam(false));
  els.previous.addEventListener("click", () => moveTo(state.current - 1));
  els.next.addEventListener("click", () => moveTo(state.current + 1));
  els.question.addEventListener("click", (event) => { const option = event.target.closest(".exam-answer-option"); if (option) chooseAnswer(option.dataset.value); });
  els.sheet.addEventListener("click", (event) => { const button = event.target.closest("button[data-index]"); if (button) moveTo(Number(button.dataset.index)); });
  els.retry.addEventListener("click", startExam);
  document.addEventListener("keydown", (event) => {
    if (els.screen.hidden || state.submitted) return;
    if (/^[1-4]$/.test(event.key)) {
      const question = state.questions[state.current];
      const option = question.options[Number(event.key) - 1];
      if (option) chooseAnswer(option.key);
    } else if (event.key === "ArrowLeft") moveTo(state.current - 1);
    else if (event.key === "ArrowRight") moveTo(state.current + 1);
  });
  updatePool();
})();

(function () {
  "use strict";

  const cards = window.KNOWLEDGE_DATA || [];
  const subjects = Object.keys(window.KNOWLEDGE_SUBJECTS || {});
  const realQuestions = (window.EXAMS || []).flatMap((exam) => exam.items || []).filter((question) => question.options?.length && /^[A-D]$/.test(question.answer || ""));
  const latestTrendExams = (window.EXAMS || []).slice().sort((left, right) => right.year - left.year).slice(0, 5);
  const latestTrendQuestions = latestTrendExams.flatMap((exam) => exam.items || []).filter((question) => question.options?.length && /^[A-D]$/.test(question.answer || ""));
  const latestDistribution = latestTrendQuestions.reduce((map, question) => {
    map.set(question.subject, (map.get(question.subject) || 0) + 1);
    return map;
  }, new Map());
  const els = {
    setup: document.querySelector("#examSetup"), screen: document.querySelector("#examScreen"), result: document.querySelector("#examResult"),
    mode: document.querySelector("#examMode"), preset: document.querySelector("#paperPreset"), presetWrap: document.querySelector("#paperPresetWrap"), subject: document.querySelector("#examSubject"), knowledge: document.querySelector("#examKnowledge"), count: document.querySelector("#examQuestionCount"), minutes: document.querySelector("#examMinutes"), pool: document.querySelector("#poolCount"), trendNotice: document.querySelector("#trendNotice"), start: document.querySelector("#startExam"),
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
    if (els.mode.value === "fixed") return realQuestions.map(normalizeReal);
    if (els.mode.value === "trend") return realQuestions.filter((question) => !subject || question.subject === subject).map(normalizeReal);
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
    const trendMode = els.mode.value === "trend";
    const fixedMode = els.mode.value === "fixed";
    els.knowledge.disabled = trendMode || fixedMode;
    els.subject.disabled = fixedMode;
    els.count.disabled = fixedMode;
    els.presetWrap.hidden = !fixedMode;
    if (fixedMode) {
      els.trendNotice.hidden = false;
      els.trendNotice.textContent = "每套卷按近五年 408 四科占比固定抽取 40 道选择题；同一套卷在本设备上保持稳定，便于重做和比较成绩。";
      els.pool.textContent = "10 套固定卷";
      els.start.disabled = false;
      els.start.textContent = `开始 408 模拟卷 ${els.preset.value || 1}`;
      return;
    }
    els.trendNotice.hidden = !trendMode;
    if (trendMode) {
      const total = latestTrendQuestions.length || 1;
      const distribution = [...latestDistribution.entries()].map(([subject, count]) => `${subject} ${Math.round(count / total * 100)}%`).join(" · ");
      const startYear = latestTrendExams.at(-1)?.year;
      const endYear = latestTrendExams[0]?.year;
      els.trendNotice.textContent = `本卷按 ${startYear}—${endYear} 年 408 单选真题分布组卷：${distribution}。题目从对应科目真题池随机抽取，避免使用章节巩固题混入。`;
    }
    els.pool.textContent = `${pool.length} 题可用`;
    const requested = Number(els.count.value);
    els.start.disabled = pool.length === 0;
    els.start.textContent = pool.length ? `开始模拟考试（抽取 ${Math.min(requested, pool.length)} 题）` : "当前范围暂无可用题目";
  }

  function scopeName() {
    if (els.mode.value === "fixed") return `408 模拟卷 ${els.preset.value || 1}`;
    if (els.mode.value === "trend") return "近五年 408 真题题型分布模拟";
    if (els.knowledge.value) return window.KNOWLEDGE_BY_ID.get(els.knowledge.value)?.title || "知识点专项";
    return els.subject.value || "408 四科综合";
  }

  function buildTrendPaper(pool, amount) {
    const total = [...latestDistribution.values()].reduce((sum, value) => sum + value, 0) || 1;
    const requested = [...latestDistribution.entries()]
      .map(([subject, count]) => ({ subject, exact: amount * count / total }))
      .sort((left, right) => (right.exact % 1) - (left.exact % 1));
    const quotas = new Map(requested.map((item) => [item.subject, Math.floor(item.exact)]));
    let remaining = amount - [...quotas.values()].reduce((sum, value) => sum + value, 0);
    for (const item of requested) { if (remaining <= 0) break; quotas.set(item.subject, quotas.get(item.subject) + 1); remaining -= 1; }
    const paper = [];
    quotas.forEach((quota, subject) => paper.push(...shuffle(pool.filter((question) => question.subject === subject)).slice(0, quota)));
    if (paper.length < amount) {
      const used = new Set(paper.map((question) => question.id));
      paper.push(...shuffle(pool.filter((question) => !used.has(question.id))).slice(0, amount - paper.length));
    }
    return shuffle(paper).slice(0, amount);
  }

  function seededShuffle(items, seed) {
    const result = items.slice();
    let value = seed >>> 0;
    const random = () => { value = (value * 1664525 + 1013904223) >>> 0; return value / 4294967296; };
    for (let index = result.length - 1; index > 0; index -= 1) {
      const target = Math.floor(random() * (index + 1));
      [result[index], result[target]] = [result[target], result[index]];
    }
    return result;
  }

  function buildFixedPaper(pool, paperNumber) {
    const amount = 40;
    const seed = 408000 + Number(paperNumber) * 7919;
    const total = [...latestDistribution.values()].reduce((sum, value) => sum + value, 0) || 1;
    const allocations = [...latestDistribution.entries()].map(([subject, count]) => ({ subject, count: Math.floor(amount * count / total) }));
    let assigned = allocations.reduce((sum, item) => sum + item.count, 0);
    for (let index = 0; assigned < amount; index = (index + 1) % allocations.length) { allocations[index].count += 1; assigned += 1; }
    const paper = allocations.flatMap((item, index) => seededShuffle(pool.filter((question) => question.subject === item.subject), seed + index * 97).slice(0, item.count));
    return seededShuffle(paper, seed + 17);
  }

  function startExam() {
    const pool = currentPool();
    if (!pool.length) return;
    const fixedMode = els.mode.value === "fixed";
    const amount = fixedMode ? Math.min(40, pool.length) : Math.min(Number(els.count.value), pool.length);
    if (fixedMode) state.questions = buildFixedPaper(pool, els.preset.value);
    else state.questions = els.mode.value === "trend" ? buildTrendPaper(pool, amount) : shuffle(pool).slice(0, amount);
    state.answers = Array(state.questions.length).fill(null);
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
    const stem = els.question.querySelector("h2");
    window.QuestionPaperImage?.makeVisualOnlyImages(stem, `${question.source} ${question.topic}`);
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
    els.resultTitle.textContent = score >= 85 ? "掌握得很扎实" : score >= 60 ? "基础合格，继续补漏" : "建议回到章节题库复习";
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
    const selectedOption = question.options.find((option) => option.key === selected);
    const correctOption = question.options.find((option) => option.key === question.correct);
    const errorNote = isCorrect ? "本题判断正确。复习时可快速核对题干中的关键限定词，确认不是偶然猜对。" : selected === null
      ? `本题未作答。先回到“${question.topic}”的定义与典型例题，再重新独立完成本题。`
      : `你选择了 ${escapeHtml(selectedOption?.text || selected || "") }；正确选项是 ${escapeHtml(correctOption?.text || question.answerLabel)}。请重点比较两者在题干条件、边界或概念定义上的差别。`;
    return `<article class="review-card ${isCorrect ? "review-correct" : "review-wrong"}"><div class="review-meta"><strong>第 ${index + 1} 题 · ${isCorrect ? "正确" : selected === null ? "未作答" : "错误"}</strong><span>${escapeHtml(question.source)}</span></div><h3>${question.promptHtml || escapeHtml(question.prompt)}</h3><div class="review-options">${question.options.map((option, optionIndex) => { const classes = [option.key === question.correct ? "correct" : "", option.key === selected && selected !== question.correct ? "incorrect" : ""].filter(Boolean).join(" "); return `<div class="${classes}"><span>${String.fromCharCode(65 + optionIndex)}</span><b>${escapeHtml(option.text)}</b></div>`; }).join("")}</div><div class="review-analysis"><strong>标准答案：${escapeHtml(question.answerLabel)}</strong><p>${escapeHtml(question.analysis)}</p><p class="error-note"><b>本题复盘：</b>${errorNote}</p><div class="review-links">${refs.map((ref) => `<a href="practice.html?knowledge=${encodeURIComponent(ref.id)}">复习：${escapeHtml(ref.title)}</a>`).join("")}</div></div></article>`;
  }

  function saveResult(result) {
    try {
      const history = JSON.parse(localStorage.getItem("kaoyan-408-mock-history") || "[]");
      history.unshift(result);
      localStorage.setItem("kaoyan-408-mock-history", JSON.stringify(history.slice(0, 20)));
    } catch { /* 浏览器禁止存储时不影响考试 */ }
  }

  els.subject.innerHTML = `<option value="">四科综合</option>${subjects.map((subject) => `<option>${escapeHtml(subject)}</option>`).join("")}`;
  els.preset.innerHTML = Array.from({ length: 10 }, (_, index) => `<option value="${index + 1}">408 模拟卷 ${index + 1}</option>`).join("");
  const requested = new URLSearchParams(location.search).get("knowledge");
  if (window.KNOWLEDGE_BY_ID.has(requested)) els.subject.value = window.KNOWLEDGE_BY_ID.get(requested).subject;
  fillKnowledge();
  if (window.KNOWLEDGE_BY_ID.has(requested)) { els.knowledge.value = requested; updatePool(); }
  els.mode.addEventListener("change", updatePool);
  els.preset.addEventListener("change", updatePool);
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

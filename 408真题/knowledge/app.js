(function () {
  "use strict";

  const allQuestions = (window.EXAMS || []).flatMap((exam) => exam.items || []);
  const cards = window.KNOWLEDGE_DATA || [];
  const subjects = Object.keys(window.KNOWLEDGE_SUBJECTS || {});
  const page = document.body.dataset.page;

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    })[char]);
  }

  function questionRefs(question) {
    return window.findKnowledgeRefs ? window.findKnowledgeRefs(question) : [];
  }

  function frequencyMap() {
    const result = new Map(cards.map((item) => [item.id, []]));
    allQuestions.forEach((question) => questionRefs(question).forEach((item) => {
      if (result.has(item.id)) result.get(item.id).push(question);
    }));
    return result;
  }

  const frequencies = frequencyMap();

  function renderList(items, className) {
    if (!items || !items.length) return "";
    return `<div class="detail-block ${className || ""}"><ul>${items.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul></div>`;
  }

  function setupKnowledgePage() {
    const tabs = document.querySelector("#subjectTabs");
    const search = document.querySelector("#knowledgeSearch");
    const list = document.querySelector("#knowledgeList");
    const summary = document.querySelector("#subjectSummary");
    document.querySelector("#knowledgeCount").textContent = cards.length;
    let activeSubject = "";
    let needle = "";

    tabs.innerHTML = ["全部", ...subjects].map((subject) => `<button type="button" data-subject="${subject === "全部" ? "" : escapeHtml(subject)}" class="${subject === "全部" ? "active" : ""}">${escapeHtml(subject)}</button>`).join("");
    summary.innerHTML = subjects.map((subject, index) => {
      const meta = window.KNOWLEDGE_SUBJECTS[subject];
      const count = cards.filter((item) => item.subject === subject).length;
      const qCount = new Set(cards.filter((item) => item.subject === subject).flatMap((item) => frequencies.get(item.id) || []).map((q) => q.id)).size;
      return `<div class="summary-card summary-${index}"><strong>${escapeHtml(meta.short)} · ${count} 专题</strong><span>关联 ${qCount} 道历年真题</span></div>`;
    }).join("");

    function render() {
      const visible = cards.filter((item) => {
        if (activeSubject && item.subject !== activeSubject) return false;
        if (!needle) return true;
        const hay = `${item.subject} ${item.chapter} ${item.title} ${item.summary} ${item.keywords.join(" ")}`.toLowerCase();
        return hay.includes(needle);
      });
      if (!visible.length) {
        list.innerHTML = '<div class="empty">没有找到相符知识点，试试更短的关键词。</div>';
        return;
      }
      list.innerHTML = subjects.map((subject) => {
        const subjectCards = visible.filter((item) => item.subject === subject);
        if (!subjectCards.length) return "";
        const uniqueQs = new Set(subjectCards.flatMap((item) => frequencies.get(item.id) || []).map((q) => q.id)).size;
        return `<section class="subject-block" id="subject-${encodeURIComponent(subject)}">
          <div class="subject-heading"><div><span class="eyebrow">${escapeHtml(subjectCards[0].chapter.split(" ")[0])}—按教材章节展开</span><h2>${escapeHtml(subject)}</h2><p>${subjectCards.length} 个核心专题，关联 ${uniqueQs} 道历年真题</p></div></div>
          <div class="knowledge-grid">${subjectCards.map(renderCard).join("")}</div>
        </section>`;
      }).join("");
    }

    function renderCard(item) {
      const count = (frequencies.get(item.id) || []).length;
      return `<article class="knowledge-card" id="${escapeHtml(item.id)}">
        <div class="card-top"><span class="chapter-label">${escapeHtml(item.chapter)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p><span class="frequency">历年真题关联 ${count} 道</span></div>
        <div class="card-details">
          <div class="detail-block"><h4>核心定义与模型</h4><ul>${item.core.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul></div>
          <div class="detail-block formula"><h4>必会公式 / 规则</h4><ul>${item.formulas.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul></div>
          <div class="detail-block"><h4>真题怎么做</h4><ul>${item.method.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul></div>
          <div class="detail-block trap"><h4>最容易错</h4><ul>${item.traps.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul></div>
          <div class="card-actions"><a class="practice-link" href="practice.html?knowledge=${encodeURIComponent(item.id)}">进入章节练习 →</a><a class="exam-entry" href="exam.html?knowledge=${encodeURIComponent(item.id)}">专项模拟考试</a><a class="truth-link" href="../index.html?subject=${encodeURIComponent(item.subject)}&search=${encodeURIComponent(item.keywords[0])}">在真题库中检索</a></div>
        </div>
      </article>`;
    }

    tabs.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-subject]");
      if (!button) return;
      activeSubject = button.dataset.subject;
      tabs.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
      render();
    });
    search.addEventListener("input", () => { needle = search.value.trim().toLowerCase(); render(); });
    render();

    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) {
        const subject = cards.find((item) => item.id === target.id)?.subject;
        if (subject) activeSubject = "";
        setTimeout(() => target.scrollIntoView({ block: "start" }), 60);
      }
    }
  }

  function optionText(option) {
    if (typeof option === "string") return option;
    if (option.text) return `${option.key || ""} ${option.text}`.trim();
    const holder = document.createElement("div");
    holder.innerHTML = option.html || option.key || "";
    return holder.textContent.trim();
  }

  function optionKey(option, index) {
    if (typeof option === "object" && option.key) return option.key;
    const match = String(optionText(option)).match(/^([A-Z])(?:[.、\s]|$)/i);
    return match ? match[1].toUpperCase() : String(index);
  }

  function renderAnswerOptions(options, correctValue) {
    return `<div class="answer-options" data-correct="${escapeHtml(correctValue)}">${options.map((option, index) => {
      const value = optionKey(option, index);
      const text = optionText(option).replace(/^[A-Z][.、]\s*/i, "");
      const label = /^[A-Z]$/.test(value) ? value : String.fromCharCode(65 + index);
      return `<button class="answer-option" type="button" data-value="${escapeHtml(value)}"><span>${label}</span><b>${escapeHtml(text)}</b></button>`;
    }).join("")}</div>`;
  }

  function handleAnswerClick(event) {
    const option = event.target.closest(".answer-option");
    if (option) {
      const article = option.closest("article");
      if (article.dataset.graded === "true") return;
      article.querySelectorAll(".answer-option").forEach((button) => button.classList.toggle("selected", button === option));
      const submit = article.querySelector(".check-answer");
      if (submit) submit.disabled = false;
      return;
    }
    const submit = event.target.closest(".check-answer");
    if (submit) {
      const article = submit.closest("article");
      const selected = article.querySelector(".answer-option.selected");
      const options = article.querySelector(".answer-options");
      if (!selected || !options) return;
      const correct = options.dataset.correct;
      const isCorrect = selected.dataset.value === correct;
      article.dataset.graded = "true";
      article.querySelectorAll(".answer-option").forEach((button) => {
        button.disabled = true;
        if (button.dataset.value === correct) button.classList.add("correct");
        if (button === selected && !isCorrect) button.classList.add("incorrect");
      });
      const feedback = article.querySelector(".answer-feedback");
      feedback.hidden = false;
      feedback.className = `answer-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
      feedback.querySelector("strong").textContent = isCorrect ? "回答正确" : "回答错误";
      article.querySelector(".answer-panel").hidden = false;
      submit.hidden = true;
      const retry = article.querySelector(".retry-answer");
      if (retry) retry.hidden = false;
      return;
    }
    const retry = event.target.closest(".retry-answer");
    if (retry) {
      const article = retry.closest("article");
      article.dataset.graded = "false";
      article.querySelectorAll(".answer-option").forEach((button) => {
        button.disabled = false;
        button.classList.remove("selected", "correct", "incorrect");
      });
      article.querySelector(".answer-feedback").hidden = true;
      article.querySelector(".answer-panel").hidden = true;
      article.querySelector(".check-answer").hidden = false;
      article.querySelector(".check-answer").disabled = true;
      retry.hidden = true;
    }
  }

  function setupPracticePage() {
    const subjectSelect = document.querySelector("#practiceSubject");
    const knowledgeSelect = document.querySelector("#practiceKnowledge");
    const intro = document.querySelector("#practiceIntro");
    const generated = document.querySelector("#generatedPractice");
    const realList = document.querySelector("#realQuestionList");
    const count = document.querySelector("#realQuestionCount");
    const title = document.querySelector("#realQuestionTitle");
    const params = new URLSearchParams(location.search);
    let selectedId = params.get("knowledge");
    if (!window.KNOWLEDGE_BY_ID.has(selectedId)) selectedId = cards[0]?.id;
    let selectedSubject = window.KNOWLEDGE_BY_ID.get(selectedId)?.subject || subjects[0];

    subjectSelect.innerHTML = subjects.map((subject) => `<option ${subject === selectedSubject ? "selected" : ""}>${escapeHtml(subject)}</option>`).join("");

    function fillKnowledgeSelect() {
      const options = cards.filter((item) => item.subject === selectedSubject);
      if (!options.some((item) => item.id === selectedId)) selectedId = options[0]?.id;
      knowledgeSelect.innerHTML = options.map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === selectedId ? "selected" : ""}>${escapeHtml(item.chapter)}｜${escapeHtml(item.title)}</option>`).join("");
    }

    function render() {
      const item = window.KNOWLEDGE_BY_ID.get(selectedId);
      if (!item) return;
      const questions = (frequencies.get(item.id) || []).filter((question) => question.options?.length && question.answer).slice().sort((a, b) => a.year - b.year || Number(a.number) - Number(b.number));
      history.replaceState(null, "", `?knowledge=${encodeURIComponent(item.id)}`);
      intro.innerHTML = `<div class="practice-intro"><span class="eyebrow">${escapeHtml(item.subject)} · ${escapeHtml(item.chapter)}</span><h2>${escapeHtml(item.title)}</h2><div class="intro-actions"><a class="exam-entry" href="exam.html?knowledge=${encodeURIComponent(item.id)}">用本知识点模拟考试 →</a></div></div>`;
      generated.innerHTML = `<article class="generated-card interactive-question" data-graded="false"><span class="source-badge">专项巩固题</span><h2>选择答案后提交</h2><div class="practice-prompt">${escapeHtml(item.practice.prompt)}</div>${renderAnswerOptions(item.practice.options, String(item.practice.correct))}<div class="answer-actions"><button class="check-answer" type="button" disabled>提交答案</button><button class="retry-answer" type="button" hidden>重新作答</button></div><div class="answer-feedback" hidden><strong></strong></div><div class="answer-panel" hidden><strong>标准答案：${escapeHtml(item.practice.answer)}</strong><p>${escapeHtml(item.practice.explanation)}</p></div></article>`;
      title.textContent = `${item.title} · 对应 408 真题`;
      count.textContent = `${questions.length} 题`;
      realList.innerHTML = questions.length ? questions.map((question) => {
        const prompt = question.questionHtml || escapeHtml(question.question);
        const options = question.options || [];
        return `<article class="real-question interactive-question" id="${escapeHtml(question.id)}" data-graded="false"><div class="real-meta"><span>${question.year} 第 ${escapeHtml(question.number)} 题</span><span>${escapeHtml(question.kind)}</span><span>${escapeHtml(question.topic)}</span></div><div class="real-prompt">${prompt}</div>${renderAnswerOptions(options, question.answer)}<div class="answer-actions"><button class="check-answer" type="button" disabled>提交答案</button><button class="retry-answer" type="button" hidden>重新作答</button></div><div class="answer-feedback" hidden><strong></strong></div><div class="answer-panel" hidden><strong>标准答案：${escapeHtml(question.answer)}</strong><p>${escapeHtml(question.analysis)}</p><a class="back-knowledge" href="../index.html?question=${encodeURIComponent(question.id)}">回原真题页复盘 →</a></div></article>`;
      }).join("") : '<div class="empty">该专题暂未匹配到历年真题，可先完成上方巩固题。</div>';
    }

    subjectSelect.addEventListener("change", () => { selectedSubject = subjectSelect.value; selectedId = ""; fillKnowledgeSelect(); render(); });
    knowledgeSelect.addEventListener("change", () => { selectedId = knowledgeSelect.value; render(); });
    generated.addEventListener("click", handleAnswerClick);
    realList.addEventListener("click", handleAnswerClick);
    fillKnowledgeSelect();
    render();
  }

  if (page === "knowledge") setupKnowledgePage();
  if (page === "practice") setupPracticePage();
})();

const state = {
  year: null,
  subject: "",
  search: "",
  wrongOnly: false,
  view: "quiz",
};

const els = {
  yearSelect: document.querySelector("#yearSelect"),
  subjectSelect: document.querySelector("#subjectSelect"),
  searchInput: document.querySelector("#searchInput"),
  wrongOnly: document.querySelector("#wrongOnly"),
  doneCount: document.querySelector("#doneCount"),
  rightRate: document.querySelector("#rightRate"),
  wrongCount: document.querySelector("#wrongCount"),
  paperPdf: document.querySelector("#paperPdf"),
  answerPdf: document.querySelector("#answerPdf"),
  resetYear: document.querySelector("#resetYear"),
  examTitle: document.querySelector("#examTitle"),
  examMeta: document.querySelector("#examMeta"),
  questionList: document.querySelector("#questionList"),
  paperAnalysis: document.querySelector("#paperAnalysis"),
  wrongList: document.querySelector("#wrongList"),
};
let availableExams = window.EXAMS;

const SUBJECT_GUIDES = {
  "数据结构": [
    "数据结构研究的是：数据怎样摆放，才能更快地找到、加入、删除或处理。",
    "像整理仓库。货架、队伍、目录树和道路网，分别对应数组/链表、队列、树和图。",
    "先认出数据之间的关系，再判断题目要求的操作，最后比较时间和空间成本。",
    "不要只背算法名字；数据规模、是否有序、是否频繁修改都会影响效率。"
  ],
  "计算机组成原理": [
    "组成原理研究一条程序指令如何被 CPU、存储器和输入输出设备真正执行。",
    "把计算机想成工厂：CPU 是车间，内存是近处仓库，硬盘是远处仓库，总线是运输通道。",
    "先写清位数、容量、地址或周期等单位，再画出数据流向，最后按公式逐项计算。",
    "最常见错误是把 bit 与 Byte、地址数与存储容量、时钟周期与频率混为一谈。"
  ],
  "操作系统": [
    "操作系统是计算机的总管，负责分配 CPU、内存、文件和外设，并协调多个程序。",
    "像餐厅经理：安排厨师时间、分配桌位、维护菜单，还要避免所有人互相等待。",
    "先确定系统里有哪些资源和参与者，再列出状态变化或访问顺序，最后检查并发和边界条件。",
    "不要用单线程直觉分析并发题；两个操作之间可能随时被切换。"
  ],
  "计算机网络": [
    "网络研究数据怎样被分层包装、寻址、转发，并送到另一台主机上的程序。",
    "像寄快递：域名是联系人，IP 是地址，端口是收件部门，帧和数据包是不同路段的包装。",
    "先判断题目所在层次和协议，再画发送端到接收端的路径，最后计算长度、时延或序号。",
    "MAC 地址用于一段链路，IP 地址负责跨网络，端口用于定位具体进程。"
  ]
};

const TOPIC_GUIDES = [
  [/队列|缓冲区|FIFO/, "队列遵循“先进先出”：先进入的数据先被处理。", "像排队买票，后来的人不能越过前面的人。", "按进入顺序写出元素，再从队头逐个取出。", "栈是后进先出，队列才是先进先出。"],
  [/栈|括号|递归/, "栈遵循“后进先出”，函数调用、括号匹配常用它保存尚未完成的任务。", "像叠盘子，最后放上的盘子最先拿走。", "画出每一步入栈和出栈，任何时刻都只操作栈顶。", "不要把入栈顺序误当作最终出栈顺序。"],
  [/树|二叉|AVL|B树|B\+树/, "树用父子关系组织数据；二叉树的每个结点最多有两个孩子。", "像公司组织架构或电脑文件夹。", "先画结构，再根据遍历、深度、平衡或查找规则逐层处理。", "结点数、边数、高度和层数的定义要先统一。"],
  [/图|最短路|Dijkstra|Floyd|拓扑|连通/, "图由顶点和边组成，适合表示道路、社交关系和任务依赖。", "地图上的城市是顶点，道路是边。", "先判断有向/无向、带权/无权，再选择遍历、最短路或拓扑算法。", "Dijkstra 不能直接处理负权边；拓扑排序只适用于有向无环图。"],
  [/排序|快排|归并|堆排|插入/, "排序算法的差别主要在比较次数、移动次数、额外空间和稳定性。", "像按身高排队，有的从左到右插入，有的分组后合并。", "先识别算法，再按一趟操作模拟，最后核对复杂度和稳定性。", "平均复杂度、最坏复杂度和是否稳定是三个不同问题。"],
  [/散列|哈希|Hash|ASL/, "散列把关键字通过函数直接映射到表中位置，冲突时再按规则寻找空位。", "像按姓名首字母找抽屉，但同首字母的人需要另定摆放规则。", "先算散列地址，再逐次模拟冲突处理，最后统计成功或失败查找长度。", "装填因子越大通常越容易冲突；ASL 要按题意求平均。"],
  [/复杂度|O\(/, "复杂度描述输入规模变大时，运行时间或占用空间增长得有多快。", "逐本扫描像 O(n)，每次排除一半像 O(log n)。", "找出执行次数最多的基本操作，只保留增长最快的项并忽略常数。", "O(n²+n) 可化成 O(n²)，但具体执行次数题不能随意忽略常数。"],
  [/补码|溢出|浮点|IEEE/, "计算机用固定数量的二进制位表示数字；补码让加减法可以共用一套电路。", "像只有固定格数的里程表，超过范围就会绕回去。", "先确定位数和符号位，再写二进制，按规则运算后检查结果是否超出范围。", "无符号溢出看进位，有符号溢出看同号相加是否得到异号。"],
  [/Cache|主存|命中|映射/, "Cache 是 CPU 和主存之间的小而快的存储器，保存最近或邻近使用的数据。", "像把常用工具放桌面，不常用的放仓库。", "把地址拆成标记、组/行号和块内偏移，再按映射方式判断命中。", "块大小决定偏移位数，组数决定组索引位数，剩余高位才是标记。"],
  [/指令|寻址|操作码|RISC|CISC/, "一条机器指令通常说明做什么、数据在哪里，以及结果放到哪里。", "像工单：动作是操作码，材料位置是地址码。", "先分清操作码和地址字段，再根据寻址方式算出真正的有效地址。", "立即数是数据本身；寄存器编号、地址和其中的内容不是一回事。"],
  [/流水|数据冒险|控制冒险/, "流水线让多条指令像生产线一样重叠执行，从而提高吞吐量。", "洗衣、烘干、折叠可由不同工位同时处理不同批衣服。", "画周期表，逐拍标出各指令所在阶段，再插入停顿或转发。", "流水线缩短一批指令的总时间，却不一定缩短单条指令延迟。"],
  [/中断|DMA|I\/O|总线/, "I/O 负责 CPU 与外设交换数据；中断让设备准备好后主动通知 CPU。", "像下单后先做别的事，餐好了由取餐器提醒。", "先确定谁发起、数据经过哪里、CPU 何时参与，再统计传输或响应时间。", "DMA 仍需 CPU 初始化，但成块传输时不要求 CPU 搬运每个字。"],
  [/进程|线程|信号量|互斥|同步|PV/, "进程是运行中的程序，线程是进程内的执行路线；信号量用来约束并发顺序。", "像多人共用厨房：互斥保证灶台一次一人，同步保证菜切好后才能下锅。", "为每个约束写信号量初值，在必须等待处 P，在完成并可唤醒别人处 V。", "P/V 先后顺序错误会造成同时进入临界区或永久等待。"],
  [/调度|周转|响应比|时间片/, "调度算法决定就绪任务谁先使用 CPU。", "像窗口叫号，不同规则会偏向先来者、短业务或高优先级者。", "画到达时间轴，逐段选择运行任务，再计算完成、周转和等待时间。", "周转时间=完成时间-到达时间；带权周转时间还要除以运行时间。"],
  [/死锁|银行家/, "死锁是多个任务各自占着资源，又等待别人手里的资源，导致所有人都无法继续。", "两辆车在窄路中互不相让，谁都过不去。", "列出已分配、尚需和可用资源，反复寻找能完成的进程形成安全序列。", "不安全状态不等于已经死锁，但意味着系统不能保证避免死锁。"],
  [/页表|分页|TLB|缺页|页面置换|虚拟内存/, "虚拟内存把程序看到的地址分成页，再映射到实际内存中的页框。", "像书的目录把逻辑页码指向不同书架位置。", "地址先拆页号和页内偏移，用页表/TLB 找页框；缺页时再执行置换。", "页内偏移位数只由页面大小决定，地址变换前后偏移不变。"],
  [/文件|索引结点|目录|磁盘|SCAN/, "文件系统负责命名和定位数据，磁盘调度负责安排磁头访问顺序。", "目录像图书目录，索引结点像馆藏卡，数据块像真正的书页。", "先区分文件元数据与数据块，再按直接/间接索引或磁道顺序逐步计算。", "间接索引块本身也占磁盘块；目录项、索引结点和文件内容不在同一层。"],
  [/以太网|CSMA|MAC|交换机|帧/, "链路层负责同一段网络内的成帧和介质访问，交换机依据 MAC 地址转发。", "像小区内部快递站按楼栋标签分拣。", "先确定冲突域/广播域，再沿交换机端口和 MAC 表跟踪每一帧。", "交换机隔离冲突域但默认不隔离广播域；路由器才连接不同 IP 网络。"],
  [/IP|子网|CIDR|掩码|路由|ICMP/, "IP 地址由网络部分和主机部分组成，子网掩码决定分界线。", "像地址中的城市和门牌号；路由表负责选择下一站。", "把地址和掩码写成二进制并做按位与得到网络号，再按最长前缀匹配选路由。", "可用主机地址通常要排除全 0 的网络地址和全 1 的广播地址。"],
  [/TCP|窗口|拥塞|确认号|序号|UDP/, "TCP 用序号、确认和窗口实现可靠的字节流传输；UDP 更简单但不保证可靠。", "像带回执的连续编号包裹；确认号表示下一件期待收到的编号。", "在时间轴上标出每段序号、长度、确认号和窗口变化，再处理丢失与重传。", "TCP 序号按字节计数，不按报文段计数；确认号通常指向下一字节。"],
  [/DNS|HTTP|FTP|应用层/, "应用层协议规定具体网络服务怎样交流，例如网页、域名解析和文件传输。", "DNS 像通讯录，HTTP 像网页取件规则。", "先写出客户端、服务器和中间节点，再按请求—响应顺序列出所用协议和端口。", "DNS 查询与域名解析过程不要和 IP 层路由过程混为一谈。"]
];

function beginnerGuide(item) {
  const base = SUBJECT_GUIDES[item.subject] || SUBJECT_GUIDES["数据结构"];
  const hay = `${item.topic} ${item.question}`;
  const hit = TOPIC_GUIDES.find(([pattern]) => pattern.test(hay));
  const [plain, analogy, steps, trap] = hit ? hit.slice(1) : base;
  const method = item.options.length
    ? "先不要猜答案。把 A、B、C、D 逐项带回定义或计算结果；只要一个选项违反题干中的必要条件，就先排除。"
    : "先列出已知量和所求量，再画结构图、时间轴或地址拆分图；每得到一个中间结果，就写清它来自哪个条件。";
  return `<div class="teacher-flow">
    <div class="flow-step"><span>01</span><div><b>先把题干读成人话</b><p>这是一道“${escapeHtml(item.topic)}”题。先圈出限制词、数量、顺序、单位和题目真正要问的对象，不急着套公式。</p></div></div>
    <div class="flow-step"><span>02</span><div><b>用熟悉的场景理解</b><p>${escapeHtml(analogy)}</p></div></div>
    <div class="flow-step"><span>03</span><div><b>翻译成计算机模型</b><p>${escapeHtml(plain)}</p></div></div>
    <div class="flow-step"><span>04</span><div><b>按步骤推，不跳步</b><p>${escapeHtml(steps)} ${escapeHtml(method)}</p></div></div>
    <div class="flow-step"><span>05</span><div><b>回头排坑并记结论</b><p>${escapeHtml(trap)}</p></div></div>
  </div>${renderOptionEvidence(item)}`;
}

function renderOptionEvidence(item) {
  if (!item.options.length) return "";
  const sentences = String(item.analysis).split(/(?<=[。；！？])/).map(text => text.trim()).filter(Boolean);
  return `<div class="option-evidence"><h5>按老师的方式逐项核对</h5>${item.options.map(opt => {
    const key = optionKey(opt);
    const text = optionPlainText(opt).replace(new RegExp(`^${key}[.．、\\s]*`), "");
    const evidence = sentences.find(sentence => sentence.includes(`${key}选项`) || sentence.includes(`选项${key}`));
    const correct = key === item.answer;
    const fallback = correct
      ? "与逐题解析的最终结论一致。"
      : "不满足题干中的决定性条件；请用上面的定义或中间结果再核对一次。";
    return `<div class="evidence-row ${correct ? "is-answer" : ""}"><strong>${correct ? "✓" : "×"} ${escapeHtml(key)}</strong><span>${escapeHtml(text)}</span><p>${escapeHtml(evidence || fallback)}</p></div>`;
  }).join("")}</div>`;
}

function storeKey(id) {
  return `exam408:${id}`;
}

function getRecord(id) {
  const raw = localStorage.getItem(storeKey(id));
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

function setRecord(id, value) {
  localStorage.setItem(storeKey(id), JSON.stringify(value));
}

function removeRecord(id) {
  localStorage.removeItem(storeKey(id));
}

function currentExam() {
  return availableExams.find(exam => exam.year === Number(state.year));
}

function allRecordsForExam(exam) {
  return exam.items.map(item => [item, getRecord(item.id)]).filter(([, rec]) => rec);
}

function visibleItems(exam, wrongsOnly = state.wrongOnly) {
  const needle = state.search.trim().toLowerCase();
  return exam.items.filter(item => {
    if (state.subject && item.subject !== state.subject) return false;
    if (wrongsOnly) {
      const rec = getRecord(item.id);
      if (!rec || !rec.wrong) return false;
    }
    if (!needle) return true;
    const hay = `${item.number} ${item.subject} ${item.topic} ${item.question} ${item.analysis}`.toLowerCase();
    return hay.includes(needle);
  });
}

function renderStats(exam) {
  const records = allRecordsForExam(exam);
  const done = records.length;
  const right = records.filter(([, rec]) => rec.correct).length;
  const wrong = records.filter(([, rec]) => rec.wrong).length;
  els.doneCount.textContent = done;
  els.rightRate.textContent = done ? `${Math.round((right / done) * 100)}%` : "0%";
  els.wrongCount.textContent = wrong;
}

function statusText(item, rec) {
  if (!rec) return "";
  if (item.options.length) return rec.correct ? "正确" : "错误";
  return rec.wrong ? "待复习" : "已掌握";
}

function renderKnowledgeLinks(item) {
  return "";
}

function renderQuestion(item) {
  const rec = getRecord(item.id);
  const card = document.createElement("article");
  card.className = "question-card";
  card.dataset.questionId = item.id;
  const statusClass = rec ? (rec.wrong ? "wrong" : "right") : "";
  const questionMarkup = item.questionHtml || escapeHtml(item.question);
  card.innerHTML = `
    <div class="question-head">
      <div class="question-title">
        <span class="q-num">${item.year} 第 ${item.number} 题</span>
        <span class="tag subject">${item.subject}</span>
        <span class="tag">${item.topic}</span>
        <span class="tag warn">${item.kind}</span>
      </div>
      <div class="status ${statusClass}">${statusText(item, rec)}</div>
    </div>
    <div class="question-body">
      <div class="question-text">${questionMarkup}</div>
      ${renderOptions(item, rec)}
      <div class="actions">
        ${item.options.length ? '<button class="primary-btn submit-answer" type="button">提交并看解析</button>' : '<button class="primary-btn mark-mastered" type="button">自评掌握</button><button class="plain-btn mark-wrong" type="button">标记待复习</button>'}
        <button class="plain-btn reveal-analysis" type="button">查看解析</button>
        ${item.videoPage ? `<a class="video-link" href="https://www.bilibili.com/video/BV1icaxz8EXN/?p=${item.videoPage}&t=${item.videoTime ?? 0}" target="_blank" rel="noopener noreferrer">打开本题对应视频分集 ↗</a>` : ""}
      </div>
      <div class="reveal ${rec ? "open" : ""}">
        <div class="answer-line">${item.answer ? `正确答案：${item.answer}` : "主观题：按解析过程自评"}</div>
        <div class="info-box beginner-box"><h4>按视频老师的讲题方式 · ${escapeHtml(item.topic)}</h4><p class="method-note">依据视频中的讲题顺序重新组织，属于详细整理，不是逐字稿。</p>${beginnerGuide(item)}</div>
        <div class="info-box official-box"><h4>逐题推导与标准解析</h4><p>${escapeHtml(item.analysis)}</p></div>
        <div class="info-box"><h4>复习定位</h4><p>${escapeHtml(item.knowledge)}</p>${renderKnowledgeLinks(item)}</div>
        ${renderWrongAnalysis(item, rec)}
      </div>
    </div>
  `;
  wireQuestion(card, item);
  if (window.QuestionPaperImage?.hasComplexLayout(questionMarkup)) {
    window.QuestionPaperImage.makePaperImage(card.querySelector(".question-text"), `${item.year} 年第 ${item.number} 题真题题面`);
  }
  return card;
}

function renderOptions(item, rec) {
  if (!item.options.length) return "";
  const selected = rec?.selected || "";
  const isRevealed = Boolean(rec);
  return `<div class="options">${item.options.map(opt => {
    const key = typeof opt === "string" ? opt : opt.key;
    const label = typeof opt === "string" ? opt : (opt.html || escapeHtml(opt.text || opt.key));
    const classes = ["option-btn"];
    if (selected === key) classes.push("selected");
    if (isRevealed && item.answer === key) classes.push("correct");
    if (isRevealed && selected === key && item.answer && selected !== item.answer) classes.push("incorrect");
    return `<button class="${classes.join(" ")}" data-option="${key}" type="button">${label}</button>`;
  }).join("")}</div>`;
}

function optionKey(opt) {
  return typeof opt === "string" ? opt : opt.key;
}

function optionPlainText(opt) {
  if (!opt) return "";
  if (typeof opt === "string") return opt;
  if (opt.text) return opt.text.replace(/\s+/g, " ").trim();
  const holder = document.createElement("div");
  holder.innerHTML = opt.html || opt.key || "";
  return holder.textContent.replace(/\s+/g, " ").trim();
}

function renderWrongAnalysis(item, rec) {
  if (!rec || !rec.wrong) return "";
  if (item.options.length && rec.selected) {
    const selectedOption = item.options.find(opt => optionKey(opt) === rec.selected);
    const correctOption = item.options.find(opt => optionKey(opt) === item.answer);
    const selectedText = optionPlainText(selectedOption) || rec.selected;
    const correctText = optionPlainText(correctOption) || item.answer || "未给出";
    const reason = [
      `你选择了 ${rec.selected}：${selectedText}`,
      item.answer ? `正确答案是 ${item.answer}：${correctText}` : "本题未识别到标准答案。",
      `错因重点：这个错误通常不是单纯记忆问题，而是对「${item.topic}」的判定条件、适用范围或计算步骤没有和题干逐项对应。`,
      "订正动作：先只比较错误选项和正确选项的差异，再回到上方解析中找出决定答案的关键词、公式或边界条件。"
    ].join("\n");
    return `<div class="info-box wrong-box"><h4>错题分析详情</h4><p>${escapeHtml(reason)}</p></div>`;
  }
  const review = `你将本题标记为待复习。复盘时先定位「${item.topic}」对应的定义、公式或步骤，再对照上方解析补齐遗漏。`;
  return `<div class="info-box wrong-box"><h4>错题分析详情</h4><p>${escapeHtml(review)}</p></div>`;
}

function wireQuestion(card, item) {
  let selected = getRecord(item.id)?.selected || "";
  card.querySelectorAll(".option-btn").forEach(button => {
    button.addEventListener("click", () => {
      selected = button.dataset.option;
      card.querySelectorAll(".option-btn").forEach(btn => btn.classList.toggle("selected", btn === button));
    });
  });
  const reveal = card.querySelector(".reveal");
  card.querySelector(".reveal-analysis").addEventListener("click", () => {
    reveal.classList.add("open");
  });
  const submit = card.querySelector(".submit-answer");
  if (submit) {
    submit.addEventListener("click", () => {
      if (!selected) {
        alert("请先选择 A/B/C/D。");
        return;
      }
      const correct = item.answer ? selected === item.answer : false;
      setRecord(item.id, { selected, correct, wrong: !correct, revealed: true, updatedAt: Date.now() });
      render();
    });
  }
  const mastered = card.querySelector(".mark-mastered");
  if (mastered) {
    mastered.addEventListener("click", () => {
      setRecord(item.id, { selected: "mastered", correct: true, wrong: false, revealed: true, updatedAt: Date.now() });
      render();
    });
  }
  const wrong = card.querySelector(".mark-wrong");
  if (wrong) {
    wrong.addEventListener("click", () => {
      setRecord(item.id, { selected: "review", correct: false, wrong: true, revealed: true, updatedAt: Date.now() });
      render();
    });
  }
}

function renderQuiz(exam) {
  const items = visibleItems(exam);
  els.questionList.innerHTML = "";
  if (!items.length) {
    els.questionList.innerHTML = '<div class="empty-state">当前筛选条件下没有题目。</div>';
    return;
  }
  const fragment = document.createDocumentFragment();
  items.forEach(item => fragment.appendChild(renderQuestion(item)));
  els.questionList.appendChild(fragment);
}

function renderAnalysis(exam) {
  const topics = exam.summary.topTopics || [];
  const subjects = Object.entries(exam.summary.subjects || {});
  els.paperAnalysis.innerHTML = `
    <article class="analysis-card">
      <h3>本卷考点概览</h3>
      <p>${escapeHtml(exam.summary.note)}</p>
      ${topics.map(([topic, count]) => `<div class="topic-row"><span>${escapeHtml(topic)}</span><strong>${count} 题</strong></div>`).join("")}
    </article>
    <article class="analysis-card">
      <h3>科目分布</h3>
      ${subjects.map(([subject, count]) => `<div class="topic-row"><span>${escapeHtml(subject)}</span><strong>${count} 题</strong></div>`).join("")}
      <h3 style="margin-top:16px">抽取质量</h3>
      <p>题面文本：${exam.quality.questionTextCount}/47；解析文本：${exam.quality.solutionTextCount}/47；选择题答案：${exam.quality.answerCount}/40。</p>
    </article>
  `;
}

function renderWrongs(exam) {
  const previous = state.wrongOnly;
  state.wrongOnly = true;
  const items = visibleItems(exam, true);
  state.wrongOnly = previous;
  els.wrongList.innerHTML = "";
  if (!items.length) {
    els.wrongList.innerHTML = '<div class="empty-state">还没有错题。答题后选错或标记待复习的题目会出现在这里。</div>';
    return;
  }
  const fragment = document.createDocumentFragment();
  items.forEach(item => fragment.appendChild(renderQuestion(item)));
  els.wrongList.appendChild(fragment);
}

function render() {
  const exam = currentExam();
  if (!exam) return;
  els.examTitle.textContent = `${exam.year} 年计算机 408 统考真题`;
  els.examMeta.textContent = `共 ${exam.items.length} 题 · 逐题答案 · 零基础导读 · 错题复盘`;
  els.paperPdf.href = exam.paperPdf;
  els.answerPdf.href = exam.answerPdf;
  renderStats(exam);
  renderQuiz(exam);
  renderAnalysis(exam);
  renderWrongs(exam);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function init() {
  availableExams = window.EXAMS;
  const params = new URLSearchParams(location.search);
  const requestedQuestion = params.get("question");
  const requestedSubject = params.get("subject");
  const requestedSearch = params.get("search");
  availableExams.forEach(exam => {
    const option = document.createElement("option");
    option.value = exam.year;
    option.textContent = `${exam.year} 年`;
    els.yearSelect.appendChild(option);
  });
  const requestedExam = requestedQuestion ? availableExams.find(exam => exam.items.some(item => item.id === requestedQuestion)) : null;
  state.year = requestedExam?.year || availableExams[0]?.year;
  els.yearSelect.value = state.year;
  if (requestedSubject && [...els.subjectSelect.options].some(option => option.value === requestedSubject)) {
    state.subject = requestedSubject;
    els.subjectSelect.value = requestedSubject;
  }
  if (requestedSearch) {
    state.search = requestedSearch;
    els.searchInput.value = requestedSearch;
  }

  els.yearSelect.addEventListener("change", () => { state.year = Number(els.yearSelect.value); render(); });
  els.subjectSelect.addEventListener("change", () => { state.subject = els.subjectSelect.value; render(); });
  els.searchInput.addEventListener("input", () => { state.search = els.searchInput.value; render(); });
  els.wrongOnly.addEventListener("change", () => { state.wrongOnly = els.wrongOnly.checked; render(); });
  els.resetYear.addEventListener("click", () => {
    const exam = currentExam();
    if (!exam) return;
    if (!confirm(`清空 ${exam.year} 年的本地答题记录？`)) return;
    exam.items.forEach(item => removeRecord(item.id));
    render();
  });
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      state.view = tab.dataset.view;
      document.querySelectorAll(".tab").forEach(el => el.classList.toggle("active", el === tab));
      document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === `${state.view}View`));
    });
  });
  render();
  if (requestedQuestion) {
    const target = [...document.querySelectorAll(".question-card")].find(card => card.dataset.questionId === requestedQuestion);
    if (target) {
      target.classList.add("linked-question");
      target.scrollIntoView({ block: "start" });
    }
  }
}

init();
const state={year:2010,section:"",type:"",search:"",wrongOnly:false,view:"exam"};
const el=id=>document.getElementById(id);
const els={year:el("yearSelect"),section:el("sectionSelect"),type:el("typeSelect"),search:el("searchInput"),wrongOnly:el("wrongOnly"),list:el("questionList"),title:el("examTitle"),meta:el("examMeta"),done:el("doneCount"),rate:el("rightRate"),wrong:el("wrongCount"),reset:el("resetYear"),filters:el("filters"),examView:el("examView"),methodView:el("methodView"),methodList:el("methodList")};
const key=id=>`english2-study:${id}`;
function record(id){try{return JSON.parse(localStorage.getItem(key(id))||"null")}catch{return null}}
function save(id,value){localStorage.setItem(key(id),JSON.stringify(value))}
function exam(){return window.ENGLISH2_DATA.years.find(x=>x.year===Number(state.year))}
function esc(value){return String(value??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}
function text(value){return esc(value).replaceAll("\n","<br>")}
function visibleItems(data){const needle=state.search.trim().toLowerCase();return data.items.filter(item=>{if(state.section&&item.section!==state.section)return false;if(state.type&&item.questionType!==state.type)return false;if(state.wrongOnly&&!record(item.id)?.wrong)return false;if(!needle)return true;const hay=[item.number,item.questionType,item.stem,item.body,item.keywords.join(" "),...item.options.map(x=>x.text)].join(" ").toLowerCase();return hay.includes(needle)})}
function renderStats(data){const rows=data.items.map(item=>record(item.id)).filter(Boolean);const mastered=rows.filter(x=>!x.wrong).length;const wrong=rows.filter(x=>x.wrong).length;els.done.textContent=rows.length;els.rate.textContent=rows.length?`${Math.round(mastered/rows.length*100)}%`:"0%";els.wrong.textContent=wrong}
function passageBlock(data,item){const ps=data.passages[item.passageId]||[];if(!ps.length)return "";return `<details class="passage"><summary>展开本篇原文（${ps.length} 段）</summary>${ps.map((p,i)=>`<p><b>¶${i+1}</b> ${esc(p)}</p>`).join("")}</details>`}
function optionsBlock(item){if(!item.options.length)return "";return `<div class="options">${item.options.map(o=>`<button data-choice="${o.label}"><b>${o.label}</b><span>${esc(o.text)}</span></button>`).join("")}</div>`}
function wrongBlock(item){if(!item.wrongOptions.length)return `<p>${esc(item.method.compare)}</p>`;return `<p>${esc(item.method.compare)}</p><div class="wrong-grid">${item.wrongOptions.map(o=>`<div><b>${o.label}</b><p>${esc(o.text)}</p><small>${esc(o.issue)}</small></div>`).join("")}</div>`}
function card(data,item){const rec=record(item.id);const article=document.createElement("article");article.className="question-card";const answer=item.numberValue<=40?`${item.answer}. ${item.correctText}`:item.answer;article.innerHTML=`
  <header><div><b>${item.year} 第 ${item.number} 题</b><span>${item.section}</span><span>${item.questionType}</span>${item.originalLecture?'<span class="original">老师原讲</span>':'<span class="transfer">方法迁移</span>'}</div><em class="${rec?.wrong?'bad':rec?'good':''}">${rec?.wrong?'待复习':rec?'已掌握':''}</em></header>
  ${passageBlock(data,item)}
  <div class="question"><h4>${text(item.stem)}</h4>${item.body?`<div class="task-body">${text(item.body)}</div>`:""}</div>
  ${optionsBlock(item)}
  <div class="actions"><button class="primary reveal">展开详细讲解</button><a href="${item.videoUrl}" target="_blank" rel="noreferrer">${esc(item.videoLabel)} ↗</a><a href="${item.sourceUrl}" target="_blank" rel="noreferrer">核对题面来源 ↗</a></div>
  <section class="explanation ${rec?'open':''}">
    <div class="answer">参考答案：${text(answer)}</div>
    <div class="step"><span>01</span><div><h4>先判题型，不急着读全文</h4><p>${esc(item.method.entry)}</p></div></div>
    <div class="step"><span>02</span><div><h4>题干抓手</h4><p>${item.keywords.length?item.keywords.map(x=>`<code>${esc(x)}</code>`).join(" "):"本题没有稳定的专名或数字抓手，直接围绕所问关系定位。"}</p><p>${esc(item.method.locate)}</p></div></div>
    <div class="step evidence"><span>03</span><div><h4>精准定位：这句必须回答题干</h4><p class="quote">${esc(item.evidence.sentence)}</p><small>${item.evidence.paragraph?`原文第 ${item.evidence.paragraph} 段。`:""}${esc(item.evidence.reason)}</small></div></div>
    <div class="step"><span>04</span><div><h4>选项比错</h4>${wrongBlock(item)}</div></div>
    <div class="step warning"><span>05</span><div><h4>最后检查</h4><p>${esc(item.method.check)}</p></div></div>
    ${item.numberValue>40?`<div class="step reference"><span>06</span><div><h4>参考译文 / 行文思路 / 范文</h4><p>${text(item.reference)}</p></div></div>`:""}
    <div class="review"><button class="master">标记已掌握</button><button class="needs-review">标记待复习</button></div>
  </section>`;
  article.querySelector(".reveal").onclick=()=>article.querySelector(".explanation").classList.toggle("open");
  article.querySelectorAll("[data-choice]").forEach(btn=>btn.onclick=()=>{article.querySelectorAll("[data-choice]").forEach(x=>x.classList.remove("selected"));btn.classList.add("selected")});
  article.querySelector(".master").onclick=()=>{save(item.id,{wrong:false,time:Date.now()});render()};
  article.querySelector(".needs-review").onclick=()=>{save(item.id,{wrong:true,time:Date.now()});render()};
  return article;
}
function render(){const data=exam();els.title.textContent=`${data.year} 年考研英语二真题`;els.meta.textContent=`48 个题号 · ${data.analysisUnits} 个解析单元 · 完形、阅读、翻译与写作`;renderStats(data);const items=visibleItems(data);els.list.innerHTML="";if(!items.length){els.list.innerHTML='<div class="empty">当前筛选条件下没有题目。</div>';return}const frag=document.createDocumentFragment();items.forEach(item=>frag.appendChild(card(data,item)));els.list.appendChild(frag)}
function renderMethod(){els.methodList.innerHTML=window.ENGLISH2_DATA.methodology.map((m,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><div><h3>${esc(m.title)}</h3><p>${esc(m.content)}</p></div></article>`).join("")}
function setView(view){state.view=view;document.querySelectorAll(".view-switch button").forEach(b=>b.classList.toggle("active",b.dataset.view===view));els.examView.classList.toggle("active",view==="exam");els.methodView.classList.toggle("active",view==="method");els.filters.hidden=view!=="exam"}
function init(){window.ENGLISH2_DATA.years.forEach(data=>{const option=document.createElement("option");option.value=data.year;option.textContent=`${data.year} 年`;els.year.appendChild(option)});const types=[...new Set(window.ENGLISH2_DATA.years.flatMap(y=>y.items.map(q=>q.questionType)))];types.forEach(type=>{const option=document.createElement("option");option.textContent=type;els.type.appendChild(option)});els.year.onchange=()=>{state.year=Number(els.year.value);render()};els.section.onchange=()=>{state.section=els.section.value;render()};els.type.onchange=()=>{state.type=els.type.value;render()};els.search.oninput=()=>{state.search=els.search.value;render()};els.wrongOnly.onchange=()=>{state.wrongOnly=els.wrongOnly.checked;render()};els.reset.onclick=()=>{const data=exam();if(confirm(`清空 ${data.year} 年学习记录？`)){data.items.forEach(item=>localStorage.removeItem(key(item.id)));render()}};document.querySelectorAll(".view-switch button").forEach(btn=>btn.onclick=()=>setView(btn.dataset.view));renderMethod();render()}
init();

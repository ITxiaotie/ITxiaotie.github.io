const state={year:2016,kind:"",subject:"",search:"",wrongOnly:false};
let availableExams=window.MATH2_EXAMS;
const el=id=>document.getElementById(id);
const els={year:el("yearSelect"),kind:el("kindSelect"),subject:el("subjectSelect"),search:el("searchInput"),wrongOnly:el("wrongOnly"),list:el("questionList"),title:el("examTitle"),meta:el("examMeta"),video:el("yearVideo"),done:el("doneCount"),rate:el("rightRate"),wrong:el("wrongCount"),reset:el("resetYear")};
const key=id=>`math2-study:${id}`;
function record(id){try{return JSON.parse(localStorage.getItem(key(id))||"null")}catch{return null}}
function save(id,value){localStorage.setItem(key(id),JSON.stringify(value))}
function syncWrong(item,wrong){window.WrongBook?.capture({id:`math2-${item.id}`,module:"数学二真题",subject:item.subject,topic:item.topic,prompt:item.question,answer:item.answer,analysis:item.guide?.method||"按详细讲解重新演算。",href:`${location.pathname}?year=${item.year}&question=${encodeURIComponent(item.id)}`},!wrong)}
function exam(){return availableExams.find(x=>x.year===Number(state.year))}
function escapeHtml(value){return String(value??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}
function mathText(value){return escapeHtml(value).replaceAll("\n","<br>")}
function visibleItems(data){const needle=state.search.trim().toLowerCase();return data.items.filter(item=>{if(state.kind&&item.kind!==state.kind)return false;if(state.subject&&item.subject!==state.subject)return false;if(state.wrongOnly&&!record(item.id)?.wrong)return false;if(!needle)return true;return `${item.number} ${item.topic} ${item.subject} ${item.question}`.toLowerCase().includes(needle)})}
function renderStats(data){const rows=data.items.map(item=>record(item.id)).filter(Boolean);const mastered=rows.filter(x=>!x.wrong).length;const wrong=rows.filter(x=>x.wrong).length;els.done.textContent=rows.length;els.rate.textContent=rows.length?`${Math.round(mastered/rows.length*100)}%`:"0%";els.wrong.textContent=wrong}
function formulaBlock(item){
  if(!item.keyFormulas?.length)return '<p class="muted">本题的关键在方法选择与条件检查，请沿上面的标准路线逐步写出演算。</p>';
  return `<div class="formulas">${item.keyFormulas.map((f,i)=>{
    const hint=i===0?'先把题目条件翻译成可计算的关系。':i===item.keyFormulas.length-1?'最后把所得结果与题目所求或选项对应。':'沿上一式继续化简；每次只改变一件事，并检查符号与适用条件。';
    return `<div><span>式 ${i+1}</span><small>${hint}</small>\\[${escapeHtml(f)}\\]</div>`
  }).join("")}</div>`
}
function card(item){const rec=record(item.id);const article=document.createElement("article");article.className="question-card";article.innerHTML=`
  <header><div><b>${item.year} 第 ${item.number} 题</b><span>${item.kind}</span><span>${item.subject}</span><span>${item.topic}</span></div><em class="${rec?.wrong?'bad':rec?'good':''}">${rec?.wrong?'待复习':rec?'已掌握':''}</em></header>
  <div class="question">${mathText(item.question)}</div>
  <div class="actions">${item.kind==='单项选择题'?'<button data-choice="A">A</button><button data-choice="B">B</button><button data-choice="C">C</button><button data-choice="D">D</button>':''}<button class="primary reveal">展开详细讲解</button><a href="${item.videoUrl}" target="_blank" rel="noopener noreferrer">对应视频分集 ↗</a>${item.videoExtraUrl?`<a href="${item.videoExtraUrl}" target="_blank" rel="noopener noreferrer">第10题严格证明补充 ↗</a>`:''}</div>
  <section class="explanation ${rec?'open':''}">
    <div class="answer">参考答案：${mathText(item.answer)}</div>
    <div class="step"><span>01</span><div><h4>先判断入口</h4><p>${escapeHtml(item.guide.concept)}</p></div></div>
    <div class="step"><span>02</span><div><h4>按老师的标准路线演算</h4><p>${escapeHtml(item.guide.method)}</p></div></div>
    <div class="step"><span>03</span><div><h4>本题关键演算式</h4>${formulaBlock(item)}</div></div>
    <div class="step warning"><span>04</span><div><h4>检查易错点</h4><p>${escapeHtml(item.guide.pitfall)}</p></div></div>
    <div class="step"><span>05</span><div><h4>做完再扩一层</h4><p>${escapeHtml(item.guide.extension)}</p></div></div>
    <div class="review"><button class="master">标记已掌握</button><button class="needs-review">标记待复习</button><a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">核对题面来源 ↗</a></div>
  </section>`;
  article.querySelector('.reveal').onclick=()=>{article.querySelector('.explanation').classList.add('open');typeset(article)};
  article.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>{article.querySelectorAll('[data-choice]').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected')});
  article.querySelector('.master').onclick=()=>{save(item.id,{wrong:false,time:Date.now()});syncWrong(item,false);render()};
  article.querySelector('.needs-review').onclick=()=>{save(item.id,{wrong:true,time:Date.now()});syncWrong(item,true);render()};
  const stem=article.querySelector('.question');
  if(window.QuestionPaperImage?.hasComplexLayout(item.question))stem.dataset.paperLabel=`${item.year} 年第 ${item.number} 题真题题面`;
  return article;
}
function typeset(node=document){return window.MathJax?.typesetPromise?window.MathJax.typesetPromise([node]).catch(()=>{}):Promise.resolve()}
function render(){const data=exam();els.title.textContent=`${data.year} 年考研数学二真题`;els.meta.textContent=`${data.items.length} 题 · 高等数学与线性代数 · 视频式五步讲解`;els.video.href=`https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=${data.videoPage}`;renderStats(data);const items=visibleItems(data);els.list.innerHTML='';if(!items.length){els.list.innerHTML='<div class="empty">当前筛选条件下没有题目。</div>';return}const frag=document.createDocumentFragment();items.forEach(item=>frag.appendChild(card(item)));els.list.appendChild(frag);typeset(els.list).then(()=>els.list.querySelectorAll('.question[data-paper-label]').forEach(stem=>window.QuestionPaperImage?.makePaperImage(stem,stem.dataset.paperLabel)))}
function init(){availableExams=window.MATH2_EXAMS;state.year=availableExams[0]?.year;availableExams.forEach(data=>{const option=document.createElement('option');option.value=data.year;option.textContent=`${data.year} 年`;els.year.appendChild(option)});els.year.value=state.year;els.year.onchange=()=>{state.year=Number(els.year.value);render()};els.kind.onchange=()=>{state.kind=els.kind.value;render()};els.subject.onchange=()=>{state.subject=els.subject.value;render()};els.search.oninput=()=>{state.search=els.search.value;render()};els.wrongOnly.onchange=()=>{state.wrongOnly=els.wrongOnly.checked;render()};els.reset.onclick=()=>{const data=exam();if(confirm(`清空 ${data.year} 年学习记录？`)){data.items.forEach(item=>localStorage.removeItem(key(item.id)));render()}};render()}
init();

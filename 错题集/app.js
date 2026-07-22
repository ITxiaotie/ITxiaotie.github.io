(() => {
  "use strict";
  const list = document.querySelector("#list"), filters = document.querySelector("#filters");
  let moduleFilter = "", selected = new Map();
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
  function render() {
    const all = window.WrongBook.read();
    document.querySelector("#pending").textContent = all.length;
    document.querySelector("#attempts").textContent = all.reduce((sum,row)=>sum+(row.attempts||1),0);
    const modules=[...new Set(all.map(row=>row.module||"其他"))];
    filters.innerHTML=["",...modules].map(value=>`<button class="${value===moduleFilter?'active':''}" data-filter="${esc(value)}">${value||"全部"}</button>`).join("");
    const rows=all.filter(row=>!moduleFilter||(row.module||"其他")===moduleFilter);
    if(!rows.length){list.innerHTML='<div class="empty">当前没有待重做错题。继续保持，目标就是全部清零。</div>';return}
    list.innerHTML=rows.map(row=>`<article class="card" data-id="${esc(row.id)}"><div class="meta"><span>${esc(row.module||"其他")}</span><span>${esc(row.subject||"")}</span><span>${esc(row.topic||"")}</span><span>已错 ${row.attempts||1} 次</span></div><h2>${esc(row.prompt||row.title||row.id)}</h2>${row.options?.length?`<div class="choices">${row.options.map(opt=>`<button data-choice="${esc(opt.key)}"><b>${esc(opt.key)}</b> ${esc(opt.text)}</button>`).join("")}</div>`:""}<div class="answer" hidden><b>正确答案：</b>${esc(row.answer||"请按原解析核对")}\n${esc(row.analysis||"")}</div><div class="actions"><button class="primary check">${row.options?.length?"提交重做答案":"我已重新做对"}</button><button class="review">展开答案</button>${row.href?`<a href="${esc(row.href)}">返回原题</a>`:""}</div></article>`).join("");
  }
  filters.onclick=(event)=>{const b=event.target.closest('[data-filter]');if(b){moduleFilter=b.dataset.filter;render()}};
  list.onclick=(event)=>{const card=event.target.closest('.card');if(!card)return;const id=card.dataset.id,row=window.WrongBook.read().find(item=>item.id===id);const choice=event.target.closest('[data-choice]');if(choice){selected.set(id,choice.dataset.choice);card.querySelectorAll('[data-choice]').forEach(b=>b.classList.toggle('selected',b===choice));return}if(event.target.closest('.review')){card.querySelector('.answer').hidden=false;return}if(event.target.closest('.check')){const ok=row?.options?.length?selected.get(id)===row.answer:true;if(ok){window.WrongBook.resolve(id);selected.delete(id);render()}else{window.WrongBook.capture(row,false);card.querySelector('.answer').hidden=false;alert('还没有做对，已保留在错题集中，请看解析后再做一次。')}}};
  document.querySelector("#clear").onclick=()=>{if(confirm("确定清空全站错题集吗？")){window.WrongBook.clear();render()}};
  render();
})();

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const subjectDir = fs.readdirSync(root, { withFileTypes: true }).find((entry) => entry.isDirectory() && entry.name.startsWith("408"))?.name;
if (!subjectDir) throw new Error("未找到 408 目录");

const context = { window: {}, console };
vm.createContext(context);
for (const relative of [path.join(subjectDir, "knowledge", "knowledge-data.js"), path.join(subjectDir, "data", "exams.js")]) {
  vm.runInContext(fs.readFileSync(path.join(root, relative), "utf8"), context, { filename: relative });
}

const cards = context.window.KNOWLEDGE_DATA;
const exams = context.window.EXAMS;
const questions = exams.flatMap((exam) => exam.items);
const ids = new Set();
const errors = [];

for (const card of cards) {
  if (ids.has(card.id)) errors.push(`重复知识点 ID: ${card.id}`);
  ids.add(card.id);
  for (const field of ["subject", "chapter", "title", "summary"]) if (!card[field]) errors.push(`${card.id} 缺少 ${field}`);
  for (const field of ["core", "formulas", "method", "traps", "keywords"]) if (!Array.isArray(card[field]) || !card[field].length) errors.push(`${card.id} 的 ${field} 为空`);
  if (!card.practice?.prompt || !card.practice?.answer || !card.practice?.explanation) errors.push(`${card.id} 缺少完整章节练习`);
}

const refCounts = new Map(cards.map((card) => [card.id, 0]));
for (const question of questions) {
  const refs = context.window.findKnowledgeRefs(question);
  if (!refs.length) errors.push(`${question.id} 没有知识点回溯`);
  if (refs.length > 3) errors.push(`${question.id} 回溯链接超过 3 个`);
  for (const ref of refs) {
    if (!ids.has(ref.id)) errors.push(`${question.id} 指向不存在的知识点 ${ref.id}`);
    refCounts.set(ref.id, (refCounts.get(ref.id) || 0) + 1);
  }
}

for (const file of [path.join(subjectDir, "index.html"), path.join(subjectDir, "knowledge", "index.html"), path.join(subjectDir, "knowledge", "practice.html")]) {
  const full = path.join(root, file);
  const html = fs.readFileSync(full, "utf8");
  const attr = /(?:src|href)="([^"#?]+)(?:[?#][^"]*)?"/g;
  for (const match of html.matchAll(attr)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|data:)/.test(target)) continue;
    const resolved = path.resolve(path.dirname(full), decodeURIComponent(target));
    if (!fs.existsSync(resolved)) errors.push(`${file} 引用不存在的本地文件: ${target}`);
  }
}

if (questions.length !== 799) errors.push(`真题总数应为 799，实际 ${questions.length}`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  const bySubject = Object.fromEntries(Object.keys(context.window.KNOWLEDGE_SUBJECTS).map((subject) => [subject, {
    knowledge: cards.filter((card) => card.subject === subject).length,
    questions: questions.filter((question) => question.subject === subject).length,
    practices: cards.filter((card) => card.subject === subject && card.practice).length
  }]));
  console.log(JSON.stringify({ status: "ok", knowledge: cards.length, questions: questions.length, backlinks: [...refCounts.values()].reduce((a, b) => a + b, 0), bySubject }, null, 2));
}

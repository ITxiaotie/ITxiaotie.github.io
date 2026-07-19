import fs from "node:fs";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const BVID = "BV1icaxz8EXN";
const dataUrl = new URL("../408真题/data/exams.js", import.meta.url);
const dataPath = fileURLToPath(dataUrl);
const headers = {
  "User-Agent": "Mozilla/5.0",
  Referer: `https://www.bilibili.com/video/${BVID}/`,
};

async function getJson(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  const payload = await response.json();
  if (payload.code !== 0) throw new Error(`${payload.code}: ${payload.message}`);
  return payload.data;
}

function questionNumbers(label) {
  const values = [...String(label).matchAll(/\d+/g)].map((match) => Number(match[0]));
  if (values.length === 2 && /[-—~～至]/.test(label)) {
    const [start, end] = values;
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }
  return values;
}

function chooseTime(questionNumber, points) {
  if (!points.length) return { time: 0, source: "page-start" };

  const parsed = points.map((point) => ({
    time: Math.max(0, Math.floor(Number(point.from) || 0)),
    numbers: questionNumbers(point.content),
  }));
  const exact = parsed.find((point) => point.numbers.includes(questionNumber));
  if (exact) return { time: exact.time, source: "chapter" };

  const preceding = parsed
    .filter((point) => point.numbers.length && Math.min(...point.numbers) <= questionNumber)
    .at(-1);
  return { time: preceding?.time ?? 0, source: "nearest-chapter" };
}

let source = fs.readFileSync(dataPath, "utf8").replace(/\r\n/g, "\n");
source = source.replace(
  /^([ \t]*)"videoPage":\s*(\d+),\n(?:\n)?\1"videoTime":\s*\d+\n/gm,
  (_, indent, page) => `${indent}"videoPage": ${page}\n`,
);
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);
const exams = context.window.EXAMS;
const items = exams.flatMap((exam) => exam.items);
const itemsByPage = new Map();
for (const item of items) {
  const pageItems = itemsByPage.get(item.videoPage) ?? [];
  pageItems.push(item);
  itemsByPage.set(item.videoPage, pageItems);
}

const view = await getJson(`https://api.bilibili.com/x/web-interface/view?bvid=${BVID}`);
const pointsByPage = new Map();
for (let index = 0; index < view.pages.length; index += 12) {
  const batch = view.pages.slice(index, index + 12);
  const results = await Promise.all(batch.map(async (page) => {
    const player = await getJson(
      `https://api.bilibili.com/x/player/v2?bvid=${BVID}&cid=${page.cid}`,
    );
    return [page.page, player.view_points ?? []];
  }));
  results.forEach(([page, points]) => pointsByPage.set(page, points));
}

const stats = { chapter: 0, "nearest-chapter": 0, "page-start": 0 };
const times = items.map((item) => {
  const result = chooseTime(Number(item.number), pointsByPage.get(item.videoPage) ?? []);
  stats[result.source] += 1;
  return result.time;
});

let itemIndex = 0;
const updated = source.replace(
  /^([ \t]*)"videoPage":\s*(\d+)\n/gm,
  (_, indent, page) => {
    const time = times[itemIndex];
    if (time === undefined) throw new Error(`Unexpected videoPage entry ${page}`);
    itemIndex += 1;
    return `${indent}"videoPage": ${page},\n${indent}"videoTime": ${time}\n`;
  },
);

if (itemIndex !== items.length) {
  throw new Error(`Updated ${itemIndex} entries, expected ${items.length}`);
}

fs.writeFileSync(dataPath, updated, "utf8");
console.log(JSON.stringify({ items: itemIndex, ...stats }));

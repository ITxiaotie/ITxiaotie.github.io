(() => {
  "use strict";
  const KEY = "xiaotie-global-wrongbook-v1";
  const read = () => { try { const value = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(value) ? value : []; } catch { return []; } };
  const write = (rows) => localStorage.setItem(KEY, JSON.stringify(rows.slice(0, 1000)));
  function capture(entry, correct = false) {
    if (!entry?.id) return;
    const rows = read();
    const index = rows.findIndex((row) => row.id === entry.id);
    if (correct) { if (index >= 0) { rows.splice(index, 1); write(rows); } return; }
    const previous = index >= 0 ? rows[index] : {};
    const row = { ...previous, ...entry, id: String(entry.id), attempts: (previous.attempts || 0) + 1, updatedAt: Date.now() };
    if (index >= 0) rows.splice(index, 1);
    rows.unshift(row); write(rows);
  }
  function resolve(id) { capture({ id }, true); }
  function clear() { localStorage.removeItem(KEY); }
  window.WrongBook = Object.freeze({ read, capture, resolve, clear });
})();

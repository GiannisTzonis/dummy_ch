// Accessibility audit of every prerendered page with axe-core (WCAG 2.x A/AA), in headless Chrome.
//
//   node scripts/a11y-audit.mjs <base url> [width=1440]     e.g. http://127.0.0.1:8090
//
// Serve web/build/client first. Prints the violations per rule with example pages and exits 1 if any.
import { spawn } from "node:child_process"; import fs from "node:fs"; import path from "node:path"; import os from "node:os";
import { fileURLToPath } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
const [base, width = "1440"] = process.argv.slice(2);
const axe = fs.readFileSync(path.join(here, "../node_modules/axe-core/axe.min.js"), "utf8");
const chrome = process.env.CHROME || "C:/Program Files/Google/Chrome/Application/chrome.exe";

// every prerendered route
const buildDir = path.join(here, "../build/client");
const routes = [];
(function walk(d, rel) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p, `${rel}/${f}`);
    else if (f === "index.html" && /^\/(en|el)/.test(rel)) routes.push(rel);
  }
})(buildDir, "");

const port = 9600 + Math.floor(Math.random() * 100);
const prof = fs.mkdtempSync(path.join(os.tmpdir(), "a11y-"));
const proc = spawn(chrome, ["--headless=new", "--disable-gpu", `--remote-debugging-port=${port}`, `--user-data-dir=${prof}`, "about:blank"], { stdio: "ignore" });
const sleep = ms => new Promise(r => setTimeout(r, ms));
let target; for (let i = 0; i < 50 && !target; i++) { await sleep(200); try { target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(t => t.type === "page"); } catch {} }
const ws = new WebSocket(target.webSocketDebuggerUrl); await new Promise(r => (ws.onopen = r));
let id = 0; const pending = new Map(); let loaded = false;
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } else if (m.method === "Page.loadEventFired") loaded = true; };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width: +width, height: 900, deviceScaleFactor: 1, mobile: +width < 768 });
// audit the settled page: with reduced motion the scroll/fade effects are off, so contrast is measured
// on final colours rather than mid-fade (this is also exactly what reduced-motion visitors get)
await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });

const byRule = new Map();
for (const route of routes.sort()) {
  loaded = false;
  await send("Page.navigate", { url: base + route });
  for (let i = 0; i < 100 && !loaded; i++) await sleep(100);
  await sleep(500);
  await send("Runtime.evaluate", { expression: axe });
  const r = await send("Runtime.evaluate", {
    expression: `axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] } })
      .then(res => JSON.stringify(res.violations.map(v => ({ id: v.id, impact: v.impact, help: v.help,
        nodes: v.nodes.map(n => ({ target: n.target.join(" "), summary: (n.failureSummary || "").split("\\n").slice(1, 2).join(" ") })) }))))`,
    awaitPromise: true, returnByValue: true,
  });
  for (const v of JSON.parse(r.result.result.value)) {
    const e = byRule.get(v.id) || { ...v, pages: new Set(), count: 0, examples: [] };
    e.pages.add(route); e.count += v.nodes.length;
    for (const n of v.nodes) if (e.examples.length < 4) e.examples.push(`${route}  ${n.target}  ${n.summary}`);
    byRule.set(v.id, e);
  }
}
ws.close(); proc.kill();
console.log(`axe-core WCAG 2.1 A/AA, ${routes.length} pages at ${width}px`);
for (const [rule, e] of byRule) {
  console.log(`\n[${e.impact}] ${rule}: ${e.help} -- ${e.count} elements on ${e.pages.size} pages`);
  e.examples.forEach(x => console.log("   " + x.slice(0, 220)));
}
console.log(byRule.size ? `\n${byRule.size} rules violated` : "\nno violations");
process.exit(byRule.size ? 1 : 0);

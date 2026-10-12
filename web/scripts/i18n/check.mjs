// The automatic checks every translation passes before it is used (I18N.md, "Checks"): structure,
// facts (numbers, dates, times, links, names), markup, capitals, length. Shared by accept.mjs.
//
// checkUnit(en, tr, names) -> { errors: string[], warnings: string[] }

// numbers as written in the English, and the ways a translation may write the same number:
// 1,000 / 1.000 / 1 000; 91.67 / 91,67; "8:30 p.m." may become 20:30 / 20h30 / 20.30
function numbers(s) {
  return [...s.matchAll(/\d+(?:[.,\s]\d{3})*(?:[.,]\d+)?/g)].map((m) => m[0].replace(/[.,\s](?=\d{3}\b)/g, "").replace(",", "."));
}
function eveningHours(s) {
  // hours given with p.m.: their 24-hour form is also accepted
  return [...s.matchAll(/\b(\d{1,2})(?:[:.](\d{2}))?\s*(?:p\.?\s?m\.?|pm)\b/gi)].map((m) => +m[1]).filter((h) => h >= 1 && h <= 11);
}
const links = (s) => [...s.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]).sort();
const count = (s, re) => (s.match(re) || []).length;
const letters = (s) => s.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/[^\p{L}]/gu, "");
const isCaps = (s) => { const l = letters(s); return l.length >= 3 && l === l.toUpperCase() && l !== l.toLowerCase(); };

// names that must appear as written: registry names (people, choirs) found in the English, and
// words with letters outside plain ASCII Latin (Čopi, Ešenvalds, García, Gøta)
function protectedNames(en, names) {
  const out = new Set();
  for (const n of names) if (n.length > 3 && en.includes(n)) out.add(n);
  for (const m of en.matchAll(/[A-ZÀ-ÖØ-ÞĀ-ž][\p{L}'’-]*[À-ÖØ-öø-ÿĀ-ž][\p{L}'’-]*/gu)) out.add(m[0]);
  return [...out];
}

function checkText(en, tr, names, where, errors, warnings) {
  if (typeof tr !== "string") return errors.push(`${where}: not text`);
  if (!tr.trim() && en.trim()) return errors.push(`${where}: empty`);
  // numbers (each English number present, at least as often)
  const have = numbers(tr);
  const pm = new Set(eveningHours(en));
  for (const n of numbers(en)) {
    const i = have.indexOf(n);
    if (i >= 0) { have.splice(i, 1); continue; }
    const h = +n;
    if (pm.has(h) && have.includes(String(h + 12))) { have.splice(have.indexOf(String(h + 12)), 1); continue; }
    errors.push(`${where}: number ${n} missing`);
  }
  if (links(en).join(" ") !== links(tr).join(" ")) errors.push(`${where}: links differ (${links(en).join(" ")} vs ${links(tr).join(" ")})`);
  if (count(en, /\*\*/g) !== count(tr, /\*\*/g)) errors.push(`${where}: bold markers differ`);
  if (count(en, /\n/g) !== count(tr, /\n/g)) errors.push(`${where}: line breaks differ (${count(en, /\n/g)} vs ${count(tr, /\n/g)})`);
  if (isCaps(en) && !isCaps(tr)) errors.push(`${where}: the English is in capitals, the translation is not`);
  for (const n of protectedNames(en, names)) if (!tr.includes(n)) errors.push(`${where}: name "${n}" missing`);
  // length: no dropped or invented sentences
  if (en.length >= 60) {
    const r = tr.length / en.length;
    if (r < 0.6 || r > 1.9) errors.push(`${where}: length ${tr.length} vs English ${en.length} (ratio ${r.toFixed(2)})`);
  }
  if (tr === en && letters(en).length >= 12 && /\s\p{Ll}{3,}\s/u.test(en)) warnings.push(`${where}: identical to the English`);
}

export function checkUnit(en, tr, names = []) {
  const errors = [], warnings = [];
  if (tr === undefined) return { errors: ["missing"], warnings };
  if (typeof en === "string") checkText(en, tr, names, "text", errors, warnings);
  else if (!tr || typeof tr !== "object" || Array.isArray(tr)) errors.push("expected a block object like the English");
  else if ("heading" in en) {
    if (!("heading" in tr)) errors.push("not a heading");
    else {
      if ((en.level ?? null) !== (tr.level ?? null) || (en.align ?? null) !== (tr.align ?? null)) errors.push("heading level/alignment differ");
      checkText(en.heading, tr.heading, names, "heading", errors, warnings);
    }
  } else if ("p" in en) {
    if (!("p" in tr) || tr.align !== en.align) errors.push("paragraph alignment differs");
    else checkText(en.p, tr.p, names, "p", errors, warnings);
  } else if ("list" in en) {
    if (!Array.isArray(tr.list) || tr.list.length !== en.list.length) errors.push(`list of ${en.list.length} items expected`);
    else {
      if ((en.align ?? null) !== (tr.align ?? null)) errors.push("list alignment differs");
      en.list.forEach((item, i) => checkText(item, tr.list[i], names, `list[${i}]`, errors, warnings));
    }
  } else if ("stats" in en) {
    const a = en.stats, b = tr.stats;
    if (!b || !Array.isArray(b.head) || b.head.length !== a.head.length || !Array.isArray(b.rows) || b.rows.length !== a.rows.length) errors.push("statistics table shape differs");
    else {
      a.head.forEach((h, i) => checkText(h, b.head[i], names, `head[${i}]`, errors, warnings));
      a.rows.forEach((r, i) => {
        const t = b.rows[i];
        if (t.serial !== r.serial || t.visits !== r.visits || t.percent !== r.percent || t.flag !== r.flag) errors.push(`row ${i + 1}: numbers/flag changed`);
        if (typeof t.country !== "string" || !t.country) errors.push(`row ${i + 1}: country missing`);
      });
    }
  } else errors.push("unexpected block kind");
  // nothing beyond the English block's own fields
  if (tr && typeof tr === "object" && typeof en === "object") {
    const extra = Object.keys(tr).filter((k) => !(k in en));
    if (extra.length) errors.push(`extra fields: ${extra.join(", ")}`);
  }
  return { errors, warnings };
}

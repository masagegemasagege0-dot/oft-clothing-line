/* =====================================================================
   Shared by index.html and about.html:
   logo + footer, customer-care / policy pop-up, support bubble, header search
   ===================================================================== */
(() => {
const { WHATSAPP, EMAIL, SOCIAL, SOCIAL_LABEL, SHIRTS } = window.OFT_DATA;
const { POLICIES, CARE, CARE_ORDER, ABOUT } = window.OFT_CONTENT;
const $ = s => document.querySelector(s);
const IS_HOME = !!$("#landing");                       // index.html has #landing; about.html does not
const waLink = t => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const goHome = () => { if (window.OFT_APP) window.OFT_APP.close(); scrollTo({ top: 0, behavior: "smooth" }); };

/* ---------- logo + footer ---------- */
const LOGO = `<img class="lm" src="assets/logo.webp" alt="" draggable="false"><b>OFT</b>`;
["#logoL", "#logoD"].forEach(s => { const el = $(s); if (el) el.innerHTML = LOGO; });
const ICON = {
  Instagram: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17" cy="7" r=".6"/>',
  Facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8.5c0-.3.2-.5.5-.5z"/>',
  TikTok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.3 2.7 2.2 4.6 5 4.8"/>',
  YouTube: '<rect x="3" y="6" width="18" height="12" rx="4"/><path d="M10.5 9.5v5l4-2.5z"/>',
  WhatsApp: '<path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .6c-.8-.4-1.4-1-1.8-1.8l.6-1-1-2z"/>'
};
/* each link: [label, url, shop-category, policy/care key, goes-home] */
const COLS = [
  ["Shop", [["All T-shirts", "", "All"], ["Everyday", "", "Everyday"], ["Streetwear", "", "Streetwear"], ["Smart casual", "", "Smart casual"], ["Outdoor", "", "Outdoor"]]],
  ["Customer care", CARE_ORDER.map(k => [CARE[k].title, "#", "", k])],
  ["Company", [["About us", "about.html"], ["OFT's atelier", IS_HOME ? "#" : "index.html", "", "", 1], ["Wholesale", waLink("Hi OFT! I'd like to ask about wholesale.")], ["Contact us", "mailto:" + EMAIL]]]
];
const footer = `<footer class="foot"><div class="fg">
  <div class="fb"><a class="logo" href="${IS_HOME ? "#" : "index.html"}" data-home>${LOGO}</a><p>OFT's atelier. Tees, long sleeves, tanks and jorts inspired by ancient woods and earthy tones, designed and sold from Nairobi, Kenya.</p>
    <div class="soc">${Object.keys(SOCIAL).map(k => `<a href="${SOCIAL[k]}" target="_blank" rel="noopener" aria-label="${SOCIAL_LABEL[k] || k}" title="${SOCIAL_LABEL[k] || k}"><svg viewBox="0 0 24 24">${ICON[k]}</svg></a>`).join("")}</div></div>
  ${COLS.map(([h, l]) => `<div><h4>${h}</h4><ul>${l.map(([t, u, c, policy, home]) => `<li><a href="${u || "#"}"${c ? ` data-cat="${c}"` : ""}${policy ? ` data-policy="${policy}"` : ""}${home ? " data-home" : ""}${u.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${esc(t)}</a></li>`).join("")}</ul></div>`).join("")}
  <div><h4>Contact</h4><ul><li>Nairobi, Kenya</li><li><a href="${waLink("Hi OFT!")}" target="_blank" rel="noopener">WhatsApp: +${WHATSAPP}</a></li><li><a href="mailto:${EMAIL}">${EMAIL}</a></li><li>Mon–Sat, 9am–6pm (EAT)</li></ul></div>
</div><div class="fl"><span>© ${new Date().getFullYear()} OFT. All rights reserved.</span>
  <nav><a href="#" data-policy="privacy">Privacy policy</a><a href="#" data-policy="terms">Terms &amp; conditions</a><a href="#" data-policy="returns">Returns &amp; refunds</a><a href="#" data-policy="shipping">Shipping policy</a><a href="#" data-policy="cookies">Cookie policy</a></nav>
  <span class="note">Orders are confirmed over WhatsApp. Prices in USD and EUR are approximate conversions from KES. Personal data is handled in line with the Kenya Data Protection Act, 2019.</span></div></footer>`;
["#footL", "#footD"].forEach(s => { const el = $(s); if (el) el.innerHTML = footer; });

/* ---------- pop-ups and support bubble (added to the page here so both pages share them) ---------- */
document.body.insertAdjacentHTML("beforeend", `
<div id="policyDialog" class="policy-dialog" hidden role="dialog" aria-modal="true" aria-labelledby="policyTitle">
  <article class="policy-sheet"><header><h2 id="policyTitle">Store policy</h2><button id="policyClose" type="button" aria-label="Close">Close ✕</button></header><div id="policyBody" class="policy-body"></div></article>
</div>
<div id="searchDialog" class="search-dialog" hidden role="dialog" aria-modal="true" aria-label="Search the site">
  <div class="search-sheet">
    <div class="search-top">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>
      <input id="searchInput" type="text" role="combobox" aria-expanded="true" aria-controls="searchList" aria-autocomplete="list" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Search pieces, sizes, delivery, care…" aria-label="Search">
      <button id="searchClose" type="button" aria-label="Close search">Esc</button>
    </div>
    <div id="searchList" class="search-body" role="listbox" aria-label="Results"></div>
    <p class="search-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> to move</span><span><kbd>Enter</kbd> to open</span><span><kbd>/</kbd> to search from anywhere</span></p>
  </div>
</div>
<div id="help">
  <div class="panel" id="panel" hidden><b>Need a hand?</b><p>Questions about sizes, colours or delivery? We usually reply within the hour.</p>
    <a class="go" href="${waLink("Hi OFT! I'd like to place an order.")}" target="_blank" rel="noopener">Place an order on WhatsApp</a>
    <a href="${waLink("Hi OFT! I need some help.")}" target="_blank" rel="noopener">Chat with support</a>
    <a href="mailto:${EMAIL}">Email us</a></div>
  <button id="bubble" aria-label="Support" aria-expanded="false"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg></button>
</div>`);
$("#bubble").onclick = () => { const p = $("#panel"); p.hidden = !p.hidden; $("#bubble").setAttribute("aria-expanded", !p.hidden); };

/* ---------- customer care + policy pop-up ---------- */
const part = p => typeof p === "string" ? `<p>${p}</p>`
  : p.ul ? `<ul>${p.ul.map(x => `<li>${x}</li>`).join("")}</ul>`
  : p.ol ? `<ol>${p.ol.map(x => `<li>${x}</li>`).join("")}</ol>`
  : p.table ? `<div class="tbl"><table><thead><tr>${p.table.head.map(h => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${p.table.rows.map(r => `<tr>${r.map((c, i) => i ? `<td>${c}</td>` : `<th scope="row">${c}</th>`).join("")}</tr>`).join("")}</tbody></table></div>${p.note ? `<p class="tbl-note">${p.note}</p>` : ""}`
  : p.cta ? `<div class="care-cta"><a class="wa" href="${waLink(p.cta.msg)}" target="_blank" rel="noopener">${esc(p.cta.label)}</a><a class="ghost" href="mailto:${EMAIL}">Email ${EMAIL}</a></div>`
  : "";
const bodyHtml = b => (Array.isArray(b) ? b : [b]).map(part).join("");

function showPolicy(key, sec) {
  const data = CARE[key] || POLICIES[key]; if (!data) return;
  const isCare = !!CARE[key], modal = $("#policyDialog"), wasOpen = !modal.hidden;
  $("#policyTitle").textContent = data.title;
  const tabs = isCare ? `<div class="care-tabs" role="group" aria-label="Customer care topics">${CARE_ORDER.map(k => `<button type="button" class="chip" data-policy="${k}" aria-pressed="${k === key}">${esc(CARE[k].title)}</button>`).join("")}</div>` : "";
  const secs = data.sections.map(([h, b], i) => data.accordion
    ? `<details class="faq" data-sec="${i}"><summary>${h}</summary><div class="faq-a">${bodyHtml(b)}</div></details>`
    : `<section data-sec="${i}"><h3>${h}</h3>${bodyHtml(b)}</section>`).join("");
  $("#policyBody").innerHTML = `${tabs}<p class="policy-intro">${data.intro}</p>${secs}`;
  modal.hidden = false; document.body.classList.add("policy-open");
  const sheet = modal.querySelector(".policy-sheet"); sheet.scrollTop = 0;
  const target = sec != null ? $("#policyBody").querySelector(`[data-sec="${sec}"]`) : null;
  if (target) {
    if (target.tagName === "DETAILS") target.open = true;
    target.classList.add("flash"); target.scrollIntoView({ block: "start" });
  }
  (wasOpen && isCare ? $("#policyBody .chip[aria-pressed=true]") : $("#policyClose")).focus({ preventScroll: true });
}
function closePolicy() { $("#policyDialog").hidden = true; if ($("#searchDialog").hidden) document.body.classList.remove("policy-open"); }
$("#policyClose").addEventListener("click", closePolicy);
$("#policyDialog").addEventListener("click", e => { if (e.target.id === "policyDialog") closePolicy(); });

/* ---------- header search ---------- */
const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
const tmp = document.createElement("div");
const plain = h => { tmp.innerHTML = h; return tmp.textContent.replace(/\s+/g, " ").trim(); };
const flat = b => (Array.isArray(b) ? b : [b]).map(p => typeof p === "string" ? plain(p) : p.ul ? p.ul.map(plain).join(". ") : p.ol ? p.ol.map(plain).join(". ") : p.table ? [...p.table.head, ...p.table.rows.flat()].join(" ") + (p.note ? " " + p.note : "") : "").join(" ");
const trim = (s, n) => s.length > n ? s.slice(0, n).replace(/\s+\S*$/, "") + "…" : s;
const SYN = { "T-shirts": "tee tees tshirt tshirts shirt top", "Long sleeves": "long sleeve longsleeve top", "Tank tops": "tank tanktop sleeveless vest top", Jorts: "jorts shorts denim camo bottoms", Hoodies: "hoodie", Shorts: "shorts", Caps: "cap hat" };
let INDEX = null;
function buildIndex() {
  const add = (e) => { e.nt = norm(e.title); e.nk = norm(e.kw || ""); e.nb = norm(e.text || ""); (INDEX = INDEX || []).push(e); };
  SHIRTS.forEach((s, i) => add({ group: "Pieces", kind: "piece", i, title: s.name, sub: trim(s.desc, 70), img: s.img, boost: 0,
    kw: [s.type, SYN[s.type] || "", ...s.cats, ...Object.keys(s.variants || {}), "price", String(s.price)].join(" "), text: s.desc + " " + s.type }));
  CARE_ORDER.forEach(k => { const t = CARE[k];
    add({ group: "Customer care", kind: "topic", key: k, title: t.title, sub: trim(t.intro, 80), kw: t.kw, text: t.intro, boost: 3 });
    t.sections.forEach(([h, b], si) => add({ group: "Customer care", kind: "topic", key: k, sec: si, title: plain(h).replace(/^\d+\.\s*/, ""), sub: t.title, kw: "", text: flat(b), boost: 0 })); });
  Object.keys(POLICIES).forEach(k => { const t = POLICIES[k];
    add({ group: "Policies", kind: "topic", key: k, title: t.title, sub: trim(t.intro, 80), kw: k, text: t.intro, boost: 3 });
    t.sections.forEach(([h, b], si) => add({ group: "Policies", kind: "topic", key: k, sec: si, title: plain(h).replace(/^\d+\.\s*/, ""), sub: t.title, kw: "", text: plain(b), boost: 0 })); });
  ABOUT.forEach(a => add({ group: "About", kind: "page", href: a.href, title: a.title, sub: a.sub, kw: "about story brand", text: a.text, boost: a.href === "about.html" ? 3 : 0 }));
}
function score(e, toks) {
  let total = 0;
  for (const t of toks) {
    let best = 0;
    for (const v of (t.length > 3 ? [t, t.replace(/(es|s)$/, "")] : [t])) {
      if (e.nt.startsWith(v)) best = Math.max(best, 8);
      else if (e.nt.includes(" " + v)) best = Math.max(best, 6);
      else if (e.nt.includes(v)) best = Math.max(best, 4);
      else if (e.nk.startsWith(v) || e.nk.includes(" " + v)) best = Math.max(best, 3);
      else if (e.nb.includes(v)) best = Math.max(best, 1);
    }
    if (!best) return 0;
    total += best;
  }
  return total + e.boost;
}
const hl = (text, toks) => {
  const words = [...new Set(toks.flatMap(t => [t, t.length > 3 ? t.replace(/(es|s)$/, "") : t]).filter(w => w.length > 1))].sort((a, b) => b.length - a.length);
  if (!words.length) return esc(text);
  return text.split(new RegExp("((?:" + words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")[a-z0-9]*)", "gi")).map((p, i) => i % 2 ? `<mark>${esc(p)}</mark>` : esc(p)).join("");
};
const QUICK = [
  { group: "Quick links", kind: "topic", key: "order", title: "How to order", sub: "From choosing a piece to paying safely" },
  { group: "Quick links", kind: "topic", key: "size", title: "Size guide", sub: "Measurements for tees, long sleeves, tanks and jorts" },
  { group: "Quick links", kind: "topic", key: "delivery", title: "Delivery & returns", sub: "Where we deliver, timing and how returns work" },
  { group: "Quick links", kind: "topic", key: "care", title: "Care guide", sub: "Washing, drying and ironing your pieces" },
  { group: "Quick links", kind: "topic", key: "faq", title: "FAQs", sub: "Quick answers to common questions" },
  { group: "Quick links", kind: "page", href: "about.html", title: "About OFT", sub: "Our story, mission and where we are headed" }
];
const ICONS = {
  topic: '<path d="M6 3.5h8l4 4v13H6z"/><path d="M14 3.5v4h4M9 12h6M9 16h6"/>',
  page: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4.5M12 16h.01"/>'
};
let items = [], active = 0, lastFocus = null;
const dlg = () => $("#searchDialog"), input = () => $("#searchInput"), list = () => $("#searchList");

function render(q) {
  const toks = norm(q).split(" ").filter(Boolean);
  let rows;
  if (!toks.length) rows = QUICK;
  else {
    if (!INDEX) buildIndex();
    rows = INDEX.map(e => [score(e, toks), e]).filter(r => r[0] > 0).sort((a, b) => b[0] - a[0]).map(r => r[1]);
  }
  const caps = { Pieces: 6, "Customer care": 6, Policies: 4, About: 3, "Quick links": 9 }, seen = {};
  rows = rows.filter(e => (seen[e.group] = (seen[e.group] || 0) + 1) <= caps[e.group]);
  const order = ["Quick links", "Pieces", "Customer care", "About", "Policies"];
  items = order.flatMap(g => rows.filter(e => e.group === g));
  if (!items.length) {
    list().innerHTML = `<p class="search-none">Nothing found for <b>${esc(q.trim())}</b>. Try another word, such as “size”, “delivery” or a colour, or <a href="${waLink("Hi OFT! I was looking for: " + q.trim())}" target="_blank" rel="noopener">ask us on WhatsApp</a>.</p>`;
    input().removeAttribute("aria-activedescendant"); return;
  }
  let html = "", g = "";
  items.forEach((e, i) => {
    if (e.group !== g) { g = e.group; html += `<h3 class="sg">${g}</h3>`; }
    const thumb = e.img ? `<span class="th"><img src="${e.img}" alt="" loading="lazy"></span>` : `<span class="th ic"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[e.kind]}</svg></span>`;
    const sub = e.kind === "piece" ? `${esc(SHIRTS[e.i].type)} · KES ${SHIRTS[e.i].price.toLocaleString("en-KE")}` : esc(e.sub);
    html += `<div class="sr" role="option" id="sr-${i}" data-i="${i}" aria-selected="false">${thumb}<span class="tx"><span class="tt">${hl(plain(e.title), toks)}</span><span class="ss">${sub}</span></span></div>`;
  });
  list().innerHTML = html;
  setActive(0);
}
function setActive(i) {
  active = Math.max(0, Math.min(items.length - 1, i));
  list().querySelectorAll(".sr").forEach(el => { const on = +el.dataset.i === active; el.classList.toggle("is-active", on); el.setAttribute("aria-selected", on); if (on) { input().setAttribute("aria-activedescendant", el.id); el.scrollIntoView({ block: "nearest" }); } });
}
function openSearch() {
  if (!dlg().hidden) return;
  lastFocus = document.activeElement; dlg().hidden = false; document.body.classList.add("policy-open");
  input().value = ""; render(""); input().focus();
}
function closeSearch(restore = true) {
  if (dlg().hidden) return;
  dlg().hidden = true;
  if ($("#policyDialog").hidden) document.body.classList.remove("policy-open");
  if (restore && lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
}
function go(e) {
  closeSearch(false);
  if (e.kind === "piece") {
    if (window.OFT_APP) { closePolicy(); window.OFT_APP.openDetail(e.i); } else location.href = "index.html#piece-" + e.i;
  } else if (e.kind === "topic") showPolicy(e.key, e.sec);
  else if (e.kind === "page") {
    const same = location.pathname.endsWith(e.href.split("#")[0]);
    if (same && e.href.includes("#")) location.hash = e.href.split("#")[1]; else if (same) scrollTo({ top: 0, behavior: "smooth" }); else location.href = e.href;
  }
}
input().addEventListener("input", () => render(input().value));
input().addEventListener("keydown", e => {
  if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
  else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
  else if (e.key === "Enter") { e.preventDefault(); if (items[active]) go(items[active]); }
});
list().addEventListener("click", e => { const r = e.target.closest(".sr"); if (r) go(items[+r.dataset.i]); });
list().addEventListener("mousemove", e => { const r = e.target.closest(".sr"); if (r && +r.dataset.i !== active) setActive(+r.dataset.i); });
$("#searchClose").addEventListener("click", () => closeSearch());
dlg().addEventListener("click", e => { if (e.target === dlg()) closeSearch(); });
dlg().addEventListener("keydown", e => {              // keep Tab inside the search box
  if (e.key !== "Tab") return;
  const els = [input(), $("#searchClose")], i = els.indexOf(document.activeElement);
  e.preventDefault(); els[(i + (e.shiftKey ? -1 : 1) + els.length) % els.length].focus();
});

/* ---------- clicks and keys that work on every page ---------- */
document.addEventListener("click", e => {
  if (e.target.closest("[data-search]")) { e.preventDefault(); openSearch(); return; }
  const cat = e.target.closest("[data-cat]");
  if (cat) {
    e.preventDefault();
    if (window.OFT_APP) { closePolicy(); window.OFT_APP.close(); window.OFT_APP.setCat(cat.dataset.cat); scrollTo({ top: 0, behavior: "smooth" }); }
    else location.href = "index.html?cat=" + encodeURIComponent(cat.dataset.cat);
    return;
  }
  const pol = e.target.closest("[data-policy]");
  if (pol) { e.preventDefault(); showPolicy(pol.dataset.policy); return; }
  if (e.target.closest("[data-home]") && IS_HOME) { e.preventDefault(); goHome(); return; }
  if (e.target.closest('.foot a[href="#"]')) e.preventDefault();
});
addEventListener("keydown", e => {
  if (e.key === "Escape") {                            // closes the top-most pop-up first, so the product view stays open behind it
    if (!dlg().hidden) { closeSearch(); e.stopImmediatePropagation(); }
    else if (!$("#policyDialog").hidden) { closePolicy(); e.stopImmediatePropagation(); }
    return;
  }
  const typing = /^(select|input|textarea)$/i.test(e.target.tagName) || e.target.isContentEditable;
  if (((e.key === "/" && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) && !e.altKey) { e.preventDefault(); openSearch(); }
});

/* ---------- keep the page content clear of the fixed header (it wraps to 1-2 rows) ---------- */
const topBar = $(".top");
if (topBar) {
  const syncHdr = () => document.documentElement.style.setProperty("--hdr", topBar.offsetHeight + "px");
  syncHdr(); addEventListener("resize", syncHdr); addEventListener("load", syncHdr);
  if (window.ResizeObserver) new ResizeObserver(syncHdr).observe(topBar);
}
})();

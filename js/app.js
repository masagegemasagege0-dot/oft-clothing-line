(() => {
/* =====================================================================
   EDIT THIS SECTION: your tees, prices, contacts and links
   type/cats : clothing type (dropdown) and categories (chips) each piece belongs to
   price     : in KES.  RATES = KES per 1 USD / 1 EUR (update when you want prices to match the market)
   variants  : (optional) real photos of the tee in each tag colour, see README
   ===================================================================== */
const WHATSAPP = "254757806940";            // your WhatsApp number, country code first, no + or spaces
const EMAIL    = "outfitfortodayke@gmail.com";
const RATES    = { KES: 1, USD: 129, EUR: 150 };
const SOCIAL   = {
  Instagram: "https://www.instagram.com/outfit_for_today___?cplk=cXphb2ppczQ1ZmRu&utm_source=qr",
  Facebook: "https://facebook.com/",
  TikTok: "https://www.tiktok.com/@_oftee?_r=1&_t=ZS-9BL2fVl4nLB",
  YouTube: "https://youtube.com/@outfitfortodayke?si=qRWC3ekjMgG0Gvnf",
  WhatsApp: "https://whatsapp.com/channel/0029VamDtHa9Bb5uCDjKM30N"
};
const SOCIAL_LABEL = { WhatsApp: "Follow the OUTFIT FOR TODAY. channel on WhatsApp" };   // tooltip + screen-reader text
const TYPES = ["Jorts", "T-shirts", "Long sleeves", "Tank tops", "Hoodies", "Shorts", "Caps"];          // types with no pieces show a "coming soon" note
const CATS  = ["All", "Everyday", "Streetwear", "Smart casual", "Outdoor"];
const V = (n, ...cols) => Object.fromEntries((cols.length ? cols : ["Moss", "White", "Black", "Sand"]).map(c => [c, `assets/shirts/variants/${n}-${c.toLowerCase()}.webp`]));   // V("name") = every colour; V("name", "Moss", "Black") = only those, the other tags are disabled
const SHIRTS = [
  { name: "WEAR THE CITY TM", img: "assets/shirts/skyline-white.webp", variants: V("skyline-white"), type: "T-shirts", cats: ["Everyday", "Streetwear"], price: 1000,
    desc: "White tee with the Nairobi skyline in red and “Wear the City” beneath it, on the back." },
  { name: "THE FLOWSTATE", img: "assets/shirts/wave-black.webp", variants: V("wave-black"), type: "T-shirts", cats: ["Streetwear"], price: 1000,
    desc: "Black tee with “Wear the City” lettering in white, flowing in a wave across the chest and over the shoulders." },
  { name: "WEAR THE CITY TM", img: "assets/shirts/skyline-orange.webp", variants: V("skyline-orange"), type: "T-shirts", cats: ["Streetwear", "Outdoor"], price: 1000,
    desc: "Orange tee with the Nairobi skyline in black and “Wear the City” beneath it, on the back." },
  { name: "47 white tee", img: "assets/shirts/47-white.webp", variants: V("47-white"), type: "T-shirts", cats: ["Everyday", "Streetwear"], price: 1800,
    desc: "Crisp white with a small hanger mark on the chest, a bold 47 and a quiet detail on the sleeve. Understated, with something to say." },
  { name: "WEAR THE CITY TM", img: "assets/shirts/skyline-forest.webp", variants: V("skyline-forest"), type: "T-shirts", cats: ["Outdoor", "Everyday"], price: 1000,
    desc: "Forest green tee with the Nairobi skyline in black and “Wear the City” beneath it, on the back." },
  { name: "47 black tee", img: "assets/shirts/47-black.webp", variants: V("47-black"), type: "T-shirts", cats: ["Streetwear", "Smart casual"], price: 1800,
    desc: "Black with a small hanger mark on the chest, a bold 47 and a detail on the sleeve. Dress it up under a jacket or wear it on its own." },
  { name: "THE FLOWSTATE", img: "assets/shirts/wave-white.webp", variants: V("wave-white"), type: "T-shirts", cats: ["Streetwear", "Everyday"], price: 1000,
    desc: "White tee with “Wear the City” lettering in red, flowing in a wave across the chest and over the shoulders." },
  { name: "WEAR THE CITY TM", img: "assets/shirts/skyline-cream.webp", variants: V("skyline-cream"), type: "T-shirts", cats: ["Everyday", "Smart casual"], price: 1000,
    desc: "Cream tee with the Nairobi skyline in black and “Wear the City” beneath it, on the back." },
  { name: "THE OFT 47 JERSEY", img: "assets/shirts/47-outline-black.webp", variants: V("47-outline-black"), type: "T-shirts", cats: ["Streetwear"], price: 1800,
    desc: "Black tee with a large white outline of Nairobi County and a bold 47 across the back." },
  { name: "Sleeve band tee", img: "assets/shirts/band-black.webp", variants: V("band-black"), type: "T-shirts", cats: ["Streetwear", "Smart casual"], price: 1000,
    desc: "Plain black up front with a printed band wrapped around the sleeve. Minimal at first glance, with a detail you notice later." },
  { name: "OFT STREET RACE LONG SLEEVE", img: "assets/shirts/long-sleeve-hanger-black.webp", variants: { Black: "assets/shirts/long-sleeve-hanger-black.webp" }, type: "Long sleeves", cats: ["Everyday", "Streetwear"], price: 1500,
    desc: "Black long sleeve with a small OFT hanger mark on the chest and vertical artwork down both sleeves." },
  { name: "OFT STREET RACE LONG SLEEVE", img: "assets/shirts/long-sleeve-hanger-white.webp", variants: { White: "assets/shirts/long-sleeve-hanger-white.webp" }, type: "Long sleeves", cats: ["Everyday", "Streetwear"], price: 1500,
    desc: "White long sleeve with a small OFT hanger mark on the chest and vertical artwork down both sleeves." },
  { name: "OFT STREET RACE LONG SLEEVE", img: "assets/shirts/long-sleeve-crop-black.webp", variants: { Black: "assets/shirts/long-sleeve-crop-black.webp" }, type: "Long sleeves", cats: ["Streetwear"], price: 1500,
    desc: "Black cropped long sleeve with a small OFT hanger mark on the chest and vertical artwork down both sleeves." },
  { name: "07F long sleeve", img: "assets/shirts/long-sleeve-07f-black.webp", variants: { Black: "assets/shirts/long-sleeve-07f-black.webp" }, type: "Long sleeves", cats: ["Streetwear", "Everyday"], price: 1000,
    desc: "A black long-sleeve top with a compact 07F chest graphic and a hanger detail at the cuff." },
  { name: "OFT STREET RACE LONG SLEEVE", img: "assets/shirts/long-sleeve-hanger-white-charcoal-print.png", variants: { White: "assets/shirts/long-sleeve-hanger-white-charcoal-print.png" }, type: "Long sleeves", cats: ["Everyday", "Streetwear"], price: 1500, hook: 74,
    desc: "White long sleeve with a charcoal OFT hanger graphic on the back and matching vertical sleeve artwork." },
  { name: "OFT STREET RACE LONG SLEEVE", img: "assets/shirts/long-sleeve-hanger-white-red-print.png", variants: { White: "assets/shirts/long-sleeve-hanger-white-red-print.png" }, type: "Long sleeves", cats: ["Everyday", "Streetwear"], price: 1500, hook: 64,
    desc: "White long sleeve with a red OFT hanger graphic on the back and matching red vertical sleeve artwork." },
  { name: "OFT STREET RACE CROPPED LONG SLEEVE", img: "assets/shirts/long-sleeve-crop-white-red-print.png", variants: { White: "assets/shirts/long-sleeve-crop-white-red-print.png" }, type: "Long sleeves", cats: ["Streetwear"], price: 1500, hook: 27,
    desc: "White cropped long sleeve with a red OFT hanger graphic on the chest and matching red vertical sleeve artwork." },
  { name: "WTC TANKTOP", img: "assets/shirts/tank-city-white.webp", variants: { White: "assets/shirts/tank-city-white.webp" }, type: "Tank tops", cats: ["Streetwear", "Outdoor"], price: 1800,
    desc: "White sleeveless top with “The City Wear” in red, flowing in a wave across the chest." },
  { name: "LON-CAM-RANGER JORTS", img: "assets/shirts/jorts-camo-black.webp", variants: { Black: "assets/shirts/jorts-camo-black.webp" }, type: "Jorts", cats: ["Streetwear", "Outdoor"], price: 2500,
    desc: "Wide-leg camo jorts in charcoal and black, with contrast stitching and angled panel seams." },
  { name: "LON-CAM-RANGER JORTS", img: "assets/shirts/jorts-camo-purple.webp", variants: {}, type: "Jorts", cats: ["Streetwear", "Outdoor"], price: 2500,
    desc: "Wide-leg camo jorts in purple-grey with white flecks and contrast stitching." }
];
const TAGS = [
  { c: "#5b6b3a", n: "Moss" }, { c: "#f3f3f1", n: "White", light: 1 },
  { c: "#141414", n: "Black" }, { c: "#d9cdb4", n: "Sand", light: 1 }
];
const HANGER = "assets/hanger.svg";
const SPEED  = 70;          // landing line speed, pixels per second
const INK_MS = 1700;        // colour change duration
/* ===================================================================== */
const $ = s => document.querySelector(s);
const waLink = t => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
const fmt = (kes, c) => c === "KES" ? "KES " + Math.round(kes).toLocaleString("en-KE")
  : new Intl.NumberFormat("en", { style: "currency", currency: c, maximumFractionDigits: 0 }).format(kes / RATES[c]);

/* ---------- landing: endless line ---------- */
const track = document.getElementById("track");
let TYPE = "All", CAT = "All", curN = 0;
const vis = () => SHIRTS.map((s, i) => ({ s, i })).filter(({ s }) => (TYPE === "All" || s.type === TYPE) && (CAT === "All" || s.cats.includes(CAT)));
const needN = n => Math.ceil(innerWidth * 1.1 / (n * Math.min(480, Math.max(240, Math.min(.30 * innerWidth, .46 * innerHeight))) * 1.14));
function fill() {
  const v = vis(), e = $("#empty"); e.hidden = v.length > 0;
  const what = TYPE !== "All" ? TYPE : CAT;
  e.innerHTML = `<div class="empty-card">
    <span class="empty-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 11.5V10c0-1 .9-1.6 1.7-1.9A2 2 0 1 0 10 7"/><path d="M12 11.5 3.6 17.2a1 1 0 0 0 .6 1.8h15.6a1 1 0 0 0 .6-1.8z"/></svg></span>
    <h3>${TYPE !== "All" ? TYPE + " are coming soon" : CAT !== "All" ? "Nothing in " + CAT + " yet" : "Nothing here yet"}</h3>
    <p>${what === "All" ? "No pieces on the line right now." : "Nothing on the line in this section yet."} Ask us when new pieces land.</p>
    <div class="empty-actions">
      <a class="empty-btn" href="${waLink("Hi OFT! When will new pieces be in?")}" target="_blank" rel="noopener">Ask on WhatsApp</a>
      <button type="button" class="empty-btn ghost" data-empty-reset>Show all pieces</button>
    </div></div>`;
  curN = v.length ? needN(v.length) : 0;
  const set = v.map(({ s, i }) => `<div class="slot"><div class="item" tabindex="0" data-i="${i}">
     ${s.hanger ? `<img class="hanger" src="${HANGER}" alt="" draggable="false">` : ""}
     <img class="shirt${s.hanger ? "" : " baked"}" src="${s.img}" alt="${s.name}" draggable="false">
   </div></div>`).join("").repeat(curN);
  track.innerHTML = set + set + set; pos = 0;
}
const stage = document.getElementById("stage"), rope = document.getElementById("rope"), ropeF = document.getElementById("ropeFront");
let W = 0, pos = 0, dir = 1, target = 1, speed = 1, hovering = false, last = performance.now();
let slots = [], SW = 0, SAG = 80, TOP = 0;
let draggingLine = false, dragStartX = 0, dragStartPos = 0, movedLine = false;
let manualUntil = 0;
const ropeY = x => { const t = x / SW; return TOP + SAG * (1 - (2 * t - 1) ** 2); };   // hangs low in the middle, high at both ends

function buildRope() {
  const NS = "http://www.w3.org/2000/svg", pad = 40;
  let d = "", strand = "", glint = "", px = -pad, py = ropeY(px), acc = 0;
  for (let x = -pad; x <= SW + pad; x += 2) {
    const y = ropeY(x);
    d += (d ? "L" : "M") + x + " " + y.toFixed(1);
    acc += Math.hypot(x - px, y - py); px = x; py = y;
    if (acc >= 7) {                                        // one twisted strand every 7px along the rope
      acc = 0;
      const sl = (ropeY(x + 1) - ropeY(x - 1)) / 2, L = Math.hypot(1, sl), tx = 1 / L, ty = sl / L, nx = -sl / L, ny = 1 / L;
      const seg = (k, w) => `M${(x - nx * w - tx * k).toFixed(1)} ${(y - ny * w - ty * k).toFixed(1)}L${(x + nx * w + tx * k).toFixed(1)} ${(y + ny * w + ty * k).toFixed(1)}`;
      strand += seg(4, 5); glint += seg(2.6, 4.2);
    }
  }
  const shifted = dy => d.replace(/ (-?[\d.]+)(?=L|$)/g, (m, v) => " " + (+v + dy).toFixed(1));
  const vb = `0 0 ${SW} ${stage.clientHeight}`;
  rope.setAttribute("viewBox", vb); ropeF.setAttribute("viewBox", vb);
  rope.innerHTML = `<defs><filter id="rb" x="-5%" y="-50%" width="110%" height="200%"><feGaussianBlur stdDeviation="3"/></filter></defs>
    <path d="${shifted(10)}" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="9" filter="url(#rb)"/>`;
  ropeF.innerHTML = `<path d="${d}" fill="none" stroke="#5e4426" stroke-width="12"/>
    <path d="${strand}" fill="none" stroke="#b89556" stroke-width="4.2" stroke-linecap="round"/>
    <path d="${glint}" fill="none" stroke="#e6cf9c" stroke-width="1.5" stroke-linecap="round"/>
    <path d="${shifted(-4.2)}" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="2.2"/>
    <path d="${shifted(4.4)}" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="2.4"/>`;
}
const measure = () => {
  SW = stage.clientWidth; SAG = Math.min(100, Math.max(36, SW * .055));
  TOP = matchMedia("(max-width: 800px)").matches ? 24 : 0; // give the rope a little more breathing room below the mobile hero
  W = track.scrollWidth / 3;
  slots = [...track.querySelectorAll(".slot")].map(el => ({ el, o: el.offsetLeft, w: el.offsetWidth }));
  // the rope passes through each hanger's hook curl. Most photos have it ~22px down in the 800px-wide image,
  // but some PNGs carry extra transparent padding above the hanger, so a shirt can set its own `hook` value.
  slots.forEach(s => { const it = s.el.querySelector(".item"), sh = it && SHIRTS[+it.dataset.i];
    s.h = s.w * ((sh && sh.hook) || 22) / 800;
    s.el.style.transformOrigin = `50% ${s.h}px`; });   // hangers swing about the hook
  buildRope();
};
addEventListener("resize", measure); addEventListener("load", measure); fill(); measure();
function tick(now) {
  const dt = Math.min(.05, (now - last) / 1000); last = now;
  const manuallyHeld = draggingLine || now < manualUntil;
  speed += (((hovering || manuallyHeld) ? 0 : target) - speed) * Math.min(1, dt * 6);
  if (!draggingLine) pos = ((pos + dir * speed * SPEED * dt) % W + W) % W;
  track.style.transform = `translate3d(${pos - W}px,0,0)`;
  const lean = dir * speed * 1.3;                              // hangers trail the rope a little while it moves, hang straight when it stops
  slots.forEach((s, k) => { const cx = s.o + pos - W + s.w / 2, wob = Math.sin(now / 650 + k * 1.7) * .3 * speed;
    s.el.style.transform = `translate3d(0,${(ropeY(cx) - s.h).toFixed(1)}px,0) rotate(${(lean + wob).toFixed(2)}deg)`; });
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
track.addEventListener("mouseover", e => { hovering = !!e.target.closest(".item"); });
track.addEventListener("mouseleave", () => hovering = false);
track.addEventListener("focusin", () => hovering = true);
track.addEventListener("focusout", () => hovering = false);

// Manual line browsing: drag/swipe the display, or use a horizontal mouse/trackpad wheel.
let suppressNextClothClick = false;
stage.addEventListener("pointerdown", e => {
  if (e.target.closest("button, a, select")) return;
  draggingLine = true;
  movedLine = false;
  dragStartX = e.clientX;
  dragStartPos = pos;
});
stage.addEventListener("pointermove", e => {
  if (!draggingLine) return;
  const dx = e.clientX - dragStartX;
  if (Math.abs(dx) > 5 && !movedLine) {
    movedLine = true;
    stage.classList.add("is-dragging");
    // Capture only after an actual drag begins; capturing on pointerdown
    // retargets desktop clicks away from the individual clothing item.
    try { stage.setPointerCapture(e.pointerId); } catch (_) {}
  }
  if (movedLine && W) pos = ((dragStartPos + dx) % W + W) % W;
});
const endLineDrag = () => {
  if (!draggingLine) return;
  draggingLine = false;
  if (movedLine) {
    suppressNextClothClick = true;
    // If the browser doesn't dispatch a click after the drag, don't suppress
    // a later intentional tap/click.
    setTimeout(() => { suppressNextClothClick = false; }, 250);
  }
  manualUntil = performance.now() + 1800;
  stage.classList.remove("is-dragging");
};
stage.addEventListener("pointerup", endLineDrag);
stage.addEventListener("pointercancel", endLineDrag);
stage.addEventListener("wheel", e => {
  const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  if (!W || Math.abs(delta) < 1) return;
  e.preventDefault();
  pos = ((pos - delta) % W + W) % W;
  manualUntil = performance.now() + 1800;
}, { passive: false });
stage.addEventListener("click", e => {
  if (suppressNextClothClick) {
    e.preventDefault();
    e.stopPropagation();
    suppressNextClothClick = false;
  }
}, true);
const step = d => {
  if (!slots.length || !W) return;
  pos = ((pos + d * slots[0].w * 1.14) % W + W) % W;
  manualUntil = performance.now() + 1800;
};
document.getElementById("linePrev").onclick = () => step(1);
document.getElementById("lineNext").onclick = () => step(-1);
document.getElementById("reverse").onclick = () => dir *= -1;
const tg = document.getElementById("toggle");
const ICO_PAUSE = '<path d="M4 6v12M8.5 6v12"/><path d="M13 6l8 6-8 6z"/>', ICO_PLAY = '<path d="M8 5l11 7-11 7z"/>';
tg.onclick = () => {
  target = target ? 0 : 1;
  tg.querySelector(".lbl").textContent = target ? "Pause" : "Play";
  tg.querySelector(".ic").innerHTML = target ? ICO_PAUSE : ICO_PLAY;
};
/* keyboard: P = previous, N = next (matches the hints on the buttons) */
addEventListener("keydown", e => {
  if (e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return;
  if (/^(select|input|textarea)$/i.test(e.target.tagName)) return;
  if (!document.getElementById("detail").hidden || !document.getElementById("policyDialog").hidden) return;
  const k = e.key.toLowerCase();
  if (k === "p") step(1); else if (k === "n") step(-1);
});
track.addEventListener("click", e => { const it = e.target.closest(".item"); if (it) openDetail(+it.dataset.i); });
track.addEventListener("keydown", e => { if (e.key === "Enter") e.target.click(); });

/* ---------- detail view + ink morph ---------- */
const detail = document.getElementById("detail"), view = document.getElementById("view"), tagsEl = document.getElementById("tags");
const floodA = document.getElementById("floodA"), floodB = document.getElementById("floodB");
let cur, morphing = false, runId = 0, baseEl, doneEl, animEl;

function openDetail(i) {
  runId++; morphing = false;                       // cancel any colour change still running
  cur = SHIRTS[i]; sel = null; qty = 1;
  $("#pname").textContent = cur.name; $("#desc").textContent = cur.desc;
  view.innerHTML = `<div class="stack">
    <img class="base" src="${cur.img}" alt="${cur.name}" draggable="false">
    <img class="done" alt="" hidden draggable="false">
    <img class="anim" alt="" hidden draggable="false">
  </div>`;
  baseEl = view.querySelector(".base"); doneEl = view.querySelector(".done"); animEl = view.querySelector(".anim");
  const has = t => !!(cur.variants && cur.variants[t.n]);          // a colour with no photo for this tee is disabled
  tagsEl.innerHTML = TAGS.map((t, k) => `<button class="tag${t.light ? " light" : ""}" data-k="${k}" style="background:${t.c}" aria-pressed="false" aria-label="${t.n}"${has(t) ? "" : ` disabled title="${t.n} is not available for this tee"`}>
   <span class="n">OFT</span><small>${t.n}</small><div class="bar"></div></button>`).join("");
  tagsEl.querySelectorAll(".tag:not(:disabled)").forEach(b => {     // also disable it if the listed photo is missing from the folder
    const t = TAGS[+b.dataset.k], im = new Image();
    im.onerror = () => { b.disabled = true; b.title = t.n + " is not available for this tee"; };
    im.src = cur.variants[t.n];
  });
  upd(); detail.hidden = false; detail.scrollTop = 0;
}
const close = () => { detail.hidden = true; runId++; morphing = false; };
document.getElementById("back").onclick = close;
addEventListener("keydown", e => { if (e.key === "Escape") close(); });
tagsEl.addEventListener("click", e => {
  const b = e.target.closest(".tag"); if (!b || morphing) return;
  tagsEl.querySelectorAll(".tag").forEach(x => x.setAttribute("aria-pressed", x === b));
  sel = TAGS[+b.dataset.k].n; upd();
  morph(TAGS[+b.dataset.k]);
});

async function morph(tag) {
  // Always use the matching, pre-rendered garment photo. A global tint filter
  // also recolours ink and logos, so it is deliberately not used here.
  const variant = cur.variants && cur.variants[tag.n];
  if (!variant) return;

  const id = ++runId;
  const ease = t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
  morphing = true;

  // Wait for the real colour photo to be ready before revealing it. This
  // avoids a blank/late image during the wipe and keeps the artwork crisp.
  const prepared = new Image();
  prepared.src = variant;
  try {
    if (prepared.decode) await prepared.decode();
    else await new Promise((resolve, reject) => {
      prepared.onload = resolve;
      prepared.onerror = reject;
    });
  } catch (_) {
    if (id === runId) morphing = false;
    return; // keep the currently displayed garment if an asset cannot load
  }
  if (id !== runId) return;
  const t0 = performance.now();

  animEl.hidden = false;
  animEl.src = variant;
  animEl.style.filter = "none";
  animEl.style.mixBlendMode = "normal";

  (function f(now) {
    if (id !== runId) return;
    const p = Math.min(1, (now - t0) / INK_MS), e = ease(p);
    const y = 262 - e * 285;
    const amp = 16 * Math.sin(Math.PI * Math.min(1, p * 1.05)) + 2;
    const ph = now / 180;
    let pts = `0% 110%,0% ${(y / 2.4).toFixed(1)}%`;
    for (let x = 0; x <= 200; x += 8) {
      pts += `,${x / 2}% ${((y + amp * Math.sin(x / 26 + ph) + amp * .5 * Math.sin(x / 11 - ph * 1.7)) / 2.4).toFixed(1)}%`;
    }
    animEl.style.clipPath = `polygon(${pts},100% 110%)`;
    if (p < 1) return requestAnimationFrame(f);

    baseEl.src = variant;
    doneEl.hidden = true;
    animEl.hidden = true;
    animEl.style.clipPath = "";
    morphing = false;
  })(performance.now());
}

/* ---------- 3D tilt ---------- */
view.addEventListener("pointermove", e => {
  const r = view.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  const s = view.querySelector(".stack"); if (s) s.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 10}deg)`;
});
view.addEventListener("pointerleave", () => { const s = view.querySelector(".stack"); if (s) s.style.transform = ""; });

/* ---------- header filters ---------- */
const typeSel = $("#type"), catSel = $("#cat");
typeSel.innerHTML = ["All", ...TYPES].map(t => `<option value="${t}">${t === "All" ? "All clothing" : t}</option>`).join("");
catSel.innerHTML = CATS.map(c => `<option value="${c}">${c === "All" ? "All categories" : c}</option>`).join("");
const refill = () => { fill(); measure(); };
typeSel.onchange = () => { TYPE = typeSel.value; refill(); };
const setCat = c => { CAT = c; catSel.value = c; refill(); };
catSel.onchange = () => setCat(catSel.value);
$("#empty").addEventListener("click", e => { if (!e.target.closest("[data-empty-reset]")) return;
  TYPE = "All"; typeSel.value = "All"; CAT = "All"; catSel.value = "All"; refill(); });
addEventListener("resize", () => { const n = vis().length; if (n && needN(n) > curN) refill(); });

/* ---------- shared logo + footer ---------- */
const LOGO = `<img class="lm" src="assets/logo.webp" alt="" draggable="false"><b>OFT</b>`;
$("#logoL").innerHTML = $("#logoD").innerHTML = LOGO;
$("#logoL").onclick = e => { e.preventDefault(); scrollTo({ top: 0, behavior: "smooth" }); };
$("#logoD").onclick = e => { e.preventDefault(); close(); };
const ICON = {
  Instagram: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17" cy="7" r=".6"/>',
  Facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8.5c0-.3.2-.5.5-.5z"/>',
  TikTok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.3 2.7 2.2 4.6 5 4.8"/>',
  YouTube: '<rect x="3" y="6" width="18" height="12" rx="4"/><path d="M10.5 9.5v5l4-2.5z"/>',
  WhatsApp: '<path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .6c-.8-.4-1.4-1-1.8-1.8l.6-1-1-2z"/>'
};
const COLS = [
  ["Shop", [["All T-shirts", "", "All"], ["Everyday", "", "Everyday"], ["Streetwear", "", "Streetwear"], ["Smart casual", "", "Smart casual"], ["Outdoor", "", "Outdoor"]]],
  ["Customer care", [["How to order", "#", "", "ordering"], ["Delivery information", "#", "", "shipping"], ["Returns & exchanges", "#", "", "returns"], ["Size guide", "#", "", "size"], ["Garment care", "#", "", "care"], ["FAQs", "#", "", "faqs"]]],
  ["Company", [["Our story", "#about-us", "", "", "story"], ["OFT's atelier", "#landing", "", "", "atelier"], ["Wholesale", waLink("Hi OFT! I'd like to ask about wholesale.")], ["Contact us", "mailto:" + EMAIL]]]
];
const footer = `<footer class="foot"><div class="fg">
  <div class="fb"><a class="logo" href="#">${LOGO}</a><p>OFT's atelier. Everyday pieces inspired by real life, culture and the city — designed and sold from Nairobi, Kenya.</p>
    <div class="soc">${Object.keys(SOCIAL).map(k => `<a href="${SOCIAL[k]}" target="_blank" rel="noopener" aria-label="${SOCIAL_LABEL[k] || k}" title="${SOCIAL_LABEL[k] || k}"><svg viewBox="0 0 24 24">${ICON[k]}</svg></a>`).join("")}</div></div>
  ${COLS.map(([h, l]) => `<div><h4>${h}</h4><ul>${l.map(([t, u, c, policy, route]) => `<li><a href="${u || "#"}"${c ? ` data-cat="${c}"` : ""}${policy ? ` data-policy="${policy}"` : ""}${route ? ` data-route="${route}"` : ""}${u.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${t}</a></li>`).join("")}</ul></div>`).join("")}
  <div class="contact-col"><h4>Contact</h4><ul><li>Nairobi, Kenya</li><li><a href="${waLink("Hi OFT!")}" target="_blank" rel="noopener">WhatsApp: +${WHATSAPP}</a></li><li><a href="mailto:${EMAIL}">${EMAIL}</a></li><li>Mon–Sat, 9am–6pm (EAT)</li></ul></div>
</div>
<section class="footer-about" id="about-us"><div class="footer-about-image"><img src="assets/images/about-us.png" alt="Two people wearing OFT Wear the City sweatsuits beside a vintage railway carriage"></div><div class="footer-about-copy"><span class="about-kicker">OUR STORY · OUTFIT FOR TODAY</span><h3>Wear Today.<br><em>Own Today.</em></h3><p>Outfit For Today (OFT) began with a simple question: what am I wearing today? We believe clothing is more than fabric — it is identity, mood, confidence and self-expression.</p><p>We create authentic, wearable pieces inspired by real life, culture and emotion. We don't chase passing trends; we make everyday clothing with meaning, originality and a story worth wearing.</p><p>Our vision is to build a lifestyle brand rooted in the city and connected to people everywhere. OFT is more than an outfit. It's your today.</p></div></section>
<div class="fl"><span>© ${new Date().getFullYear()} OFT. All rights reserved.</span>
  <nav><a href="#" data-policy="privacy">Privacy policy</a><a href="#" data-policy="terms">Terms &amp; conditions</a><a href="#" data-policy="returns">Returns &amp; refunds</a><a href="#" data-policy="shipping">Shipping policy</a><a href="#" data-policy="cookies">Cookie policy</a></nav>
  <span class="note">Orders are confirmed over WhatsApp. Prices in USD and EUR are approximate conversions from KES. Personal data is handled in line with the Kenya Data Protection Act, 2019.</span></div></footer>`;
$("#footL").innerHTML = footer;
$("#footD").innerHTML = footer.replace('id="about-us"', 'id="about-us-detail"');
document.addEventListener("click", e => {
  const a = e.target.closest("[data-cat]"); if (!a) return;
  e.preventDefault(); close(); setCat(a.dataset.cat); scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener("click", e => {
  const link = e.target.closest("[data-policy]");
  if (!link) return;
  e.preventDefault(); showPolicy(link.dataset.policy);
});
document.addEventListener("click", e => {
  const link = e.target.closest("[data-route]");
  if (!link) return;
  e.preventDefault();
  const route = link.dataset.route;
  if (route === "atelier") {
    if (!detail.hidden) close();
    scrollTo({ top: 0, behavior: "smooth" });
  } else if (route === "story") {
    const target = detail.hidden ? document.getElementById("about-us") : document.getElementById("about-us-detail");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
document.addEventListener("click", e => { if (e.target.closest('.foot a[href="#"]') && !e.target.closest("[data-policy], [data-route]")) e.preventDefault(); });

/* ---------- quick site search ---------- */
const searchToggle = $("#searchToggle"), searchBox = $("#siteSearch"), searchInput = $("#siteSearchInput"), searchResults = $("#searchResults");
const SEARCH_PAGES = [
  { title: "Our story / About OFT", terms: "about us story brand mission vision purpose company", action: () => { searchBox.hidden = true; document.getElementById("about-us").scrollIntoView({behavior:"smooth"}); } },
  { title: "How to order", terms: "order ordering buy purchase checkout", policy: "ordering" },
  { title: "Delivery information", terms: "delivery shipping courier location fees", policy: "shipping" },
  { title: "Returns and exchanges", terms: "return refund exchange damaged faulty", policy: "returns" },
  { title: "Size guide", terms: "size fit measurements chest length", policy: "size" },
  { title: "Garment care", terms: "wash washing care iron dry print", policy: "care" },
  { title: "FAQs", terms: "frequently asked questions help", policy: "faqs" },
  { title: "Contact OFT", terms: "contact whatsapp email support", action: () => window.open(waLink("Hi OFT! I have a question."), "_blank", "noopener") }
];
/* Search ranking: every typed word must match; results are ordered best-first and re-filtered on every keystroke.
   One letter -> everything whose name/type/category/keywords contains it (names starting with it first);
   more letters -> the list narrows. Descriptions only count once a word has 3+ letters, so "h" isn't matched by every sentence. */
const norm = t => String(t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
function score(tokens, { primary = "", secondary = "", desc = "" }) {
  const P = norm(primary), S = norm(secondary), D = norm(desc), pw = P.split(" "), sw = S.split(" ");
  let total = 0;
  for (const t of tokens) {
    let best = 0;
    if (pw.includes(t)) best = 110;
    else if (pw.some(w => w.startsWith(t))) best = P.startsWith(t) ? 100 : 90;
    else if (P.includes(t)) best = 60;
    if (best < 40) { if (sw.some(w => w.startsWith(t))) best = Math.max(best, 40); else if (S.includes(t)) best = Math.max(best, 25); }
    if (!best && t.length >= 3 && D.includes(t)) best = 8;
    if (!best) return 0;                       // a word with no match anywhere = not a result
    total += best;
  }
  return total;
}
const rank = (list, fn, tokens) => list.map((x, k) => ({ x, k, sc: score(tokens, fn(x)) })).filter(r => r.sc).sort((a, b) => b.sc - a.sc || a.k - b.k).map(r => r.x);
function renderSearch(query) {
  const tokens = norm(query).split(" ").filter(Boolean);
  if (!tokens.length) { searchResults.innerHTML = '<p class="search-hint">Search products, clothing types, categories or customer care.</p>'; return; }
  const products = rank(SHIRTS.map((item, i) => ({ item, i })), ({ item }) => ({ primary: item.name, secondary: `${item.type} ${item.cats.join(" ")}`, desc: item.desc }), tokens);
  const pages = rank(SEARCH_PAGES, page => ({ primary: page.title, secondary: page.terms }), tokens);
  const cats = rank(CATS.filter(c => c !== "All"), c => ({ primary: c }), tokens);
  const types = rank(TYPES, t => ({ primary: t }), tokens);
  const rows = [
    ...products.map(({item, i}) => `<button type="button" class="search-result" data-search-product="${i}"><span><b>${item.name}</b><small>${item.type} · ${fmt(item.price, "KES")}</small></span><span>View →</span></button>`),
    ...cats.map(c => `<button type="button" class="search-result" data-search-cat="${c}"><span><b>${c}</b><small>Shop category</small></span><span>Browse →</span></button>`),
    ...types.map(t => `<button type="button" class="search-result" data-search-type="${t}"><span><b>${t}</b><small>Clothing type</small></span><span>Browse →</span></button>`),
    ...pages.map((page, i) => `<button type="button" class="search-result" data-search-page="${SEARCH_PAGES.indexOf(page)}"><span><b>${page.title}</b><small>Website information</small></span><span>Open →</span></button>`)
  ];
  searchResults.innerHTML = rows.length ? rows.join("") : '<p class="search-hint">No matches found. Try another product name or keyword.</p>';
}
searchToggle.addEventListener("click", () => { searchBox.hidden = !searchBox.hidden; searchToggle.setAttribute("aria-expanded", String(!searchBox.hidden)); if (!searchBox.hidden) searchInput.focus(); });
$("#searchClose").addEventListener("click", () => { searchBox.hidden = true; searchToggle.setAttribute("aria-expanded", "false"); searchToggle.focus(); });
searchInput.addEventListener("input", () => renderSearch(searchInput.value));
searchResults.addEventListener("click", e => {
  const product = e.target.closest("[data-search-product]"); if (product) { searchBox.hidden = true; openDetail(+product.dataset.searchProduct); return; }
  const cat = e.target.closest("[data-search-cat]"); if (cat) { setCat(cat.dataset.searchCat); searchBox.hidden = true; scrollTo({top:0,behavior:"smooth"}); return; }
  const type = e.target.closest("[data-search-type]"); if (type) { TYPE = type.dataset.searchType; typeSel.value = TYPE; refill(); searchBox.hidden = true; scrollTo({top:0,behavior:"smooth"}); return; }
  const page = e.target.closest("[data-search-page]"); if (page) { const item = SEARCH_PAGES[+page.dataset.searchPage]; searchBox.hidden = true; if (item.policy) showPolicy(item.policy); else item.action?.(); }
});
addEventListener("keydown", e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); if (searchBox.hidden) searchToggle.click(); else searchInput.focus(); } });

/* ---------- detail: price, quantity, currency, WhatsApp ---------- */
let sel = null, qty = 1, cc = "KES";
function upd() {
  $("#q").textContent = qty;
  $("#amt").textContent = fmt(cur.price * qty, cc);
  $("#each").textContent = qty > 1 ? fmt(cur.price, cc) + " each" : (cur.type === "T-shirts" ? "per tee" : "per piece");
  $("#cur").querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.c === cc));
  $("#wa").href = waLink(`Hi OFT! I'd like to order ${qty} × ${cur.name}${sel ? " in " + sel : ""} (${fmt(cur.price * qty, cc)}). Please confirm availability and delivery.`);
}
$("#qty").onclick = e => { const d = +e.target.dataset.d; if (d) { qty = Math.min(20, Math.max(1, qty + d)); upd(); } };
$("#cur").onclick = e => { const c = e.target.dataset.c; if (c) { cc = c; upd(); } };

/* ---------- editable store policies ---------- */
const POLICIES = {
  ordering: { title: "How to Order", intro: "Shopping with OFT is simple. Product enquiries and order confirmations are currently handled personally through WhatsApp.", sections: [
    ["1. Choose your piece", "Browse the collection, open a product to see its description and available colours, then choose the item you would like."],
    ["2. Send your order request", "Select “Chat with us on WhatsApp”. Your message will include the product, quantity, selected colour where applicable and displayed price. Add your preferred size and any questions before sending."],
    ["3. Confirm availability and total", "Our team will confirm availability, size, final price, delivery option and any delivery fee before you pay. An order is confirmed only after OFT has acknowledged these details."],
    ["4. Payment and fulfilment", "Use only the payment details shared through OFT’s official WhatsApp or email contact. Keep your payment confirmation and order conversation until your order arrives."],
    ["5. Need help?", `Contact us on WhatsApp at +${WHATSAPP} or email ${EMAIL}.`]
  ]},
  size: { title: "Size Guide", intro: "We want your OFT piece to feel comfortable and look the way you expect. Product cuts can vary, so please confirm measurements for a specific item before ordering.", sections: [
    ["1. Compare with a garment you own", "Lay a similar well-fitting garment flat. Measure across the chest from underarm to underarm, the body length from the highest shoulder point to the hem, and the sleeve length where relevant."],
    ["2. Choose your preferred fit", "For a closer fit, compare your measurements with a similar fitted garment. For a relaxed or oversized streetwear look, compare with a garment that has the extra room you prefer."],
    ["3. Ask us before checkout", "OFT pieces may have different cuts and measurements. Send us the product name and your preferred fit on WhatsApp and we will help confirm the available size and measurements."],
    ["4. Measurement note", "Measurements can vary slightly between garments. If you are between sizes or unsure, please ask us before placing your order."]
  ]},
  care: { title: "Garment Care Guide", intro: "A little care helps your OFT pieces keep their shape, colour and print for longer. Always follow any care label attached to your garment.", sections: [
    ["1. Washing", "Turn printed garments inside out and wash with similar colours. Use a gentle cycle and cool water where possible. Avoid harsh bleach and strong stain removers on printed areas."],
    ["2. Drying", "Air-dry where possible and keep garments out of prolonged direct sunlight. Avoid high-heat tumble drying, which can cause shrinkage or affect prints."],
    ["3. Ironing", "Turn the garment inside out and use a low or medium heat setting suitable for the fabric. Do not place a hot iron directly on printed artwork, logos or graphics."],
    ["4. Storage", "Store clean, fully dry garments in a cool, dry place. Fold heavier pieces neatly and avoid leaving damp clothing packed away."],
    ["5. Special fabrics", "For any special fabric or trim, follow the garment label and contact us if you need clarification."]
  ]},
  faqs: { title: "Frequently Asked Questions", intro: "Quick answers to common questions about shopping with Outfit For Today.", sections: [
    ["Where is OFT based?", "OFT is based in Nairobi, Kenya."],
    ["How do I place an order?", "Open the product you like and select “Chat with us on WhatsApp”. We will confirm availability, size, total price and delivery details with you."],
    ["What payment methods do you accept?", "Payment arrangements are confirmed directly by OFT when your order is confirmed. Please use only official payment details shared by our team."],
    ["Do you deliver outside Nairobi?", "Delivery may be available in other parts of Kenya and internationally depending on the destination. Contact us to confirm coverage, cost and estimated timing."],
    ["Can I exchange or return an item?", "Please contact us as soon as possible if an item is faulty, damaged, incorrect or you need to discuss an exchange. Returns and exchanges are subject to the Returns & Refunds policy and applicable consumer law."],
    ["How do I choose a size?", "Check the Size Guide and message us with the product name and fit you prefer. We can help confirm garment measurements where available."],
    ["How can I contact OFT?", `WhatsApp: +${WHATSAPP}. Email: ${EMAIL}. Our stated support hours are Monday to Saturday, 9am–6pm EAT.`]
  ]},
  terms: { title: "Terms & Conditions", intro: "These draft terms explain the basis on which OFT presents products and accepts customer enquiries and orders. Please review and customise the operational details before launch.", sections: [
    ["1. About OFT", "OFT is a clothing label based in Nairobi, Kenya. References to “we”, “us” or “our” mean OFT; “you” means a visitor or customer."],
    ["2. Product information", "We aim to show product colours, descriptions, sizes and prices as accurately as possible. Screen settings and photographic lighting can affect how colours appear. Product availability may change, and an item shown online is not guaranteed to be in stock until we confirm your order."],
    ["3. Orders and confirmation", "Orders and enquiries are currently handled through WhatsApp. Sending an enquiry or order request is not acceptance by OFT. An order is accepted only after we confirm the item, selected colour/size, total price, delivery arrangement and payment instructions in writing."],
    ["4. Prices and payment", "Displayed prices are quoted in Kenyan shillings unless stated otherwise. Any USD or EUR display is an estimate and the final amount will be confirmed in KES. Delivery charges, where applicable, will be disclosed before you commit. Do not send payment to an account or number that has not been confirmed through OFT’s official contact channels."],
    ["5. Changes and cancellations", "Contact us as soon as possible if you need to change or cancel a request. We will try to help, but changes may not be possible once an order has been prepared or handed to a delivery provider. Any cancellation, return or refund will be handled under the applicable policy and mandatory law."],
    ["6. Use of this website", "You agree not to misuse the website, interfere with its operation, attempt unauthorised access, submit false information or use its content for unlawful purposes."],
    ["7. Intellectual property", "Website text, branding, logos, product photography and original creative material belong to OFT or their respective rights holders. You may not reproduce or commercially use them without prior written permission."],
    ["8. Liability", "Nothing in these terms limits a right or remedy that cannot lawfully be limited. To the extent permitted by law, OFT is not responsible for indirect loss arising from temporary website interruption, third-party network failures or events outside our reasonable control."],
    ["9. Privacy", "We handle personal information in accordance with our Privacy Policy and applicable Kenyan data-protection law. Please read that policy for details about the information used to process enquiries and orders."],
    ["10. Governing law and updates", "These terms are governed by the laws of Kenya. We may update them by publishing a revised version on this website. The version in force when an order is confirmed will apply to that order, subject to applicable law."]
  ]},
  shipping: { title: "Shipping Policy", intro: "This is a working draft. Delivery areas, fees, timelines and available methods should be confirmed with OFT before an order is paid for.", sections: [
    ["1. Delivery areas", "OFT is based in Nairobi, Kenya. Delivery within Nairobi, to other parts of Kenya and to destinations outside Kenya may be available depending on the destination and courier coverage. Ask us to confirm service to your location before placing an order."],
    ["2. Processing time", "Orders are prepared after the order details and payment arrangements have been confirmed. Preparation time can vary with stock availability, order volume, weekends and public holidays. We will communicate the expected dispatch or handover date when confirming your order."],
    ["3. Delivery estimates", "Any delivery date or timeframe provided is an estimate, not a guaranteed arrival date, unless we expressly confirm otherwise in writing. Courier delays, weather, public holidays, security restrictions and incorrect address details may affect delivery."],
    ["4. Delivery fees and payment", "The delivery fee, delivery method and any applicable additional charges will be communicated and agreed with you before payment is completed. For international deliveries, customs duties, import taxes or clearance charges may be payable by the recipient unless we expressly agree otherwise."],
    ["5. Address and contact details", "Please provide a complete delivery address, a working phone number and any useful directions. You are responsible for checking these details in the order confirmation and telling us promptly if they are incorrect."],
    ["6. Receiving your order", "Please check the parcel and items as soon as reasonably possible after delivery. If the parcel appears damaged, incomplete or incorrect, contact us promptly with your order details and clear photographs of the packaging and items."],
    ["7. Missed or failed delivery", "If a delivery cannot be completed because the recipient is unavailable, the address is inaccurate or the courier cannot reach the recipient, a re-delivery or return fee may apply. We will explain any additional charge and obtain your agreement before arranging a paid re-delivery."],
    ["8. Delays, loss or tracking", "Where tracking is available, we will share the tracking details. If a parcel is delayed or appears lost, contact us so we can follow up with the delivery provider. We will work with you to resolve confirmed delivery issues fairly and in line with applicable law."],
    ["9. Changes to delivery", "Contact us immediately if you need to change the delivery address or instructions. Changes cannot be guaranteed after dispatch and may cause extra charges or delays."],
    ["10. Questions", "For a delivery update or shipping quote, contact OFT through the WhatsApp or email details shown on this website. Please include your name and order reference, if available."]
  ]},
  returns: { title: "Returns & Refunds", intro: "This draft is intended to set out a fair process. Final return windows and any product-specific exclusions should be reviewed and confirmed by OFT before publication.", sections: [
    ["1. Contact us first", "If an item is incorrect, faulty, damaged or not what you ordered, contact us as soon as possible after receiving it. Include your order details, a description of the issue and clear photographs where relevant. Please do not send an item back before we provide return instructions."],
    ["2. Incorrect, damaged or faulty items", "We will review the issue and, where appropriate, arrange a replacement, repair, refund or another remedy in accordance with applicable consumer law. We may ask for reasonable evidence to understand the issue."],
    ["3. Change of mind", "If you simply change your mind, contact us before returning the item. Whether a change-of-mind return can be accepted will depend on the item’s condition, hygiene considerations and the return terms confirmed at purchase. Statutory consumer rights are not affected."],
    ["4. Condition of returned items", "Unless the item is faulty or incorrect, please keep it unworn, unwashed, undamaged and with original tags and packaging where possible. Items showing wear, washing, alterations or damage caused after delivery may not qualify for a voluntary change-of-mind return."],
    ["5. Refunds", "Where a refund is approved, we will confirm the amount and method with you. Processing time may depend on the payment provider or financial institution. Original delivery charges and return shipping costs will be handled as required by law and as communicated when the return is approved."],
    ["6. Exchanges", "Exchanges depend on stock availability. If the requested replacement is unavailable, we will discuss an appropriate alternative or refund where applicable."],
    ["7. Return shipping", "If the item is confirmed to be faulty, damaged on arrival or incorrectly supplied, we will explain the return or collection arrangement. For other approved returns, responsibility for return delivery costs will be confirmed before you send the item."],
    ["8. How to reach us", "Start a return request using the WhatsApp or email contact details on this website. Include your order reference and the reason for the request."]
  ]},
  privacy: { title: "Privacy Policy", intro: "OFT respects your privacy. This draft describes the personal information that may be used when you browse, enquire about or order our products.", sections: [
    ["1. Information we may collect", "Depending on how you interact with us, we may receive your name, phone number, email address, delivery address, order details, messages and information you choose to share. Basic technical information may also be collected by hosting or security services."],
    ["2. How we use information", "We use information to respond to enquiries, confirm and fulfil orders, arrange delivery, provide customer support, maintain business records, protect the website and meet legal obligations. We will not use your contact details for unrelated marketing without an appropriate lawful basis or consent where required."],
    ["3. Sharing information", "We may share the minimum information needed with service providers such as couriers, payment providers, website hosting providers and professional advisers, or where disclosure is required by law. We do not sell personal information."],
    ["4. Retention and security", "We keep information only for as long as reasonably necessary for the purposes described or as required by law. We use reasonable safeguards, but no online transmission or storage system can be guaranteed completely secure."],
    ["5. Your rights", "Subject to applicable law, you may have rights to request access to, correction or deletion of your personal information, object to or restrict certain processing, or withdraw consent where processing relies on consent. You may also have the right to complain to the relevant data-protection authority."],
    ["6. Contact", "For privacy requests or questions, contact OFT using the email address shown on this website. We may need to verify your request before acting on it."],
    ["7. Legal framework and changes", "We aim to handle personal data in line with the Kenya Data Protection Act, 2019 and applicable regulations. We may update this policy by publishing a revised version here."]
  ]},
  cookies: { title: "Cookie Policy", intro: "This draft explains cookies and similar technologies that may be used by the website or its service providers.", sections: [
    ["1. What cookies are", "Cookies are small files stored on your device. Similar technologies may remember preferences, support security or help a website function."],
    ["2. How they may be used", "Essential technologies may be needed for core website operation, security and remembering settings. If analytics, advertising or other non-essential cookies are added, this policy should be updated to identify them and explain how visitors can manage their choices."],
    ["3. Third-party services", "Embedded content, fonts, analytics or other external services may process technical information under their own policies. The current site loads web fonts from Google Fonts; your browser may contact Google to retrieve those font files."],
    ["4. Managing cookies", "You can manage or delete cookies through your browser settings. Blocking essential cookies or similar technologies may affect how parts of a website work."],
    ["5. Updates", "We may update this policy when the website’s technology changes. Please check this page for the current version."]
  ]}
};
function showPolicy(key) {
  const data = POLICIES[key]; if (!data) return;
  const modal = document.getElementById("policyDialog");
  document.getElementById("policyTitle").textContent = data.title;
  document.getElementById("policyBody").innerHTML = `<p class="policy-intro">${data.intro}</p>${data.sections.map(([h, body]) => `<section><h3>${h}</h3><p>${body}</p></section>`).join("")}`;
  modal.hidden = false; document.body.classList.add("policy-open");
  document.getElementById("policyClose").focus();
}
function closePolicy() { document.getElementById("policyDialog").hidden = true; document.body.classList.remove("policy-open"); }
document.getElementById("policyClose").addEventListener("click", closePolicy);
document.getElementById("policyDialog").addEventListener("click", e => { if (e.target.id === "policyDialog") closePolicy(); });
addEventListener("keydown", e => { if (e.key === "Escape" && !document.getElementById("policyDialog").hidden) closePolicy(); });

/* ---------- support bubble ---------- */
$("#panel").innerHTML = `<b>Need a hand?</b><p>Questions about sizes, colours or delivery? We usually reply within the hour.</p>
  <a class="catalogue" href="https://wa.me/c/254757806940" target="_blank" rel="noopener">View catalogue</a>
  <a class="go" href="${waLink("Hi OFT! I'd like to place an order.")}" target="_blank" rel="noopener">Chat with us on WhatsApp</a>
  <a href="${waLink("Hi OFT! I need some help.")}" target="_blank" rel="noopener">Chat with support</a>
  <a href="mailto:${EMAIL}">Email us</a>`;
$("#bubble").onclick = () => { const p = $("#panel"); p.hidden = !p.hidden; $("#bubble").setAttribute("aria-expanded", !p.hidden); };

/* ---------- keep the landing content clear of the fixed header (it wraps to 1-2 rows) ---------- */
const topBar = document.querySelector(".top");
const syncHdr = () => document.documentElement.style.setProperty("--hdr", topBar.offsetHeight + "px");
syncHdr(); addEventListener("resize", syncHdr); addEventListener("load", syncHdr);
if (window.ResizeObserver) new ResizeObserver(syncHdr).observe(topBar);
})();
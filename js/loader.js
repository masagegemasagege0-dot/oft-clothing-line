/* OFT page loader: OUTFIT.FOR.TODAY with a 0-100% bar underneath.
   Load this in <head> (blocking) so it shows before the page paints.
   Progress milestones: HTML parsed 40% -> fonts ready 70% -> all images loaded 100%,
   with a slow creep between milestones so the bar never looks stuck. */
(() => {
  const root = document.documentElement;
  root.classList.add("oft-loading");

  const el = document.createElement("div");
  el.className = "oft-loader";
  el.setAttribute("role", "progressbar");
  el.setAttribute("aria-label", "Loading OUTFIT.FOR.TODAY");
  el.setAttribute("aria-valuemin", "0");
  el.setAttribute("aria-valuemax", "100");
  el.setAttribute("aria-valuenow", "0");
  el.innerHTML =
    '<div class="oft-loader-word">OUTFIT.FOR.TODAY</div>' +
    '<div class="oft-loader-track"><div class="oft-loader-fill"></div></div>' +
    '<div class="oft-loader-pct">0%</div>';
  root.appendChild(el);

  const fill = el.querySelector(".oft-loader-fill");
  const pct = el.querySelector(".oft-loader-pct");
  const MIN_MS = 900;                       // keep it visible long enough to read
  const t0 = performance.now();
  let target = 5, shown = 0, finished = false;

  const bump = n => { if (n > target) target = n; };
  const render = v => {
    const p = Math.round(v);
    fill.style.transform = "scaleX(" + (v / 100) + ")";
    pct.textContent = p + "%";
    el.setAttribute("aria-valuenow", String(p));
  };

  const finish = () => {
    if (finished) return; finished = true;
    const wait = Math.max(0, MIN_MS - (performance.now() - t0));
    setTimeout(() => {
      target = 100;
      const t = setInterval(() => {
        if (shown >= 100) {
          clearInterval(t);
          setTimeout(() => {
            el.classList.add("done");
            root.classList.remove("oft-loading");
            setTimeout(() => el.remove(), 700);
          }, 250);
        }
      }, 50);
    }, wait);
  };

  // smooth ticker: ease `shown` toward `target`, creep slowly until the next milestone
  (function tick() {
    if (shown < target) shown = Math.min(target, shown + Math.max(0.6, (target - shown) * 0.12));
    else if (!finished && shown < target + 25 && shown < 92) { shown += 0.08; }
    render(shown);
    if (shown < 100 || !el.classList.contains("done")) requestAnimationFrame(tick);
  })();

  // milestones
  const onDom = () => bump(40);
  if (document.readyState !== "loading") onDom();
  else document.addEventListener("DOMContentLoaded", onDom);

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => bump(70));

  const onLoad = () => { bump(90); finish(); };
  if (document.readyState === "complete") onLoad();
  else addEventListener("load", onLoad);

  setTimeout(finish, 8000);                  // safety net: never trap the visitor behind the loader
})();

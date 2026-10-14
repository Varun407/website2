/* ══════════════════════════════════════════════════
   WE WRITE YOU CHILL , ANIMATION ENGINE
══════════════════════════════════════════════════ */

/* ── COPY UTILITIES ────────────────────────────── */
const toast = document.createElement('div');
toast.className = 'copy-toast';
document.body.appendChild(toast);

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2000);
}

function copyHex(btn, hex) {
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(hex).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
    showToast('Copied ' + hex);
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`;
    }, 2000);
  }).catch(() => {
    showToast('Unable to copy to clipboard');
  });
}

function copyText(btn, id) {
  const el = document.getElementById(id);
  if (!el || !navigator.clipboard) return;
  navigator.clipboard.writeText(el.innerText.trim()).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    showToast('Copy ready , paste into LinkedIn');
    setTimeout(() => btn.textContent = orig, 2000);
  }).catch(() => {
    showToast('Unable to copy to clipboard');
  });
}

/* ── TAB NAVIGATION ────────────────────────────── */
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
  const top = document.querySelector('.cover').offsetHeight + (document.querySelector('.stat-strip')?.offsetHeight || 0);
  window.scrollTo({ top, behavior: 'smooth' });
  if (id === 'dashboard') { setTimeout(animDashboard, 80); }
}

/* ── EASING ────────────────────────────────────── */
const ease = t => 1 - Math.pow(1 - t, 3);
const easeOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/* ── COUNT UP UTILITY ──────────────────────────── */
function countUp(el, target, duration, suffix) {
  const start = performance.now();
  el.classList.add('counting');
  (function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(easeOut(p) * target) + (suffix || '');
    if (p < 1) requestAnimationFrame(tick);
    else { el.textContent = target + (suffix || ''); el.classList.remove('counting'); }
  })(performance.now());
}

/* ── RING ANIMATION ────────────────────────────── */
const SCORE_VAL = 34;
const CIRC = 659.73;

function animRing() {
  const rf = document.querySelector('.ring-fill');
  const num = document.querySelector('.ring-score');
  if (!rf || !num) return;
  const targetOffset = CIRC - (CIRC * SCORE_VAL / 100);
  rf.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.16,1,0.3,1)';
  rf.style.strokeDashoffset = targetOffset;
  countUp(num, SCORE_VAL, 2000);
}

function animStatCounters() {
  document.querySelectorAll('[data-count-to]').forEach((el, i) => {
    const target = +el.dataset.countTo;
    setTimeout(() => countUp(el.firstElementChild || el, target, 1600), i * 120 + 400);
  });
}

/* ── DASHBOARD ANIMATIONS ──────────────────────── */
function animDashboard() {
  /* Radar */
  const rp = document.querySelector('.radar-area');
  if (rp) {
    rp.style.transition = 'opacity 0.6s ease';
    rp.style.fillOpacity = '1';
    setTimeout(() => document.querySelectorAll('.radar-point').forEach((d, i) =>
      setTimeout(() => { d.style.opacity = '1'; d.style.transform = 'scale(1)'; }, i * 80 + 300)), 300);
  }
  document.querySelectorAll('.legend-bar-fill[data-w]').forEach((el, i) =>
    setTimeout(() => el.style.width = el.dataset.w + '%', i * 80 + 200));

  /* Score cards , staggered popIn */
  document.querySelectorAll('.score-card').forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) scale(1)';
      /* Count the score number */
      const ne = el.querySelector('[data-count]');
      if (ne) countUp(ne, +ne.dataset.count, 1000);
      /* Fill bar */
      const be = el.querySelector('.score-bar-fill[data-w]');
      if (be) setTimeout(() => be.style.width = be.dataset.w + '%', 100);
      /* Donut */
      const de = el.querySelector('.donut-fill[data-offset]');
      if (de) setTimeout(() => de.style.strokeDashoffset = de.dataset.offset, 150);
    }, i * 70 + 100);
  });
}

function animSteps() {
  document.querySelectorAll('.step-card').forEach((el, i) =>
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateX(0)'; }, i * 90 + 100));
}
function animProblems() {
  document.querySelectorAll('.problem-card').forEach((el, i) =>
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; el.classList.add('visible'); }, i * 120 + 100));
}
function animAudit() {
  document.querySelectorAll('.audit-card').forEach((el, i) =>
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, i * 100 + 100));
}

/* ── SCROLL-REVEAL OBSERVER ────────────────────── */
/* Stat strip triggers ring + counters */
const stripObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { animRing(); animStatCounters(); stripObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
if (document.querySelector('.stat-strip')) stripObs.observe(document.querySelector('.stat-strip'));

/* Generic reveal: cards, banners, palettes, CTAs */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const delay = +(el.dataset.revealDelay || 0);
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) translateX(0) scale(1)';
      el.classList.add('visible');
      /* Trigger sub-animations */
      el.querySelectorAll('.score-bar-fill[data-w]').forEach(b =>
        setTimeout(() => b.style.width = b.dataset.w + '%', delay + 100));
      el.querySelectorAll('.donut-fill[data-offset]').forEach(d =>
        setTimeout(() => d.style.strokeDashoffset = d.dataset.offset, delay + 120));
      el.querySelectorAll('[data-count]').forEach(ne =>
        setTimeout(() => countUp(ne, +ne.dataset.count, 1100), delay + 60));
      el.querySelectorAll('.legend-bar-fill[data-w]').forEach(b =>
        setTimeout(() => b.style.width = b.dataset.w + '%', delay + 140));
    }, delay);
    revealObs.unobserve(el);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

/* ── SET INITIAL HIDDEN STATE & OBSERVE ────────── */
document.querySelectorAll('.score-card').forEach((el, i) => {
  el.style.cssText += 'opacity:0;transform:translateY(24px) scale(0.97);transition:opacity .5s ease,transform .5s cubic-bezier(0.34,1.56,0.64,1);';
  el.dataset.revealDelay = i * 55;
  revealObs.observe(el);
});
document.querySelectorAll('.problem-card').forEach((el, i) => {
  el.style.cssText += 'opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;';
  el.dataset.revealDelay = i * 90;
  revealObs.observe(el);
});
document.querySelectorAll('.audit-card').forEach((el, i) => {
  el.style.cssText += 'opacity:0;transform:translateY(20px);transition:opacity .5s ease,transform .5s ease;';
  el.dataset.revealDelay = i * 65;
  revealObs.observe(el);
});
document.querySelectorAll('.step-card').forEach((el, i) => {
  el.style.cssText += 'opacity:0;transform:translateX(-20px);transition:opacity .5s ease,transform .5s ease;';
  el.dataset.revealDelay = i * 80;
  revealObs.observe(el);
});
document.querySelectorAll('.banner-brief,.wcta,.palette-card,.color-card').forEach((el, i) => {
  el.style.cssText += 'opacity:0;transform:translateY(20px);transition:opacity .65s ease,transform .65s ease;';
  el.dataset.revealDelay = i * 40;
  revealObs.observe(el);
});

/* Radar initial state */
document.querySelectorAll('.radar-area').forEach(el => { el.style.fillOpacity = '0'; });
document.querySelectorAll('.radar-point').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'scale(0)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
});

/* Boot dashboard on initial load */
setTimeout(animDashboard, 350);

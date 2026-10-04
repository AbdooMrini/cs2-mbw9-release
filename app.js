// Single place to update on each release.
const RELEASE = {
  version: '3.4',
  build: '14243',
  date: 'Oct 2 2026',
  zip: 'mbw9-v3.4.zip',
  github: 'https://github.com/AbdooMrini/cs2-mbw9-release',
  discord: 'https://discord.gg/A34uD5RKa'
};

document.querySelectorAll('[data-v]').forEach(el => { el.textContent = RELEASE[el.dataset.v]; });
document.querySelectorAll('[data-href]').forEach(a => { a.href = RELEASE[a.dataset.href]; });

// Feature tabs. Without JS every panel stays visible as a plain list.
(function () {
  const list = document.querySelector('.tabs');
  const panels = [...document.querySelectorAll('.panel')];
  if (!list || !panels.length) return;
  document.documentElement.classList.add('js');

  const buttons = panels.map((panel, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.role = 'tab';
    b.id = 'tab-' + i;
    b.textContent = panel.dataset.tab;
    b.setAttribute('aria-controls', 'panel-' + i);
    panel.id = 'panel-' + i;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', b.id);
    b.addEventListener('click', () => select(i));
    list.appendChild(b);
    return b;
  });

  const bar = document.createElement('span');
  bar.className = 'tab-ind';
  list.appendChild(bar);
  let current = 0;
  function moveTab() {
    const b = buttons[current];
    bar.style.width = b.offsetWidth + 'px';
    bar.style.transform = 'translateX(' + b.offsetLeft + 'px)';
  }

  function select(n, focus) {
    current = n;
    moveTab();
    buttons.forEach((b, i) => {
      b.setAttribute('aria-selected', i === n);
      b.tabIndex = i === n ? 0 : -1;
      panels[i].classList.toggle('on', i === n);
    });
    if (focus) buttons[n].focus();
  }

  list.addEventListener('keydown', e => {
    const cur = buttons.findIndex(b => b.getAttribute('aria-selected') === 'true');
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (step) { e.preventDefault(); select((cur + step + buttons.length) % buttons.length, true); }
    if (e.key === 'Home') { e.preventDefault(); select(0, true); }
    if (e.key === 'End') { e.preventDefault(); select(buttons.length - 1, true); }
  });

  select(0);
  addEventListener('resize', moveTab);
  if (document.fonts) document.fonts.ready.then(moveTab);
})();

// ---------- Motion ----------
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Stagger index for tab lists
document.querySelectorAll('.panel li').forEach(li => {
  li.style.setProperty('--i', [...li.parentNode.children].indexOf(li));
});

// Menu status: waiting -> attaching -> connected
const status = document.querySelector('.status');
if (status && !calm) {
  const label = status.querySelector('b');
  const steps = [
    [0, 'wait', 'waiting for cs2.exe'],
    [900, 'attach', 'attaching via NtReadVirtualMemory'],
    [1900, 'ok', 'CS2 connected']
  ];
  steps.forEach(([t, state, text]) => setTimeout(() => {
    status.dataset.state = state;
    label.textContent = text;
  }, t));
  status.dataset.state = 'wait';
  label.textContent = steps[0][2];
}

// Reveal sections once
if (!calm && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries, obs) => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.sec > *').forEach(el => { el.classList.add('rv'); io.observe(el); });
}

// Highlight current section in the nav
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.nav nav a[href^="#"]:not(.btn)')];
  const navEl = document.querySelector('.nav nav');
  const ind = document.createElement('span');
  ind.className = 'ind';
  navEl.appendChild(ind);
  document.querySelector('.nav').classList.add('has-ind');
  let curLink = null;
  function moveInd(a) {
    curLink = a || curLink;
    if (!curLink) return;
    ind.style.opacity = 1;
    ind.style.width = curLink.offsetWidth + 'px';
    ind.style.transform = 'translate(' + curLink.offsetLeft + 'px,' + (curLink.offsetTop + curLink.offsetHeight + 2) + 'px)';
  }
  addEventListener('resize', () => moveInd());
  if (document.fonts) document.fonts.ready.then(() => moveInd());
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver(entries => entries.forEach(e => {
    const a = map.get(e.target.id);
    if (a && e.isIntersecting) {
      links.forEach(l => l.removeAttribute('aria-current'));
      a.setAttribute('aria-current', 'true');
      moveInd(a);
    }
  }), { rootMargin: '-40% 0px -55% 0px' });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
}

// ---------- Fluidity ----------
// Stagger lists and rows when their section reveals
document.querySelectorAll('.spec, .log, .faq, .steps, .keys tbody').forEach(box => {
  box.classList.add('stagger');
  const pair = box.matches('.spec, .log') ? 2 : 1;
  [...box.children].forEach((c, i) => c.style.setProperty('--i', Math.floor(i / pair)));
});

// Scroll progress line + nav shadow, one frame at a time
const navBar = document.querySelector('.nav');
const prog = document.createElement('span');
prog.className = 'progress';
navBar.appendChild(prog);
let tick = false;
function onScroll() {
  if (tick) return;
  tick = true;
  requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - innerHeight;
    prog.style.setProperty('--p', max > 0 ? Math.min(scrollY / max, 1).toFixed(4) : 0);
    navBar.classList.toggle('scrolled', scrollY > 8);
    tick = false;
  });
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Screenshot leans toward the pointer, eased so it never snaps
const shot = document.querySelector('.shot');
if (shot && !calm && matchMedia('(pointer: fine)').matches) {
  let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
  const loop = () => {
    x += (tx - x) * 0.09;
    y += (ty - y) * 0.09;
    shot.style.transform = 'perspective(1100px) rotateY(' + x.toFixed(2) + 'deg) rotateX(' + y.toFixed(2) + 'deg)';
    raf = (Math.abs(tx - x) + Math.abs(ty - y) > 0.01) ? requestAnimationFrame(loop) : 0;
  };
  const aim = (a, b) => { tx = a; ty = b; if (!raf) raf = requestAnimationFrame(loop); };
  document.querySelector('.hero').addEventListener('pointermove', e => {
    const r = shot.getBoundingClientRect();
    const nx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (innerWidth / 2)));
    const ny = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (innerHeight / 2)));
    aim(nx * 3, -ny * 2.5);
  });
  document.querySelector('.hero').addEventListener('pointerleave', () => aim(0, 0));
}
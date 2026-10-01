// Single place to update on each release.
const RELEASE = {
  version: '3.3',
  build: '14188',
  date: 'Sep 30 2026',
  zip: 'mbw9-v3.3.zip',
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

  function select(n, focus) {
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
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver(entries => entries.forEach(e => {
    const a = map.get(e.target.id);
    if (a && e.isIntersecting) {
      links.forEach(l => l.removeAttribute('aria-current'));
      a.setAttribute('aria-current', 'true');
    }
  }), { rootMargin: '-40% 0px -55% 0px' });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
}

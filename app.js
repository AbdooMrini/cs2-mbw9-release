// Single place to update on each release.
const RELEASE = {
  version: '3.3',
  build: '14188',
  date: 'Sep 30 2026',
  zip: 'mbw9-v3.3.zip',
  github: 'https://github.com/AbdooMrini/cs2-mbw9-release',
  discord: 'https://discord.gg/j88M4gwdG'
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

// Sticky nav scroll shadow
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10 ? '0 1px 0 #1e2128' : '';
  }, { passive: true });
}

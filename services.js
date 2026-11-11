(() => {
  const section = document.getElementById('services');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.getElementById('menuButton').addEventListener('click', () => {
    document.getElementById('services-title').setAttribute('tabindex', '-1');
    document.getElementById('services-title').focus({ preventScroll: true });
    section.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  });
})();

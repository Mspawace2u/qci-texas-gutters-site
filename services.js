(() => {
  const section = document.getElementById('services');
  const carousel = document.getElementById('carousel');
  const cards = [...carousel.querySelectorAll('.service-card')];
  const dots = [...section.querySelectorAll('.carousel-dot')];
  const toggle = document.getElementById('viewToggle');
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');
  const controls = section.querySelector('.carousel-controls');
  const pagination = section.querySelector('.carousel-dots');
  const instructions = document.getElementById('service-instructions');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;

  function updateControls(index) {
    active = Math.max(0, Math.min(cards.length - 1, index));
    dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === active)));
    previous.disabled = active === 0;
    next.disabled = active === cards.length - 1;
  }

  function selectCard(index) {
    if (section.dataset.view !== 'swipe') return;
    updateControls(index);
    const bounds = carousel.getBoundingClientRect();
    const card = cards[active].getBoundingClientRect();
    carousel.scrollTo({
      left: carousel.scrollLeft + card.left - bounds.left - (bounds.width - card.width) / 2,
      behavior: reducedMotion.matches ? 'instant' : 'smooth',
    });
  }

  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const swipe = section.dataset.view !== 'swipe';
    section.dataset.view = swipe ? 'swipe' : 'stack';
    toggle.setAttribute('aria-pressed', String(swipe));
    controls.hidden = pagination.hidden = !swipe;
    if (swipe) carousel.setAttribute('tabindex', '0');
    else carousel.removeAttribute('tabindex');
    instructions.textContent = swipe
      ? 'Swipe, use the arrow buttons, or focus the gallery and press the left and right arrow keys.'
      : 'Scroll to explore installation, gutter guards, and repairs.';
    // Reset only the gallery; never move the document on initial load.
    carousel.scrollLeft = 0;
    updateControls(0);
  });

  dots.forEach(dot => dot.addEventListener('click', () => selectCard(Number(dot.dataset.slide))));
  previous.addEventListener('click', () => selectCard(active - 1));
  next.addEventListener('click', () => selectCard(active + 1));
  carousel.addEventListener('keydown', event => {
    if (section.dataset.view !== 'swipe' || event.target !== carousel) return;
    const index = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: cards.length - 1 }[event.key];
    if (index === undefined) return;
    event.preventDefault();
    selectCard(index);
  });
  let scrollTimer;
  carousel.addEventListener('scroll', () => {
    if (section.dataset.view !== 'swipe') return;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const bounds = carousel.getBoundingClientRect();
      const center = bounds.left + bounds.width / 2;
      let nearest = 0;
      let distance = Infinity;
      cards.forEach((card, i) => {
        const box = card.getBoundingClientRect();
        const delta = Math.abs(box.left + box.width / 2 - center);
        if (delta < distance) { nearest = i; distance = delta; }
      });
      updateControls(nearest);
    }, 100);
  }, { passive: true });
  document.getElementById('menuButton').addEventListener('click', () => {
    document.getElementById('services-title').setAttribute('tabindex', '-1');
    document.getElementById('services-title').focus({ preventScroll: true });
    section.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  });
  updateControls(0);
})();

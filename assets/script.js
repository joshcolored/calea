
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (entry.target.dataset.delay || 0) * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach((el, i) => {
    el.dataset.delay = i % 4;
    observer.observe(el);
  });


  document.querySelectorAll('.menu-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });


  const nav = document.querySelector('nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  const closeMenu = () => {
    nav.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });


  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      const offset = nav.offsetHeight + 14;
      const targetTop = window.scrollY + target.getBoundingClientRect().top - offset;
      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: 'smooth'
      });
      closeMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu();
  });
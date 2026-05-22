// NAV SCROLL
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// MOBILE MENU
const toggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// FADE-IN ON SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .blog-card, .tl-item, .exp-item, .fade-in').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// HERO CONTENT ANIMATION
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
  heroContent.style.opacity = '0';
  heroContent.style.transform = 'translateY(24px)';
  heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  requestAnimationFrame(() => {
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  });
}

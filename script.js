// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Mobile nav open styles (kept in JS to avoid extra CSS specificity fights)
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 860px) {
    .main-nav.nav-open{
      display:flex;
      flex-direction:column;
      position:absolute;
      top:64px; left:0; right:0;
      background: var(--board);
      border-bottom: 1px solid var(--line);
      padding: 18px 28px;
      gap: 16px;
    }
  }
`;
document.head.appendChild(style);

// One orchestrated hero entrance (respects reduced motion)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  const heroCopy = document.querySelector('.hero-copy');
  const heroPhoto = document.querySelector('.hero-photo-wrap');
  [heroCopy, heroPhoto].forEach((el, i) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 120 + i * 130);
  });
}

// Photo upload helper: lets you drop in your own photo without editing HTML.
// Click the photo slot, choose an image, and it renders inside the module frame.
const photoSlot = document.getElementById('photo-slot');
if (photoSlot) {
  photoSlot.style.cursor = 'pointer';
  photoSlot.title = 'Click to add your photo';
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.style.display = 'none';
  document.body.appendChild(input);

  photoSlot.addEventListener('click', () => input.click());
  input.addEventListener('change', () => {
    const file = input.files && input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      photoSlot.innerHTML = `<img src="${e.target.result}" alt="Payal Chandoba">`;
    };
    reader.readAsDataURL(file);
  });
}

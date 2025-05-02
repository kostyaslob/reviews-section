const burgerBtn = document.querySelector('[data-burger-btn]');
const closeBtn = document.querySelector('[data-close-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.classList.add('modal-open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
});

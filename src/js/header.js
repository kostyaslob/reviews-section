document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const openMenuBtn = document.querySelector('[data-open-btn]'); 
  const closeMenuBtn = document.querySelector('[data-close-btn]');

  if (openMenuBtn && closeMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.add('is-open');
    });

    closeMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
    });
  } 
});

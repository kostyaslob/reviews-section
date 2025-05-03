document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const openMenuBtn = document.querySelector('.header-burger-icon'); // Змініть селектор, якщо потрібно
  const closeMenuBtn = document.querySelector('[data-close-btn]');

  if (openMenuBtn && closeMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.add('is-open');
    });

    closeMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
    });
  } else {
    console.warn('Не вдалося знайти необхідні елементи для мобільного меню.');
  }
});

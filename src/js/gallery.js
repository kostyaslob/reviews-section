import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// Removed invalid statement
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  // spaceBetween: 24, // 👈 додано для мобільних
  navigation: {
    nextEl: '#icon-swiper-left',
    prevEl: '#icon-swiper-right',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 24, // 👈 для десктопу
    },
  },
});

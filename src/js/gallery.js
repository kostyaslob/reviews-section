import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24, // Або інше значення

    navigation: {
      nextEl: '.right-btn',
      prevEl: '.left-btn',
    },

    breakpoints: {
      1200: {
        slidesPerView: 2,
        // spaceBetween: 24,
      },
    },
  });
});

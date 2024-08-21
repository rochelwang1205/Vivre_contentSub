import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// const swiper = new Swiper(".project-swiper", {
//   slidesPerView: 1,
//   centeredSlides: true,
//   spaceBetween: 0,
// });

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // 手機板顯示一個卡片
    spaceBetween: 10, // 卡片之間的間距
    breakpoints: {
      768: {
        slidesPerView: 2, // 平板及以上顯示兩個卡片
        spaceBetween: 20,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
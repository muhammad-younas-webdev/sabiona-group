const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  speed: 800,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
//

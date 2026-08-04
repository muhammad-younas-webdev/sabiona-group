const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  speed: 800,

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
// Bullet Clickable JS
// const bullets = document.querySelectorAll(".custom-pagination-bullet");

// // By default first bullet active
// bullets[0].classList.add("swiper-pagination-bullet-active");

// // Click event
// bullets.forEach((bullet) => {
//   bullet.addEventListener("click", () => {
//     // Sab se active class remove
//     bullets.forEach((item) => {
//       item.classList.remove("swiper-pagination-bullet-active");
//     });

//     // Jis par click hua us par add
//     bullet.classList.add("swiper-pagination-bullet-active");
//   });
// });

// const bullets = document.querySelectorAll(".custom-pagination-bullet");
// const cardImages = document.querySelectorAll(".swiper-card-image");

// // By default
// bullets[0].classList.add("swiper-pagination-bullet-active");
// cardImages[0].classList.add("swiper-card-image-active");

// bullets.forEach((bullet, index) => {
//   bullet.addEventListener("click", () => {
//     // Bullet active remove
//     bullets.forEach((item) => {
//       item.classList.remove("swiper-pagination-bullet-active");
//     });

//     // Image active remove
//     cardImages.forEach((item) => {
//       item.classList.remove("swiper-card-image-active");
//     });

//     // Active add
//     bullet.classList.add("swiper-pagination-bullet-active");
//     cardImages[index].classList.add("swiper-card-image-active");
//   });
// });

const bullets = document.querySelectorAll(".custom-pagination-bullet");
const cardImages = document.querySelectorAll(".swiper-card-image");
const cards = document.querySelectorAll(".portfolio-card"); // Card elements

// Helper function to update active states
function setActiveIndex(index) {
  // Remove active classes
  bullets.forEach((item) =>
    item.classList.remove("swiper-pagination-bullet-active"),
  );
  cardImages.forEach((item) =>
    item.classList.remove("swiper-card-image-active"),
  );

  // Add active classes to selected index
  if (bullets[index])
    bullets[index].classList.add("swiper-pagination-bullet-active");
  if (cardImages[index])
    cardImages[index].classList.add("swiper-card-image-active");
}

// By default (Set index 0 active)
setActiveIndex(0);

// Click on Pagination Bullets
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    setActiveIndex(index);
  });
});

// Click on Cards
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    setActiveIndex(index);
  });
});

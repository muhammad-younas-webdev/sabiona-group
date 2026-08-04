const swiper = new Swiper(".mySwiper", {
  // ...
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16, // gap increase
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 16, // gap increase
    },
  },
});
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

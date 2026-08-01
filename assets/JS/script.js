// const hamburgerBtn = document.querySelector(".hamburger-btn");

// hamburgerBtn.addEventListener("click", () => {
//   hamburgerBtn.classList.toggle("active");
// });

const hamburgerBtn = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".header-navbar-container");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const hamburgerBtn = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".header-navbar-container");
const overlay = document.querySelector(".overlay");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Close menu when clicking on the overlay
// (Overlay par click karne par menu ko band karein)
overlay.addEventListener("click", () => {
  hamburgerBtn.classList.remove("active");
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// GSAP animation Code
document.querySelectorAll(".home-featured-card");

var tl = gsap.timeline();
tl.to(".home-featured-card", {
  y: -24,
  opacity: 1,
  duration: 0.3,
  delay: 0.3,
  stagger: 0.2,
  ease: "power2.out",
});

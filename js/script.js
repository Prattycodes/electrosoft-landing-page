AOS.init();

// Toggle Mobile Menu and hide/show upper navbar
const toggleMenu = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

let menuOpen = false;

toggleMenu.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("hidden", !menuOpen);
});

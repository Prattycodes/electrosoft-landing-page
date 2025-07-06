document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileNav = document.getElementById("mobile-nav");

  mobileMenuButton.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event from bubbling up
    mobileNav.classList.toggle("hidden");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!mobileNav.contains(event.target)) {
      mobileNav.classList.add("hidden");
    }
  });

  // Close mobile menu when clicking on a nav link
  const mobileNavLinks = mobileNav.querySelectorAll("a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNav.classList.add("hidden");
    });
  });

  // Existing search functionality
  const searchToggle = document.getElementById("search-toggle");
  const closeSearch = document.getElementById("close-search");
  const searchBar = document.getElementById("search-bar");
  const mainHeader = document.getElementById("main-header");

  searchToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    searchBar.classList.toggle("hidden");
    // mainHeader.classList.toggle("h-[60px]");
    // Close mobile menu if open when opening search
    mobileNav.classList.add("hidden");
  });

  closeSearch.addEventListener("click", function (e) {
    e.stopPropagation();
    searchBar.classList.add("hidden");
    // mainHeader.classList.add("h-[60px]");
  });

  // Close search when clicking outside
  document.addEventListener("click", function (event) {
    if (!searchBar.contains(event.target) && event.target !== searchToggle) {
      searchBar.classList.add("hidden");
      mainHeader.classList.add("h-[60px]");
    }
  });

  const upperHeader = document.getElementById("upper-header");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    // For desktop only (mobile has hidden upper header)
    if (window.innerWidth >= 768) {
      if (currentScroll <= 0) {
        // At top of page - show upper header
        upperHeader.classList.remove("-translate-y-full");
        upperHeader.classList.remove("opacity-0");
      } else if (currentScroll > lastScroll) {
        // Scrolling down - hide upper header
        upperHeader.classList.add("-translate-y-full");
        upperHeader.classList.add("opacity-0");
      } else {
        // Scrolling up - show upper header
        upperHeader.classList.remove("-translate-y-full");
        upperHeader.classList.remove("opacity-0");
      }
    }

    lastScroll = currentScroll;
  });
});

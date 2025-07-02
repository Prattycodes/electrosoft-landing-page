document.addEventListener("DOMContentLoaded", function () {
  // Search functionality
  const searchToggle = document.getElementById("search-toggle");
  const closeSearch = document.getElementById("close-search");
  const searchBar = document.getElementById("search-bar");
  const mainHeader = document.getElementById("main-header");

  searchToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event from bubbling up
    searchBar.classList.toggle("hidden");
    searchBar.classList.toggle("block");
    mainHeader.classList.toggle("h-[60px]");
    mainHeader.classList.toggle("h-auto");
  });

  closeSearch.addEventListener("click", function (e) {
    e.stopPropagation();
    searchBar.classList.add("hidden");
    searchBar.classList.remove("block");
    mainHeader.classList.add("h-[60px]");
    mainHeader.classList.remove("h-auto");
  });

  // Close search when clicking outside
  document.addEventListener("click", function (event) {
    if (!searchBar.contains(event.target) && event.target !== searchToggle) {
      searchBar.classList.add("hidden");
      searchBar.classList.remove("block");
      mainHeader.classList.add("h-[60px]");
      mainHeader.classList.remove("h-auto");
    }
  });

  // Stop propagation when clicking inside search bar
  searchBar.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

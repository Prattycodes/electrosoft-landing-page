
      AOS.init();

      // Mobile menu toggle
      const toggleBtn = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
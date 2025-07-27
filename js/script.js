function openPopup(type) {
  const popup = document.getElementById("infoPopup");
  const title = document.getElementById("popupTitle");
  const content = document.getElementById("popupContent");

  if (popupContents[type]) {
    title.textContent = popupContents[type].title;
    content.innerHTML = popupContents[type].content;
    popup.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closePopup() {
  document.getElementById("infoPopup").classList.add("hidden");
  document.body.style.overflow = "auto";
}

const popupContents = {
  AIPowered: {
    title: "Advanced Fully Automatic Transformer Test bench",
    content: `
      <div>
        <h4 class="text-lg md:text-xl font-semibold">Advanced Features</h4>
        <ul class="list-disc pl-5 space-y-2 mt-2 text-[#4C4C4C]">
          <li>AI-powered testing with intelligent X’mer Edge software</li>
          <li>Voice control for hands-free, intuitive operation</li>
          <li>43-inch interactive display for real-time visualization and control</li>
          <li>Optional motorized isolators for heat run test and HT capacitor bank switching</li>
          <li>Fully automatic CT-PT primary selection using pneumatic knife switches</li>
          <li>Optional Web Integration Module for remote test monitoring and live viewing</li>
          <li>Includes on-site installation, operator training</li>
          <li>Designed for error-free digital precision and 24/7 reliability</li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-lg md:text-xl font-semibold">Technical Specifications</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div>
            <p class="font-medium">Transformer Range:</p>
            <p class="text-[#4C4C4C]">100 KVA, 433V up to 750 MVA, 420 kV</p>
          </div>
          <div>
            <p class="font-medium">Compliance:</p>
            <p class="text-[#4C4C4C]">IEC 60076, IEEE C57.12</p>
          </div>
          <div>
            <p class="font-medium">Warranty:</p>
            <p class="text-[#4C4C4C]">18 Months</p>
          </div>
        </div>
      </div>
    `,
  },
};

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: false,
    mirror: true,
  });
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

  //Client carousel
  const carousel = document.querySelector(".animate-scroll");

  // Make sure the animation runs smoothly when reaching the end
  carousel.addEventListener("animationiteration", () => {
    // Reset position to avoid jump
    carousel.style.animation = "none";
    carousel.offsetHeight; // Trigger reflow
    carousel.style.animation = "";
  });

  const featureData = {
    ai: {
      title: "AI-Powered Advanced",
      features: [
        { label: "Transformer Range", value: "100 KVA - 750 MVA" },
        { label: "AI-Powered Testing", value: "✓" },
        { label: "Voice Control", value: "✓" },
        { label: "Interactive Display", value: "✓ (43 Inch)" },
        { label: "Manual Override Capability", value: "✓" },
        { label: "Fully Automatic Testing", value: "✓" },
        { label: "Pneumatic CT-PT Selection", value: "✓" },
        { label: "IEC/IEEE Compliance", value: "✓" },
        { label: "Remote Monitoring", value: "✓ (Optional)" },
        { label: "Warranty & Support", value: "18 Months" },
      ],
    },
    auto: {
      title: "Fully Automatic",
      features: [
        { label: "Transformer Range", value: "100 KVA - 750 MVA" },
        { label: "AI-Powered Testing", value: "✗" },
        { label: "Voice Control", value: "✗" },
        { label: "Interactive Display", value: "✓ (21 Inch)" },
        { label: "Manual Override Capability", value: "✓" },
        { label: "Fully Automatic Testing", value: "✓" },
        { label: "Pneumatic CT-PT Selection", value: "✓ (Optional)" },
        { label: "IEC/IEEE Compliance", value: "✓" },
        { label: "Remote Monitoring", value: "✓ (Optional)" },
        { label: "Warranty & Support", value: "18 Months" },
      ],
    },
    semi: {
      title: "Semi-Automatic",
      features: [
        { label: "Transformer Range", value: "100 KVA - 750 MVA" },
        { label: "AI-Powered Testing", value: "✗" },
        { label: "Voice Control", value: "✗" },
        { label: "Interactive Display", value: "✓ (43 Inch)" },
        { label: "Manual Override Capability", value: "✓" },
        { label: "Fully Automatic Testing", value: "✗" },
        { label: "Pneumatic CT-PT Selection", value: "✗" },
        { label: "IEC/IEEE Compliance", value: "✓" },
        { label: "Remote Monitoring", value: "✗" },
        { label: "Warranty & Support", value: "18 Months" },
      ],
    },
    manual: {
      title: "Conventional",
      features: [
        { label: "Transformer Range", value: "100 KVA - 750 MVA" },
        { label: "AI-Powered Testing", value: "✗" },
        { label: "Voice Control", value: "✗" },
        { label: "Interactive Display", value: "✓ (43 Inch)" },
        { label: "Manual Override Capability", value: "✓" },
        { label: "Fully Automatic Testing", value: "✗" },
        { label: "Pneumatic CT-PT Selection", value: "✗" },
        { label: "IEC/IEEE Compliance", value: "✓" },
        { label: "Remote Monitoring", value: "✗" },
        { label: "Warranty & Support", value: "18 Months" },
      ],
    },
  };

  const selector = document.getElementById("trolley-selector");
  const display = document.getElementById("mobile-trolley-info");

  function updateTrolleyInfo(key) {
    const data = featureData[key];
    display.innerHTML = `
        <h3 class="text-lg font-semibold">${data.title}</h3>
        <ul class="space-y-2">
          ${data.features
            .map(
              (f) => `
            <li class="flex justify-between border-b pb-2">
              <span>${f.label}</span>
              <span class="font-bold">${f.value}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      `;
  }

  // Initialize with default
  updateTrolleyInfo("ai");

  // Change on selection
  selector.addEventListener("change", (e) => {
    updateTrolleyInfo(e.target.value);
  });

  // Close when clicking outside content
  document.getElementById("infoPopup").addEventListener("click", function (e) {
    if (e.target === this) {
      closePopup();
    }
  });
});

//Smooth Scrolling
function smoothScrollTo(targetY, duration = 1200) {
  const startY = window.scrollY;
  const changeY = targetY - startY;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + changeY * easeInOutQuad(progress));
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(animateScroll);
}

// Scroll to top when logo is clicked
document.getElementById("site-logo").addEventListener("click", function () {
  smoothScrollTo(0);
});

// Scroll to footer when Contact Us is clicked
document.getElementById("contact-link").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Inside");
  const footer = document.getElementById("footer");
  if (footer) {
    smoothScrollTo(footer.getBoundingClientRect().top + window.scrollY, 1200);
  }
});

//Client Animation JS
const carousel = document.querySelector(".animate-scroll");

// Pause animation on any logo hover (existing code)
const clientLogos = document.querySelectorAll(".client-logo");
clientLogos.forEach((logo) => {
  logo.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
  });
  logo.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
  });
});

// Pause animation on touch drag, resume on end
let isTouching = false;

carousel.addEventListener("touchstart", () => {
  isTouching = true;
  carousel.style.animationPlayState = "paused";
});

carousel.addEventListener("touchmove", () => {
  if (!isTouching) return;
  carousel.style.animationPlayState = "paused";
});

carousel.addEventListener("touchend", () => {
  isTouching = false;
  carousel.style.animationPlayState = "running";
});

carousel.addEventListener("touchcancel", () => {
  isTouching = false;
  carousel.style.animationPlayState = "running";
});

// Interactive tabs functionality
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".client-tab");
  const panels = document.querySelectorAll(".client-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = this.getAttribute("data-client");

      // Remove active classes
      tabs.forEach((t) => {
        t.classList.remove("active", "bg-blue-600", "text-white");
        t.classList.add("bg-gray-100", "text-gray-600");
      });
      panels.forEach((p) => p.classList.remove("active"));

      // Add active classes
      this.classList.add("active", "bg-blue-600", "text-white");
      this.classList.remove("bg-gray-100", "text-gray-600");
      document.getElementById(target).classList.add("active");
    });
  });
});

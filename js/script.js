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
  SemiAutomatic: {
    title: "Semi-Automatic Transformer Test Bench",
    content: `
      <div>
        <h4 class="text-lg md:text-xl font-semibold">Advanced Features</h4>
        <ul class="list-disc pl-5 space-y-2 mt-2 text-[#4C4C4C]">
          <li>PLC and HMI-based intuitive control and real-time monitoring</li>
          <li>Perform all essential transformer tests with just three connections</li>
          <li>Conforms to IEC and IEEE international testing standards</li>
          <li>Downloadable test data from PLC for easy documentation</li>
          <li>Optional Report Generation Software for professional reporting</li>
          <li>Includes installation, commissioning, operator training, and 18-month warranty</li>
          <li>Designed for accuracy, repeatability, and scalable growth</li>
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
  Conventional: {
    title: "Conventional Transformer Test Bench",
    content: `
      <div>
        <h4 class="text-lg md:text-xl font-semibold">Advanced Features</h4>
        <ul class="list-disc pl-5 space-y-2 mt-2 text-[#4C4C4C]">
          <li>Manual testing system with joystick-controlled excitation</li>
          <li>Ergonomic layout with optimally mounted test instruments</li>
          <li>Performs all essential tests in accordance with IEC and IEEE standards</li>
          <li>* Ideal for low- to medium-volume production and R\&D environments
* Cost-effective solution with full operational control</li>
          <li>Includes installation, commissioning, operator training, and 18-month warranty</li>
          <li>Built for accuracy, reliability, and long-term durability</li>
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
  LowVoltage: {
    title: "Low Voltage Test Trolley",
    content: `
      <div>
        <h4 class="text-lg md:text-xl font-semibold">Advanced Features</h4>
        <ul class="list-disc pl-5 space-y-2 mt-2 text-[#4C4C4C]">
          <li>Mobile trolley for easy transport of low-voltage test instruments</li>
          <li>Seamlessly integrates with all Electrosoft transformer test systems</li>
          <li>Reduces setup time and cable clutter for faster operations</li>
          <li>Rugged industrial-grade construction for long-term durability</li>
          <li>Optimized layout and cable management for smooth daily use</li>
          <li>Ideal for multi-bay testing setups and frequent reconfigurations</li>
          <li>Enhances efficiency, flexibility, and safety in transformer testing</li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-lg md:text-xl font-semibold">Technical Specifications</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div>
            <p class="font-medium">Compatibility</p>
            <p class="text-[#4C4C4C]">All Electrosoft transformer test systems</p>
          </div>
          <div>
            <p class="font-medium">Construction:</p>
            <p class="text-[#4C4C4C]">Industrial-grade, rugged design</p>
          </div>
          <div>
            <p class="font-medium">Warranty:</p>
            <p class="text-[#4C4C4C]">18 Months</p>
          </div>
        </div>
      </div>
    `,
  },
  FullyAutomatic: {
    title: "Fully Automatic Transformer Test Bench",
    content: `
      <div>
        <h4 class="text-lg md:text-xl font-semibold">Advanced Features</h4>
        <ul class="list-disc pl-5 space-y-2 mt-2 text-[#4C4C4C]">
          <li>Fully automatic testing of all critical transformer parameters</li>
          <li>Minimal connection changes for faster test cycles</li>
          <li>Powered by intuitive and reliable X’mer Edge software</li>
          <li>Built-in automatic report generation</li>
          <li>Optional motorized isolators for heat run and HT capacitor bank switching</li>
          <li>Optional pneumatically operated CT-PT primary selection</li>
          <li>Optional Web Integration Module for live remote monitoring and visibility</li>
          <li>Includes installation, operator training, and 18-month warranty</li>
          <li>Engineered for maximum efficiency, accuracy, and long-term reliability</li>
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

  // Initialize with default
  updateTrolleyInfo("ai");

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

const modal = document.getElementById("clientModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const modalContents = {
  mahavitaran: `
    <div class="flex items-center mb-3">
      <div class="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
      <div class="font-bold text-lg text-blue-800">MAHAVITARAN-MSEDCL</div>
    </div>
    <div class="text-sm text-gray-700 leading-relaxed mb-3">
      <strong>Project:</strong> Fully Automatic Transformer Testing System
    </div>
    <div class="text-xs text-gray-600 space-y-1">
      <div>• <strong>Rating:</strong> Up to 1500 kVA / 33 kV</div>
      <div>• <strong>Features:</strong> Cutting-edge automation</div>
      <div>• <strong>Benefits:</strong> Unmatched precision & reliability</div>
    </div>
  `,
  nucon: `
    <div class="flex items-center mb-3">
      <div class="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
      <div class="font-bold text-lg text-green-800">NUCON</div>
    </div>
    <div class="text-sm text-gray-700 leading-relaxed mb-3">
      <strong>Project:</strong> Advanced Power Plant Control Systems
    </div>
    <div class="text-xs text-gray-600 space-y-1">
      <div>• <strong>Scope:</strong> Complete automation solutions</div>
      <div>• <strong>Technology:</strong> State-of-the-art control panels</div>
      <div>• <strong>Impact:</strong> Enhanced operational efficiency</div>
    </div>
  `,
  tata: `
    <div class="flex items-center mb-3">
      <div class="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
      <div class="font-bold text-lg text-purple-800">TATA POWER</div>
    </div>
    <div class="text-sm text-gray-700 leading-relaxed mb-3">
      <strong>Project:</strong> Smart Grid Infrastructure Solutions
    </div>
    <div class="text-xs text-gray-600 space-y-1">
      <div>• <strong>Implementation:</strong> Multi-site deployment</div>
      <div>• <strong>Technology:</strong> IoT-enabled monitoring systems</div>
      <div>• <strong>Result:</strong> Improved grid stability & efficiency</div>
    </div>
  `,
  crompton: `
    <div class="flex items-center mb-3">
      <div class="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
      <div class="font-bold text-lg text-orange-800">CROMPTON GREENS</div>
    </div>
    <div class="text-sm text-gray-700 leading-relaxed mb-3">
      <strong>Project:</strong> Automated Testing & Quality Control Systems
    </div>
    <div class="text-xs text-gray-600 space-y-1">
      <div>• <strong>Solution:</strong> Comprehensive testing equipment</div>
      <div>• <strong>Features:</strong> Real-time quality monitoring</div>
      <div>• <strong>Outcome:</strong> Enhanced product reliability</div>
    </div>
  `,
};

// Show modal on logo tap (only on mobile)
document.querySelectorAll(".client-logo").forEach((div) => {
  div.addEventListener("click", function (e) {
    if (window.innerWidth < 640) {
      // For mobile screens
      const clientKey = this.getAttribute("data-client");
      modalContent.innerHTML = modalContents[clientKey] || "";
      modal.classList.remove("hidden");
    }
  });
});

closeModal.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", function (e) {
  if (e.target === modal) modal.classList.add("hidden");
});

// Progress Bar
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scroll-container");
  const indicators = document.querySelectorAll(".progress-dot");
  const cards = document.querySelectorAll("[data-card]");

  if (!scrollContainer || indicators.length === 0 || cards.length === 0) {
    console.log("Elements not found");
    return;
  }

  function updateProgressBar() {
    const scrollLeft = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.clientWidth;

    // Calculate which card is most visible
    let activeIndex = 0;
    let maxVisibility = 0;

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();

      // Calculate how much of the card is visible
      const cardLeft = cardRect.left - containerRect.left;
      const cardRight = cardRect.right - containerRect.left;

      const visibleStart = Math.max(0, cardLeft);
      const visibleEnd = Math.min(containerWidth, cardRight);
      const visibleWidth = Math.max(0, visibleEnd - visibleStart);
      const visibility = visibleWidth / cardRect.width;

      if (visibility > maxVisibility) {
        maxVisibility = visibility;
        activeIndex = index;
      }
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === activeIndex) {
        indicator.classList.remove("bg-gray-300");
        indicator.classList.add("bg-black");
      } else {
        indicator.classList.remove("bg-black");
        indicator.classList.add("bg-gray-300");
      }
    });
  }

  // Listen for scroll events
  scrollContainer.addEventListener("scroll", updateProgressBar);

  // Initial call to set the correct state
  updateProgressBar();
});

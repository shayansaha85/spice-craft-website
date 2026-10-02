// main.js - Core functionality for Spice Kraft website
// Handles: Centralized business info, Loading screen, Navigation, Custom cursor, Hero parallax, Mobile action bar

// Centralized Restaurant Configuration
const restaurantConfig = {
  name: "Spice Kraft",
  location:
    "54/1/2A, Hazra Road, near HDFC Bank, Dover Terrace, Ballygunge, Kolkata, West Bengal 700019, India",
  phone: "+91 98312 23311",
  phoneClean: "+919831223311",
  rating: 4.5,
  reviewsCount: "8.9K+",
  openingHours: [
    { days: "Monday – Thursday", hours: "12:00 PM – 11:00 PM" },
    { days: "Friday – Saturday", hours: "12:00 PM – 11:30 PM" },
    { days: "Sunday", hours: "12:00 PM – 11:00 PM" },
  ],
};

// Render opening hours dynamically from configuration
function initOpeningHours() {
  const hoursList = document.querySelector(
    ".contact-hours-card ul, .contact-hours ul",
  );
  if (!hoursList || !restaurantConfig.openingHours) return;

  hoursList.innerHTML = restaurantConfig.openingHours
    .map(
      (item) => `
        <li class="hours-item">
            <span>${item.days}</span>
            <strong>${item.hours}</strong>
        </li>
    `,
    )
    .join("");
}

// Utility: throttle
function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn.apply(this, arguments);
      time = Date.now();
    }
  };
}

// Utility: debounce
function debounce(fn, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Loading screen
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  let isHidden = false;
  const hideLoader = () => {
    if (isHidden) return;
    isHidden = true;
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
      document.body.style.overflow = ""; // Restore scroll
    }, 600);
  };

  // Make sure loader shows for ~1.5s
  const startTime = Date.now();
  const minDelay = 1500;

  const triggerHide = () => {
    const elapsedTime = Date.now() - startTime;
    if (elapsedTime < minDelay) {
      setTimeout(hideLoader, minDelay - elapsedTime);
    } else {
      hideLoader();
    }
  };

  if (document.readyState === "complete") {
    triggerHide();
  } else {
    window.addEventListener("load", triggerHide);
  }

  // Safety fallback: Never keep visitor waiting longer than 2.2s
  setTimeout(hideLoader, 2200);
}

// Navigation
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

  // Scroll detection
  const handleScroll = throttle(() => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, 100);

  window.addEventListener("scroll", handleScroll, { passive: true });

  // Active link highlighting via IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Hamburger menu toggle
  if (hamburger && mobileMenu) {
    const toggleMenu = () => {
      const isActive = hamburger.classList.contains("active");
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", !isActive);
      document.body.style.overflow = isActive ? "" : "hidden";
    };

    hamburger.addEventListener("click", toggleMenu);

    // Close on link click
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  }
}

// Custom Cursor
function initCursor() {
  if (!window.matchMedia("(hover: hover)").matches) return;

  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");
  const text = document.querySelector(".cursor-text");

  if (!dot || !outline) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let outlineX = mouseX;
  let outlineY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Move dot instantly with translate(-50%, -50%)
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

    if (!outline.classList.contains("visible")) {
      outline.classList.add("visible");
      dot.classList.add("visible");
    }
  });

  window.addEventListener("mouseout", (e) => {
    if (!e.relatedTarget && !e.toElement) {
      outline.classList.remove("visible");
      dot.classList.remove("visible");
    }
  });

  window.addEventListener("mouseenter", () => {
    outline.classList.add("visible");
    dot.classList.add("visible");
  });

  const animateCursor = () => {
    const ease = 0.15;
    outlineX += (mouseX - outlineX) * ease;
    outlineY += (mouseY - outlineY) * ease;

    outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  };

  animateCursor();

  // Event delegation for cursor hover on any current or future interactive element
  document.addEventListener("mouseover", (e) => {
    const interactive = e.target.closest(
      ".btn, .nav-link, .nav-reserve-btn, .gallery-card, .gallery-item, .menu-category-btn, .hamburger, .cocktail-card, .cocktail-item, .dish-card, .dish-item, .menu-item, button, a",
    );
    if (interactive) {
      outline.classList.add("expanded");
      if (text) {
        if (
          interactive.closest(".gallery-card") ||
          interactive.closest(".gallery-item") ||
          interactive.closest(".dish-card") ||
          interactive.closest(".dish-item")
        ) {
          text.textContent = "VIEW";
        } else {
          text.textContent = "";
        }
      }
    }
  });

  document.addEventListener("mouseout", (e) => {
    const interactive = e.target.closest(
      ".btn, .nav-link, .nav-reserve-btn, .gallery-card, .gallery-item, .menu-category-btn, .hamburger, .cocktail-card, .cocktail-item, .dish-card, .dish-item, .menu-item, button, a",
    );
    if (interactive) {
      // Check if leaving to another child within the same interactive
      if (!interactive.contains(e.relatedTarget)) {
        outline.classList.remove("expanded");
        if (text) text.textContent = "";
      }
    }
  });
}

// Hero Parallax
function initHeroParallax() {
  if (!window.matchMedia("(hover: hover)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const hero = document.getElementById("hero");
  const heroBg = document.querySelector(".hero-bg");
  const heroContent = document.querySelector(".hero-content");

  if (!hero || !heroBg || !heroContent) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    targetX = (mouseX / rect.width) * 30; // Max 15px each way
    targetY = (mouseY / rect.height) * 30;
  });

  hero.addEventListener("mouseleave", () => {
    targetX = 0;
    targetY = 0;
  });

  const animateParallax = () => {
    const ease = 0.05;
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    heroBg.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1.05)`;
    heroContent.style.transform = `translate3d(${-currentX / 3}px, ${-currentY / 3}px, 0)`; // Max 5px opposite

    requestAnimationFrame(animateParallax);
  };

  animateParallax();
}

// Mobile Action Bar
function initMobileActionBar() {
  const actionBar = document.getElementById("mobile-action-bar");
  if (!actionBar) return;

  const handleScroll = throttle(() => {
    if (window.innerWidth <= 768) {
      if (window.scrollY > window.innerHeight) {
        actionBar.classList.add("visible");
      } else {
        actionBar.classList.remove("visible");
      }
    }
  }, 100);

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll, { passive: true });
}

// Smooth scroll
function initSmoothScroll() {
  document.documentElement.style.scrollBehavior = "smooth";

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Initial setup
  document.body.style.overflow = "hidden"; // Hide scroll until loader finishes

  initLoader();
  initNavigation();
  initOpeningHours();
  initCursor();
  initHeroParallax();
  initMobileActionBar();
  initSmoothScroll();
});

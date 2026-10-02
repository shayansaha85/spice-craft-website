// animations.js - Scroll reveal animations for Spice Kraft

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initParallaxScroll();
  initCounterAnimation();
});

function initScrollAnimations() {
  const revealElements = document.querySelectorAll("[data-reveal]");
  if (revealElements.length === 0) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  revealElements.forEach((el) => observer.observe(el));
}

function initParallaxScroll() {
  const parallaxElements = document.querySelectorAll("[data-speed]");
  if (parallaxElements.length === 0) return;

  const isDesktop = window.matchMedia("(hover: hover)").matches;
  if (!isDesktop) return;

  let ticking = false;

  function updateParallax() {
    const scrolled = window.scrollY;
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-speed")) || 0.5;
      const offset = scrolled * speed;
      el.style.transform = `translateY(${offset}px)`;
      el.style.willChange = "transform";
    });
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true },
  );
}

function initCounterAnimation() {
  const statValues = document.querySelectorAll(".stat-value, .stat-num");
  if (statValues.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observerInstance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  statValues.forEach((el) => observer.observe(el));
}

function animateCounter(element) {
  const dataTarget = element.getAttribute("data-target");
  const dataSuffix = element.getAttribute("data-suffix");

  let targetVal, suffix, isFloat;

  if (dataTarget) {
    targetVal = parseFloat(dataTarget);
    suffix = dataSuffix !== null ? dataSuffix : "";
    isFloat = dataTarget.includes(".");
  } else {
    const text = element.textContent.trim();
    const match = text.match(/^([\d.]+)(.*)$/);
    if (!match) return;
    targetVal = parseFloat(match[1]);
    suffix = match[2] || "";
    isFloat = match[1].includes(".");
  }

  if (isNaN(targetVal)) return;

  const duration = 2000;
  const startTime = performance.now();
  const startVal = 0;

  function updateCounter(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const easeProgress = 1 - Math.pow(1 - progress, 4);
    const currentVal = startVal + (targetVal - startVal) * easeProgress;

    if (isFloat) {
      element.textContent = currentVal.toFixed(1) + suffix;
    } else {
      element.textContent = Math.floor(currentVal) + suffix;
    }

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      if (isFloat) {
        element.textContent = targetVal.toFixed(1) + suffix;
      } else {
        element.textContent = targetVal + suffix;
      }
    }
  }

  requestAnimationFrame(updateCounter);
}

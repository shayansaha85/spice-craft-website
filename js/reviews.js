// reviews.js - Review slider for Spice Kraft
// Review content represents publicly available sentiments.
// Update this data when new verified reviews are available.

const reviewsData = [
  {
    text: "The flavours here are extraordinary. Every dish tells a story of passion and craftsmanship. A truly memorable dining experience in Kolkata.",
    author: "Google Review",
    rating: 5,
  },
  {
    text: "Incredible ambience paired with exceptional food. The cocktails are creative and the service is impeccable. Will definitely return.",
    author: "Google Review",
    rating: 5,
  },
  {
    text: "From the Mughlai classics to the Continental specials, everything we tried was outstanding. Perfect for a special evening out.",
    author: "Google Review",
    rating: 5,
  },
  {
    text: "One of the finest dining experiences in Ballygunge. The attention to detail in both food and presentation is remarkable.",
    author: "Google Review",
    rating: 5,
  },
  {
    text: "A gem of a restaurant. The seafood was fresh, the desserts divine, and the entire experience felt luxurious yet welcoming.",
    author: "Google Review",
    rating: 4,
  },
  {
    text: "Perfect place for family dinners and celebrations. The menu has something for everyone and the staff makes you feel right at home.",
    author: "Google Review",
    rating: 5,
  },
];

const reviewsConfig = {
  autoPlayInterval: 5000, // ms between auto-scroll
  rating: 4.5,
  totalReviews: "8.9K+",
  source: "Google Reviews",
};

let currentSlide = 0;
let slidesPerView = 1;
let totalSlides = 0;
let autoPlayTimer = null;
let sliderEl, dotsContainer, prevBtn, nextBtn;

document.addEventListener("DOMContentLoaded", () => {
  initReviews();
});

function initReviews() {
  sliderEl = document.getElementById("reviews-slider");
  dotsContainer = document.getElementById("reviews-dots");
  prevBtn = document.querySelector(".review-prev");
  nextBtn = document.querySelector(".review-next");

  if (!sliderEl) return;

  calculateSlidesPerView();
  renderReviews();
  renderDots();
  updateSliderPosition();
  startAutoPlay();

  if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      calculateSlidesPerView();
      renderReviews(); // Re-render to update flex basis
      renderDots();
      goToSlide(0);
    }, 250);
  });

  const reviewsSection = document.getElementById("reviews");
  if (reviewsSection) {
    reviewsSection.addEventListener("mouseenter", stopAutoPlay);
    reviewsSection.addEventListener("mouseleave", startAutoPlay);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  // Touch/Swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  sliderEl.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    },
    { passive: true },
  );

  sliderEl.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startAutoPlay();
    },
    { passive: true },
  );

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
      prevSlide();
    }
  }
}

function calculateSlidesPerView() {
  slidesPerView = window.innerWidth > 1024 ? 3 : 1;
  totalSlides = Math.ceil(reviewsData.length / slidesPerView);
}

function renderReviews() {
  sliderEl.innerHTML = "";

  reviewsData.forEach((review) => {
    const card = document.createElement("div");
    card.className = "review-card";
    if (slidesPerView === 1) {
      card.style.flex = "0 0 100%";
      card.style.margin = "0";
    } else {
      card.style.flex = `0 0 calc(${100 / slidesPerView}% - 24px)`;
      card.style.margin = "0 12px";
    }

    let starsStr = "";
    for (let i = 0; i < 5; i++) {
      starsStr += i < review.rating ? "★" : "☆";
    }

    card.innerHTML = `
            <div class="review-stars">${starsStr}</div>
            <p class="review-text">${review.text}</p>
            <span class="review-author">${review.author}</span>
        `;
    sliderEl.appendChild(card);
  });
}

function renderDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = "";

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.setAttribute("type", "button");
    dot.className = `reviews-dot ${i === 0 ? "active" : ""}`;
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function goToSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  currentSlide = index;
  updateSliderPosition();

  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll(".reviews-dot");
    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  resetAutoPlay();
}

function updateSliderPosition() {
  const translateValue = -(currentSlide * 100);
  sliderEl.style.transform = `translateX(${translateValue}%)`;
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function startAutoPlay() {
  if (!autoPlayTimer) {
    autoPlayTimer = setInterval(nextSlide, reviewsConfig.autoPlayInterval);
  }
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
}

function resetAutoPlay() {
  stopAutoPlay();
  startAutoPlay();
}

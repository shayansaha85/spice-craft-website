// gallery.js - Gallery and Lightbox for Spice Kraft

document.addEventListener("DOMContentLoaded", () => {
  initGallery();
});

let currentImageIndex = 0;
let galleryImages = [];

function initGallery() {
  const galleryItems = document.querySelectorAll(
    ".gallery-card, .gallery-item",
  );
  if (galleryItems.length === 0) return;

  galleryImages = [];
  galleryItems.forEach((item, index) => {
    const img = item.querySelector(".gallery-img, .gallery-image, img");
    if (img) {
      galleryImages.push(img.src);
      item.addEventListener("click", (e) => {
        e.preventDefault();
        openLightbox(index);
      });
    }
  });

  initLightbox();
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");
  const totalEl = document.getElementById("lightbox-total");

  if (!lightbox) return;

  if (totalEl) {
    totalEl.textContent = galleryImages.length;
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", () => navigateLightbox(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => navigateLightbox(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  lightbox.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  lightbox.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true },
  );

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      navigateLightbox(1);
    }
    if (touchEndX > touchStartX + 50) {
      navigateLightbox(-1);
    }
  }
}

function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-image");
  const currentEl = document.getElementById("lightbox-current");

  if (!lightbox || !lightboxImg) return;

  currentImageIndex = index;
  lightboxImg.src = galleryImages[currentImageIndex];
  lightboxImg.alt = `Gallery Image ${currentImageIndex + 1}`;
  lightboxImg.style.opacity = "1";

  if (currentEl) {
    currentEl.textContent = currentImageIndex + 1;
  }

  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-image");

  if (!lightbox) return;

  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  setTimeout(() => {
    if (lightboxImg && !lightbox.classList.contains("active")) {
      lightboxImg.src = "";
    }
  }, 400);
}

function navigateLightbox(direction) {
  const lightboxImg = document.getElementById("lightbox-image");
  const currentEl = document.getElementById("lightbox-current");

  if (!lightboxImg) return;

  currentImageIndex =
    (currentImageIndex + direction + galleryImages.length) %
    galleryImages.length;

  lightboxImg.style.opacity = "0";

  setTimeout(() => {
    lightboxImg.src = galleryImages[currentImageIndex];
    lightboxImg.alt = `Gallery Image ${currentImageIndex + 1}`;
    if (currentEl) {
      currentEl.textContent = currentImageIndex + 1;
    }

    lightboxImg.onload = () => {
      lightboxImg.style.opacity = "1";
    };
    if (lightboxImg.complete) {
      lightboxImg.style.opacity = "1";
    }
  }, 200);
}

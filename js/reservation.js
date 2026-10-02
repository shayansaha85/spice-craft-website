// reservation.js - Interactive Table Reservation Modal for Spice Kraft
// Handles: Modal open/close, Date/Time picker, Guest counter stepper, Seating choice, Form validation & Confirmation

document.addEventListener("DOMContentLoaded", () => {
  initReservationModal();
});

function initReservationModal() {
  const modal = document.getElementById("reservation-modal");
  if (!modal) return;

  const modalBackdrop = modal.querySelector(".modal-backdrop");
  const closeBtn = modal.querySelector(".modal-close");
  const form = document.getElementById("reservation-form");
  const confirmationScreen = document.getElementById(
    "reservation-confirmation",
  );
  const newBookingBtn = document.getElementById("new-booking-btn");

  // Guest stepper
  const guestMinusBtn = document.getElementById("guest-minus");
  const guestPlusBtn = document.getElementById("guest-plus");
  const guestCountEl = document.getElementById("guest-count");
  const guestInput = document.getElementById("guest-input");

  let guestCount = 2;
  const minGuests = 1;
  const maxGuests = 12;

  const updateGuestUI = () => {
    if (guestCountEl) guestCountEl.textContent = guestCount;
    if (guestInput) guestInput.value = guestCount;
    if (guestMinusBtn) guestMinusBtn.disabled = guestCount <= minGuests;
    if (guestPlusBtn) guestPlusBtn.disabled = guestCount >= maxGuests;
  };

  if (guestMinusBtn) {
    guestMinusBtn.addEventListener("click", () => {
      if (guestCount > minGuests) {
        guestCount--;
        updateGuestUI();
      }
    });
  }

  if (guestPlusBtn) {
    guestPlusBtn.addEventListener("click", () => {
      if (guestCount < maxGuests) {
        guestCount++;
        updateGuestUI();
      }
    });
  }

  // Set minimum date to today
  const dateInput = document.getElementById("reservation-date");
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Time slot buttons
  const timeSlots = modal.querySelectorAll(".time-slot-btn");
  const timeInput = document.getElementById("reservation-time");

  timeSlots.forEach((btn) => {
    btn.addEventListener("click", () => {
      timeSlots.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (timeInput) {
        timeInput.value =
          btn.getAttribute("data-time") || btn.textContent.trim();
      }
    });
  });

  // Seating preference buttons
  const seatingBtns = modal.querySelectorAll(".seating-option-btn");
  const seatingInput = document.getElementById("reservation-seating");

  seatingBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      seatingBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (seatingInput) {
        seatingInput.value =
          btn.getAttribute("data-seating") || btn.textContent.trim();
      }
    });
  });

  // Open Modal function
  window.openReservationModal = function (preferredTime) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Reset to form view
    if (form) {
      form.style.display = "block";
      form.reset();
    }
    if (confirmationScreen) confirmationScreen.style.display = "none";

    // Reset guest count
    guestCount = 2;
    updateGuestUI();

    // If a specific time was passed, highlight that time slot
    if (preferredTime && timeSlots.length) {
      timeSlots.forEach((btn) => {
        if (btn.getAttribute("data-time") === preferredTime) {
          btn.click();
        }
      });
    }

    // Focus first input for keyboard accessibility
    setTimeout(() => {
      const firstFocusable = modal.querySelector(
        "input, button:not([disabled])",
      );
      if (firstFocusable) firstFocusable.focus();
    }, 100);
  };

  // Close Modal function
  window.closeReservationModal = function () {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (closeBtn)
    closeBtn.addEventListener("click", window.closeReservationModal);
  if (modalBackdrop)
    modalBackdrop.addEventListener("click", window.closeReservationModal);

  // Escape key handling
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      window.closeReservationModal();
    }
  });

  // Bind all buttons with reservation triggers
  const triggerButtons = document.querySelectorAll(
    '.nav-reserve-btn, .btn-reserve, a[href="#reservation"], .mobile-reserve-trigger, .action-bar-reserve',
  );
  triggerButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const hamburger = document.querySelector(".hamburger");
      const mobileMenu = document.querySelector(".mobile-menu");
      if (hamburger && mobileMenu && mobileMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
      window.openReservationModal();
    });
  });

  // Handle Form Submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Extract form values
      const name = document.getElementById("guest-name")?.value || "Guest";
      const phone =
        document.getElementById("guest-phone")?.value || "+91 98312 23311";
      const date =
        document.getElementById("reservation-date")?.value || "Today";
      const time = timeInput?.value || "8:00 PM";
      const seating = seatingInput?.value || "Main Dining Room";
      const guests = guestInput?.value || guestCount;

      // Generate an elegant editorial booking reference ID
      const bookingId = "SK-" + Math.floor(100000 + Math.random() * 900000);

      // Populate confirmation details
      const confName = document.getElementById("conf-name");
      const confDetails = document.getElementById("conf-details");
      const confId = document.getElementById("conf-id");

      if (confName) confName.textContent = name;
      if (confId) confId.textContent = bookingId;
      if (confDetails) {
        confDetails.innerHTML = `
                    <div class="conf-item"><span class="conf-label">Date</span><span class="conf-val">${formatBookingDate(date)}</span></div>
                    <div class="conf-item"><span class="conf-label">Time</span><span class="conf-val">${time}</span></div>
                    <div class="conf-item"><span class="conf-label">Guests</span><span class="conf-val">${guests} ${guests == 1 ? "Guest" : "Guests"}</span></div>
                    <div class="conf-item"><span class="conf-label">Seating</span><span class="conf-val">${seating}</span></div>
                    <div class="conf-item"><span class="conf-label">Contact</span><span class="conf-val">${phone}</span></div>
                `;
      }

      // Switch view
      form.style.display = "none";
      if (confirmationScreen) confirmationScreen.style.display = "block";
    });
  }

  // New booking button
  if (newBookingBtn) {
    newBookingBtn.addEventListener("click", () => {
      if (form) form.style.display = "block";
      if (confirmationScreen) confirmationScreen.style.display = "none";
    });
  }
}

function formatBookingDate(dateStr) {
  if (!dateStr) return "Selected Date";
  try {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      const date = new Date(parts[0], parts[1] - 1, parts[2]);
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
    return dateStr;
  } catch {
    return dateStr;
  }
}

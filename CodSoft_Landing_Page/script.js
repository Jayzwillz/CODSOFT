let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
    currentSlide = index;
}

// Next & Previous Buttons
document.querySelector(".next-btn").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.querySelector(".prev-btn").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Dots Navigation
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        showSlide(i);
    });
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Initialize first slide
showSlide(currentSlide);

// Select all FAQ items
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        // Close all other answers before opening the current one
        faqItems.forEach((faq) => {
            if (faq !== item) {
                faq.classList.remove("open");
            }
        });

        // Toggle the selected FAQ
        item.classList.toggle("open");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    dropdownToggle.addEventListener("click", function (event) {
      event.preventDefault();
      dropdownMenu.classList.toggle("show");
    });
  
    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  });
  
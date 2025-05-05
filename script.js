// Show/hide button Scroll to Top
const toTopBtn = document.getElementById("toTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Toggle mobile menu
function toggleMobileMenu() {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("show");
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Setup event listeners
window.addEventListener("DOMContentLoaded", () => {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener("click", toggleMobileMenu);
  }

  const darkToggleBtn = document.querySelector(".dark-toggle");
  if (darkToggleBtn) {
    darkToggleBtn.addEventListener("click", toggleDarkMode);
  }
});

  // Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll("#main-nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("main-nav").classList.remove("show");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } // Elemen terlihat 10% sebelum memicu
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
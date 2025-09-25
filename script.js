window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("animated-motto").classList.add("visible");
  }, 500);
});

setTimeout(function () {
  document.getElementById("animated-about").classList.add("visible");
}, 800);

window.addEventListener("load", function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 300);
});

document.addEventListener("DOMContentLoaded", function () {
  const loadMoreBtns = document.querySelectorAll(".load-more-btn");

  loadMoreBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const grid = this.previousElementSibling;
      grid.classList.toggle("expanded");

      if (grid.classList.contains("expanded")) {
        this.innerHTML = "Show Less";
      } else {
        this.innerHTML = "Load More Designs";
        // Scroll to the section gently
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

// Hamburger Menu with proper closing
const hamburger = document.getElementById("hamburger");
let mobileMenu = null;

function createMobileMenu() {
  if (mobileMenu) return;

  mobileMenu = document.createElement("div");
  mobileMenu.className = "mobile-menu";
  mobileMenu.innerHTML = `
        <ul class="nav-links">
            <li><a href="#top">Home</a></li>
            <li><a href="#design">Designs</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About Us</a></li>
        </ul>
        <a class="cta" href="#foot"><button>Contact</button></a>
    `;
  document.body.appendChild(mobileMenu);

  // Close menu when clicking links
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function (e) {
      closeMobileMenu();
    });
  });
}

function closeMobileMenu() {
  hamburger.classList.remove("active");
  if (mobileMenu) {
    mobileMenu.classList.remove("active");
  }
}

hamburger.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent event bubbling

  createMobileMenu();

  const isActive = hamburger.classList.contains("active");

  if (isActive) {
    closeMobileMenu();
  } else {
    hamburger.classList.add("active");
    mobileMenu.classList.add("active");
  }
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".hamburger") && !e.target.closest(".mobile-menu")) {
    closeMobileMenu();
  }
});

// Close menu on escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMobileMenu();
  }
});

// Close menu on window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

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

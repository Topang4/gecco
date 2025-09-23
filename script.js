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

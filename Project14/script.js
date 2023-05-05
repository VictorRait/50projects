const nav = document.getElementById("nav");
const btn = document.getElementById("toggle");

btn.addEventListener("click", function () {
  nav.classList.toggle("active");
});

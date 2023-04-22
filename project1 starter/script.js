const panels = document.querySelectorAll(".panel");

document.addEventListener("click", function (e) {
  const panel = e.target.closest(".panel");
  if (!panel) return;
  panels.forEach((p) => p.classList.remove("active"));
  panel.classList.add("active");
});

const toggleBtn = document.querySelectorAll(".faq-toggle");
const faqs = document.querySelectorAll(".faq");
toggleBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const target = e.target.closest(".faq");
    target.classList.toggle("active");
  })
);

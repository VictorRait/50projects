const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
let active = document.querySelector(".active");

const bodyBackgroundImg = function () {
  body.style.backgroundImage = `${active.style.backgroundImage}`;
};
bodyBackgroundImg();

let activeSlide = 0;

const showSlide = function () {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
  active = document.querySelector(".active");
  bodyBackgroundImg();
};

leftBtn.addEventListener("click", function () {
  activeSlide--;
  if (activeSlide < 0) activeSlide = slides.length - 1;
  showSlide();
});
rightBtn.addEventListener("click", function () {
  activeSlide++;
  if (activeSlide > slides.length - 1) activeSlide = 0;
  showSlide();
});

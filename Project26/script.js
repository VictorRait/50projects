const sliderContainer = document.querySelector(".slider-container");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const rightSlidesLength = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(rightSlidesLength - 1) * 100}%`;

const activeSlide = function () {
  leftSlide.style.top = `-${(rightSlidesLength - activeSlideIndex - 1) * 100}%`;
  rightSlide.style.top = `${(0 - activeSlideIndex) * 100}%`;
};

const addSlide = function (direction) {
  activeSlideIndex++;
  if (activeSlideIndex > rightSlidesLength - 1) activeSlideIndex = 0;
  console.log(activeSlideIndex);
  activeSlide();
};
const minSlide = function (direction) {
  activeSlideIndex--;
  if (activeSlideIndex < 0) activeSlideIndex = rightSlidesLength - 1;
  activeSlide();
};

upButton.addEventListener("click", addSlide);
downButton.addEventListener("click", minSlide);

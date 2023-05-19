const imgSlides = document.querySelectorAll(".image-container img");
const imgContainer = document.querySelector(".image-container");
const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");

let idx = 0;
const changeImage = function () {
  if (idx > imgSlides.length - 1) {
    idx = 0;
  }
  if (idx < 0) {
    idx = imgSlides.length - 1;
  }
  imgContainer.style.transform = `translateX(${-idx * 100}%)`;
};
const run = function () {
  idx++;
  changeImage();
};
let interval = setInterval(run, 2000);

const resetInterval = function () {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};
nextBtn.addEventListener("click", function () {
  idx++;
  changeImage();
  resetInterval();
});
prevBtn.addEventListener("click", function () {
  idx--;
  changeImage();
  resetInterval();
});

// const SLIDE_TIME = 1; //seconds

// let currentSlide = 0;
// const moveSlide = function () {
//   imgContainer.style.transform = `translateX(${currentSlide * 100}%)`;
// };
// const resetSlide = function () {
//   if (currentSlide * -1 >= imgSlides.length - 1) {
//     currentSlide = 1;
//   }
// };
// const nextSlide = function () {
//   currentSlide--;

//   moveSlide();
//   resetSlide();
// };
// let pauseInterval = false;
// const carousel = setInterval(() => {
//   if (pauseInterval === false) nextSlide();
// }, SLIDE_TIME * 1000);

// prevBtn.addEventListener("click", () => {
//   pauseInterval = true;
//   setTimeout(() => {
//     pauseInterval = false;
//   }, 5000);
//   currentSlide++;
//   console.log(currentSlide);
//   if (currentSlide > 0) {
//     currentSlide = 1;
//     setTimeout(() => {
//       nextSlide();
//     }, 500);
//   }
//   moveSlide();
// });

// nextBtn.addEventListener("click", function () {
//   nextSlide();
// });

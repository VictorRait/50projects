"use strict";

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const progress = document.querySelector("#progress");

const circle = document.querySelectorAll(".circle");

let currentActive = 1;
const update = function () {
  circle.forEach((circ, i) => {
    const indx = i + 1;
    if (indx <= currentActive) {
      circ.classList.add("active");
      console.log(indx);
    }
    if (indx > currentActive) {
      circ.classList.remove("active");
      console.log(indx);
    }
  });
  const active = document.querySelectorAll(".active");
  // console.log(active.length, circle.length);
  progress.style.width = ((active.length - 1) / (circle.length - 1)) * 100 + "%";
};
next.addEventListener("click", function () {
  currentActive++;

  if (currentActive > circle.length) {
    currentActive = circle.length;
  }

  if (currentActive > 1) {
    prev.disabled = false;
  }
  if (currentActive === circle.length) next.disabled = true;

  update();
});
prev.addEventListener("click", function () {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  if (currentActive === 1) {
    prev.disabled = true;
  }
  if (currentActive !== circle.length) next.disabled = false;
  update();
});

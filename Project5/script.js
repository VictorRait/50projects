const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const blurring = function () {
  load++;

  loadText.innerText = `${load}%`;

  if (load > 99) clearInterval(int);
  loadText.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

let int = setInterval(blurring, 30);

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

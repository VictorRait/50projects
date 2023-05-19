const container = document.querySelector(".container");
const colors = ["#FD8A8A", "#F1F7B5", "#A8D1D1", "#9EA1D4"];
const squares = 500;

const getRandomColor = function () {
  return colors[Math.floor(Math.random() * colors.length)];
};

const setColor = function (element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};
const removeColor = function (element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `none`;
};

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", function () {
    setColor(square);
  });

  square.addEventListener("mouseleave", function () {
    removeColor(square);
  });

  container.appendChild(square);
}

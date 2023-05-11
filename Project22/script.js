const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clear = document.getElementById("clear");
const colorBtn = document.getElementById("color");
const upSizeBtn = document.querySelector(".increase");
const downSizeBtn = document.querySelector(".decrease");
const sizeNum = document.getElementById("size");
const sizeInput = document.getElementById("size-input");
let size = 20;
let isPressed = false;
let color = "black";
let x, y;

///Functions
const drawCircle = function (x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = function (x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};
const updateSizeNum = function () {
  sizeNum.innerText = size;
};
const enterSizeNum = function () {
  size = sizeInput.value;
  sizeNum.classList.remove("hidden");
  sizeInput.classList.add("hidden");
  sizeInput.blur();
  updateSizeNum();
};

/////////////////Event listener
canvas.addEventListener("mousedown", function (e) {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", function (e) {
  isPressed = false;
  x = y = undefined;
});
canvas.addEventListener("mousemove", function (e) {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

clear.addEventListener("click", function () {
  ctx.reset();
});
colorBtn.addEventListener("change", function () {
  color = colorBtn.value;
});
upSizeBtn.addEventListener("click", function () {
  size++;
  updateSizeNum();
});
downSizeBtn.addEventListener("click", function () {
  size--;
  updateSizeNum();
});
sizeNum.addEventListener("click", function () {
  sizeNum.classList.toggle("hidden");
  sizeInput.classList.toggle("hidden");
  sizeInput.focus();
});

sizeInput.addEventListener("keydown", function (e) {
  if (e.key !== "Enter") return;
  else {
    enterSizeNum();
  }
});
sizeInput.addEventListener("focusout", function (e) {
  enterSizeNum();
});

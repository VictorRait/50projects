const button = document.querySelector("#button");
const toasts = document.getElementById("toasts");

const messages = ["Success", "Invalid", "Random", "Unable to connect"];

const fadeout = function (el) {
  el.classList.add("fadeout");
  setTimeout(() => {
    el.remove();
  }, 3000);
};

const getRandomNotif = function () {
  const randomNum = Math.floor(Math.random() * messages.length);
  const message = messages[randomNum];

  //////////////////////// Show and remove notification
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.innerText = message;
  toasts.appendChild(notification);

  ///// color code message
  if (message === "Random") {
    notification.classList.add("purple");
  }
  if (message === "Success") {
    notification.classList.add("green");
  }
  if (message === "Unable to connect") {
    notification.classList.add("grey");
  }
  if (message === "Invalid") {
    notification.classList.add("red");
  }

  setTimeout(() => {
    notification.classList.add("visible");
  }, 50);
  setTimeout(() => {
    fadeout(notification);
  }, 2500);
};

button.addEventListener("click", getRandomNotif);

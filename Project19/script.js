const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");
const toggleText = document.querySelectorAll(".drop-text");
const html = document.documentElement;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", " Thursday", "Friday", "Saturday"];
// prettier-ignore
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep",'Oct','Nov','Dec',];

toggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  toggleText.forEach((text) => text.classList.toggle("active"));
});
const scale = function (number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
const setTime = function () {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursforClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = `${hours >= 12 ? "PM" : "AM"}`;

  //prettier-ignore
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursforClock, 0, 11, 0, 360)}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
  // console.log(date, day, month, time);
  timeEl.innerHTML = `${hoursforClock}:${minutes <= 10 ? `0${minutes}` : minutes} ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
};
setInterval(setTime, 1000);
// setTime();

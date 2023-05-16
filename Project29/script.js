const loveMe = document.querySelector(".loveMe");
const times = document.querySelector(".times");
let timesHeart = 0;
let clickTime = 0;

const createHeart = function (e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const xInside = e.target.offsetLeft;
  const yInside = e.target.offsetTop;

  console.log(x, y, xInside, yInside);

  heart.style.left = `${x - xInside}px`;
  heart.style.top = `${y - yInside}px`;
  loveMe.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 1000);
};
const updateTimesHeart = function () {
  times.innerText = timesHeart;
};

loveMe.addEventListener("click", function (e) {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      timesHeart++;
      updateTimesHeart();
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

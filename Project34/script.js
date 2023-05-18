const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replayBtn = document.getElementById("replay");

const runAnimation = function () {
  nums.forEach((num, i) => {
    const nextToLast = nums.length - 1;

    num.addEventListener("animationend", function (e) {
      if (e.animationName === "goIn" && i !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      }

      if (e.animationName === "goOut") {
        nums[i + 1].classList.remove("out");
        nums[i + 1].classList.add("in");
      }
      console.log(i);
      if (i === nums.length - 1) {
        num.classList.add("out");
        counter.classList.toggle("hide");
        finalMessage.classList.toggle("show");
      }
    });
  });
};

runAnimation();

replayBtn.addEventListener("click", function () {
  counter.classList.toggle("hide");
  finalMessage.classList.toggle("show");
  nums[nums.length - 1].classList.remove("in");
  // nums[nums.length - 1].classList.add("out");
  nums[0].classList.add("in");
  nums[0].classList.remove("out");
});

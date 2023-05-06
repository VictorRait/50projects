const cupSmall = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#liters");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");

const bigCup = document.querySelector(".cup");

const updateBigCup = function () {
  const fullCups = document.querySelectorAll(".full");
  const totalCups = cupSmall.length;

  if (!fullCups.length) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups.length / totalCups) * bigCup.clientHeight}px`;
    percentage.innerText = `${(fullCups.length / totalCups) * 100}%`;
    console.log(
      fullCups.length,
      totalCups,
      `${(fullCups.length / totalCups) * bigCup.clientHeight}px`
    );
  }
  if (fullCups.length === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    remained.style.height = "";
    liters.innerText = `${2 - (250 * fullCups.length) / 1000}L`;
  }
};

updateBigCup();

const highlightCups = function (idx) {
  if (
    (cupSmall[idx].classList.contains("full") &&
      !cupSmall[idx].nextElementSibling?.classList.contains("full")) ||
    cupSmall[idx] === cupSmall.length - 1
  ) {
    idx--;
  }

  cupSmall.forEach((cup, i) => {
    if (i <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
};

cupSmall.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

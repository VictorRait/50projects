const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");
let clicked = [];
toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    const target = e.target;

    if (!clicked.includes(target)) {
      clicked.push(target);
    } else {
      const removeTarget = clicked.indexOf(target);
      clicked.splice(removeTarget, 1);
    }
    if (clicked.length >= toggles.length) {
      clicked.shift();
    }

    //////// toggles checked in clicked array
    toggles.forEach((toggle) => {
      if (!clicked.includes(toggle)) {
        toggle.checked = false;
      }
    });
  });
});

const counter = document.querySelectorAll(".counter");

counter.forEach((count) => {
  count.innerText = 0;

  const updatecounter = () => {
    const target = count.getAttribute("data-target");

    let c = +count.innerText;

    const increment = target / 200;
    if (c < target) {
      count.innerText = Math.ceil(c + increment);

      setTimeout(updatecounter, 1);
    } else {
      count.innerText = target;
    }
  };
  updatecounter();
});

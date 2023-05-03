const tagsEl = document.querySelector(".tags");
const textarea = document.getElementById("textarea");

const createTags = function (value) {
  const tags = value
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};
const pickrandomTag = function () {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};
const highlightTag = function (tag) {
  tag.classList.add("highlight");
};
const unhighlightTag = function (tag) {
  tag.classList.remove("highlight");
};

const randomSelect = function () {
  const times = 30;
  const pick = setInterval(() => {
    const randomTag = pickrandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(pick);

    setTimeout(() => {
      const randomTag = pickrandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

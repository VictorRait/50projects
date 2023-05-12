const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile_img");
const nameUser = document.getElementById("name");
const date = document.getElementById("date");
const header = document.getElementById("header");
const loadingGradient = document.querySelectorAll(".animated-bg");

const clearLoading = function () {
  loadingGradient.forEach((load) => {
    load.classList.toggle("clearLoad");
  });
};
const loadImg = function (parent, src) {
  const html = `<img src=${src} />`;
  parent.insertAdjacentHTML("beforeend", html);
};
const loadText = function (parent, txt) {
  parent.innerText = `${txt}`;
};

//////////////////////////////////////////////////
window.addEventListener("load", function () {
  setTimeout(() => {
    loadImg(
      header,
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    );
    loadImg(profileImg, "https://randomuser.me/api/portraits/men/45.jpg");
    loadText(title, "Lorem ipsum dolor sit amet. ");
    loadText(
      excerpt,
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, commodi. "
    );
    loadText(date, "Oct. 8, 2020");
    loadText(nameUser, "John Doe ");
    clearLoading();
  }, 1000);
});

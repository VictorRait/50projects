const jokeEl = document.querySelector(".joke");
const jokeBtn = document.querySelector(".jokeBtn");

// const generateJoke = function () {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => (jokeEl.innerHTML = data.joke));
// };
const generateJoke = async function () {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
};
generateJoke();

jokeBtn.addEventListener("click", generateJoke);

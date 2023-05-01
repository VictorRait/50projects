const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.querySelector(".buttons");

const stopSong = function () {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
};

sounds.forEach((sound) => {
  const song = document.getElementById(sound);
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  buttons.appendChild(btn);

  //   play sounds

  btn.addEventListener("click", function () {
    stopSong();
    song.play();
  });
});

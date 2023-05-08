const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
const form = document.getElementById("form");
const main = document.querySelector("#main");
const search = document.getElementById("search");

const showMovies = function (data) {
  main.innerHTML = "";
  const movies = data.results;
  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    const html = `
    <img src="${IMG_URL + poster_path}" alt="" />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${
        vote_average >= 8 ? "green" : vote_average >= 5 ? "orange" : "red"
      }">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
`;
    movieEl.innerHTML = html;
    main.appendChild(movieEl);
  });
};

//   Get initial movies
const getMovies = async function (url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data);
  console.log(data);
};
getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});

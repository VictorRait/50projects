const poke_container = document.querySelector(".poke-container");
const pokemon_count = 12;
const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const getPokemon = async function (id) {
  const res = await fetch(`${API_URL}${id}`);
  const data = await res.json();
  console.log(data);
  renderPokemons(data);
};

const fetchPokemons = async function () {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const renderPokemons = function (data) {
  const type = colors[data.types[0].type.name];
  const name = data.name[0].toUpperCase() + data.name.slice(1);
  const html = `
  <div class="pokemon" style="background-color: ${type}">
  <div class="img-container">
    <img
      src="${data.sprites.front_default}"
      alt=""
    />
  </div>
  <div class="info">
    <span class="number">#${data.id.toString().padStart(3, "0")}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${data.types[0].type.name}</span></small>
  </div>
</div>`;
  poke_container.insertAdjacentHTML("beforeend", html);
};
fetchPokemons();

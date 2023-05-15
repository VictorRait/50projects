const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const createUserCard = function (user) {
  const cardHTML = `
  <div class="card">
  <div>
    <img src="${user.avatar_url}" alt="${user.name}" class="avatar" />
  </div>

  <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul>
      <li>${user.followers} <strong>Followers</strong></li>
      <li>${user.following} <strong>Following</strong></li>
      <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>
    <div id="repos">
 
    </div>
  </div>
</div>`;
  main.innerHTML = cardHTML;
};

const createErrorCard = function (msg) {
  const cardHTML = `
  <div class="card"> 
  <h1>${msg}</h1>
  </div>
  `;
  main.innerHTML = cardHTML;
};

const addRepostoCard = function (data) {
  const repos = document.getElementById("repos");
  for (let index = 0; index < 9; index++) {
    const html = `
	   <a class='repos' href="${data[index].url}">${data[index].name}</a>
	  `;
    repos.insertAdjacentHTML("beforeend", html);
  }
};

////////////// get data
const getRepos = async function (username) {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");
    console.log(data);
    addRepostoCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
};

const getUser = async function (username) {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) createErrorCard("No profile with this username");
  }
};

///////////// event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = search.value;

  if (!user) return;

  getUser(user);
  search.value = "";
});

const form = document.querySelector('form');
const searchBtn = document.querySelector('#search-btn');
const input = document.querySelector('#pokemon-name');
const pokemonStats = document.querySelector('#pokemon-stats');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const pokemonName = input.value.toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
      pokemonStats.innerHTML = '';
      const name = document.createElement('h2');
      name.textContent = data.name.toUpperCase();
      pokemonStats.appendChild(name);
      const img = document.createElement('img');
      img.src = data.sprites.front_default;
      pokemonStats.appendChild(img);
      const stats = document.createElement('div');
      const id = document.createElement('p');
      id.textContent = `#${data.id}`;
      pokemonStats.appendChild(id);
      const types = document.createElement('div');
      types.classList.add('types');
      data.types.forEach(type => {
        const typeContainer = document.createElement('div');
        typeContainer.classList.add('type');
        const typeName = document.createElement('span');
        typeName.classList.add('type-name');
        typeName.textContent = type.type.name;
        typeContainer.appendChild(typeName);
        types.appendChild(typeContainer);
      });
      pokemonStats.appendChild(types);
      stats.classList.add('stats');
      data.stats.forEach(stat => {
        const statContainer = document.createElement('div');
        statContainer.classList.add('stat');
        const statName = document.createElement('span');
        statName.classList.add('stat-name');
        statName.textContent = stat.stat.name;
        const statValue = document.createElement('span');
        statValue.classList.add('stat-value');
        statValue.textContent = stat.base_stat;
        statContainer.appendChild(statName);
        statContainer.appendChild(statValue);
        stats.appendChild(statContainer);
      });
      pokemonStats.appendChild(stats);
    })
    .catch(error => {
      pokemonStats.innerHTML = `<p>${error}</p>`;
    });
});

// JavaScript code for share on linkedin
function shareOnLinkedIn() {
  var url = "https://asthanaji05.github.io/PokeAPI/"; // Replace with your URL
  var title = "Check Out The Pokedex Website I found"; // Replace with your title
  var summary = "https://asthanaji05.github.io/PokeAPI/"; // Replace with your summary
  var source = "https://github.com/Asthanaji05"; // Replace with your source
  var linkedinUrl = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title) + "&summary=" + encodeURIComponent(summary) + "&source=" + encodeURIComponent(source);
  window.open(linkedinUrl);
}

// JavaScript code for share on  whatsapp
function shareLink() {
  var url = "https://asthanaji05.github.io/PokeAPI/"; // Replace with your URL
  var message = "Check out this link: " + url;
  var whatsappUrl = "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(whatsappUrl);
}


// JavaScript code for share on koo
function shareOnKoo() {
  var url = "https://asthanaji05.github.io/PokeAPI/"; // Replace with your URL
  var kooUrl = "https://www.kooapp.com/create-post?text=" + encodeURIComponent(url);
  window.open(kooUrl);
}

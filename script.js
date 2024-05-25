const container = document.querySelector(".container");

async function pokemons(num) {
  let number;
  for (i = 1; i <= num; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    const pokemon = await response.json();
    if (i < 10) {
      number = "00" + i;
    } else if (i < 100) {
      number = "0" + i;
    } else {
      number = i;
    }
    // console.log(number);
    // console.log(pokemon);
    // console.log(pokemon.name);
    // console.log(pokemon.sprites.front_shiny);
    // console.log(pokemon.types[0].type.name);
    const type = pokemon.types[0].type.name;
    const card = document.createElement("div");
    card.className = `card ${type}`;
    card.innerHTML = `<div class="image">
  <img src="${pokemon.sprites.front_shiny}" alt="" />
</div>
<div class="number">#${number}</div>
<div class="name">${pokemon.name}</div>
<div class="type">Type: ${type}</div>`;
    container.appendChild(card);
  }
}

pokemons(200);

const fetch = require('node-fetch');

const getPokemon = () => {
  const result = fetch('https://pokeapi.co/api/v2/pokemon/448')
    .then((response) => response.json())
    .then((pokemon) => console.log(pokemon.name));
  return result;
};

getPokemon();
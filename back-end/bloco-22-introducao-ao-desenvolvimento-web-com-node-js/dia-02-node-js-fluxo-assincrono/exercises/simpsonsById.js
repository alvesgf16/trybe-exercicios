const fs = require('fs').promises;

async function simpsonsById(charId) {
  const response = await fs.readFile('./simpsons.json', 'utf8');
  const data = JSON.parse(response);
  return new Promise((resolve, reject) => {
    const character = data.find(({ id }) => charId === id);
    if (!character) return reject('id não encontrado');
    resolve(character);
  })
}

simpsonsById('11')
  .then(({ name }) => console.log(name))
  .catch((e) => console.log(e));

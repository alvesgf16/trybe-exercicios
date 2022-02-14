const fs = require('fs').promises;

async function simpsonsWithId() {
  const response = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(response);
  data.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}

simpsonsWithId();
const fs = require('fs').promises;

async function removeAnnoyingCharacters() {
  const response = await fs.readFile('./simpsons.json', 'utf8');
  const data = JSON.parse(response);
  const annoyingCharsIds = ['6', '10']
  const niceCharacters = data.filter(({ id }) => !annoyingCharsIds.includes(id));
  fs.writeFile('./simpsons.json', JSON.stringify(niceCharacters));
}

removeAnnoyingCharacters();
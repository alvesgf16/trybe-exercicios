const fs = require('fs').promises;

async function getCharacters(file) {
  const response = await fs.readFile(file, 'utf8');
  const data = JSON.parse(response);
  return data;
}

async function replaceNelson() {
  const simpsonsCharacters = await getCharacters('./simpsons.json');
  const simpsonFamily = await getCharacters('./simpsonFamily.json');
  const maggie = simpsonsCharacters.find(({ name }) => name === 'Maggie Simpson');
  const correctSimpsonFamily = [
    ...simpsonFamily.filter(({ name }) => name !== 'Nelson Muntz'),
    maggie
  ];
  fs.writeFile('./simpsonFamily.json', JSON.stringify(correctSimpsonFamily));
}

replaceNelson();
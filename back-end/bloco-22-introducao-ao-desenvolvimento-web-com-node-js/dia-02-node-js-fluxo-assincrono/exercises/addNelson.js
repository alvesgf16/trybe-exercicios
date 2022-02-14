const fs = require('fs').promises;

async function getCharacters(file) {
  const response = await fs.readFile(file, 'utf8');
  const data = JSON.parse(response);
  return data;
}

async function addNelson() {
  const simpsonsCharacters = await getCharacters('./simpsons.json');
  const simpsonFamily = await getCharacters('./simpsonFamily.json');
  const nelson = simpsonsCharacters.find(({ name }) => name === 'Nelson Muntz');
  const simpsonFamilyWithNelson = [...simpsonFamily, nelson];
  fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamilyWithNelson));
}

addNelson();
const fs = require('fs').promises;

async function getSimpsonFamily() {
  const response = await fs.readFile('./simpsons.json', 'utf8');
  const data = JSON.parse(response);
  const simpsonFamilyIds = ['1', '2', '3', '4']
  const simpsonFamily = data.filter(({ id }) => simpsonFamilyIds.includes(id));
  fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
}

getSimpsonFamily();
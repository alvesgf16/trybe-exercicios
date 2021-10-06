function techList(techList, name) {
  return techList.length === 0 ? 'Vazio!' : techList.sort().map((tech) => ({ tech, name }));
}

module.exports = techList;
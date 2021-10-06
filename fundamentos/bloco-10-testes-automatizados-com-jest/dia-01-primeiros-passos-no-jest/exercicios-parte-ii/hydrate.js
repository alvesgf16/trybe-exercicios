function hydrate(string) {
  const drinksQuantities = string.match(/\d+/g);
  const waterCupsQuantity = drinksQuantities.reduce((sum, cur) => sum + parseInt(cur), 0);

  return waterCupsQuantity > 1 ? `${waterCupsQuantity} copos de água` : `${waterCupsQuantity} copo de água`;
}

module.exports = hydrate;
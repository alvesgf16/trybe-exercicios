const cost = 10;
const price = 20;
const taxPercentage = 20;
const quantity = 1000;
let profit;

if (cost < 0 || price < 0) {
  profit = 'Não existem preços negativos!';
} else {
  profit = quantity * (price - cost * (1 + taxPercentage / 100));
}

console.log(profit);
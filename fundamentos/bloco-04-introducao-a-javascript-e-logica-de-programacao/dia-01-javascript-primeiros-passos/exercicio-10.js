let cost = 10;
let price = 20;
let taxPercentage = 20;
let quantity = 1000;
let profit;

if (cost < 0 || price < 0) {
    profit = "Não existem preços negativos!"
} else {
    profit = quantity * (price - cost * (1 + taxPercentage / 100));
}

console.log(profit);
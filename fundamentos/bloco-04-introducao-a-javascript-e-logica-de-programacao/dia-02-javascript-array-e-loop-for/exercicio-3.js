let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 3: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let soma = 0;

for(let number of numbers) {
    soma += number;
}

let mediaAritmetica = soma / numbers.length;

console.log(mediaAritmetica);
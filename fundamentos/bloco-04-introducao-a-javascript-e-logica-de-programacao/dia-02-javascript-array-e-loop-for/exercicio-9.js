// Exercício 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
const numbers = [];

for (let number = 1; number <= 25; number += 1) {
  numbers.push(number);
}

for (let index = 0; index < numbers.length; index += 1) {
  numbers[index] /= 2;
}

console.log(numbers);
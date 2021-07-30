// Exercício 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let numbers = [];

for(number = 1; number <= 25; number += 1) {
    numbers.push(number);
}

for(index = 0; index < numbers.length; index += 1) {
    numbers[index] /= 2;
}

console.log(numbers);
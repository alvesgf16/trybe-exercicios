let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 7: Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorNumero = numbers[0];

for (index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
}

console.log(menorNumero)
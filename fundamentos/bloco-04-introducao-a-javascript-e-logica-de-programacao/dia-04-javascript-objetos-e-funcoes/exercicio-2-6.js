// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function sumUntilNumber(finalNumber) {
  let sum = 0;
  for (let number = 0; number <= finalNumber; number += 1) {
    sum += number;
  }

  return console.log(sum);
}

sumUntilNumber(10);
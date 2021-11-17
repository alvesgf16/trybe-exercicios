// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function returnBiggestIndex(array) {
  let biggestNumber = array[0];
  for (const number of array) {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }

  return console.log(array.indexOf(biggestNumber));
}

returnBiggestIndex([2, 3, 6, 7, 10, 1]);

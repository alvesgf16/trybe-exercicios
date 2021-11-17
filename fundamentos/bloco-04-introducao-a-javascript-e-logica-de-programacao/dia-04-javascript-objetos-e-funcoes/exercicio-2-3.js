// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function returnSmallestIndex(array) {
  let smallestNumber = array[0];
  for (const number of array) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  return console.log(array.indexOf(smallestNumber));
}

returnSmallestIndex([2, 4, 6, 7, 10, 0, -3]);

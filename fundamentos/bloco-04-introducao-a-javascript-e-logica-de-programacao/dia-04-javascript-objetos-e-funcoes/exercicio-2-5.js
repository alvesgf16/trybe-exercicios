// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function getMostRepeatedInt(array) {
  const timesRepeated = {};
  let mostRepeatedInt;
  let timesMostRepeated = 0;

  array.forEach((number) => {
    timesRepeated[number] = timesRepeated[number] ? timesRepeated[number] + 1 : 1;
  });

  for (const number in timesRepeated) {
    if (timesRepeated[number] > timesMostRepeated) {
      timesMostRepeated = timesRepeated[number];
      mostRepeatedInt = number;
    } 
  }

  return console.log(mostRepeatedInt);
}

getMostRepeatedInt([2, 3, 2, 5, 8, 2, 3]);
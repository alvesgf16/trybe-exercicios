// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

const returnSuperlativeIndex = (array, superlative) => console.log(
  array.indexOf(array.reduce((superlativeNumber, current) => {
    const comparison = {
      biggest: current > superlativeNumber,
      smallest: current < superlativeNumber,
    };

    return (comparison[superlative] ? current : superlativeNumber);
  })),
);

returnSuperlativeIndex([2, 3, 6, 7, 10, 1], 'biggest');

returnSuperlativeIndex([2, 4, 6, 7, 10, 0, -3], 'smallest');

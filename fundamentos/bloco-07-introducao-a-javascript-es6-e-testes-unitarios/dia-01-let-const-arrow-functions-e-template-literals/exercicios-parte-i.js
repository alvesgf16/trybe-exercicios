// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
};

testingScope(true);

// 2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortNumberArray = (numberArray) => 
// for (let i = 0; i < numberArray.length; i += 1) {
//   for (let j = 1; j < numberArray.length; j+= 1) {
//     if (numberArray[j] < numberArray[j - 1]) {
//       const biggerNumber = numberArray[j - 1];
//       numberArray[j - 1] = numberArray[j];
//       numberArray[j] = biggerNumber;
//     }
//   }
// }

  numberArray.sort((a, b) => a - b);
console.log(
  `Os números ${sortNumberArray(oddsAndEvens)} se encontram ordenados de forma crescente!`,
); // será necessário alterar essa linha 😉
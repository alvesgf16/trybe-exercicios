// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function returnLongestName(array) {
  let longestNameLength = array[0].split('').length;
  let longestName = array[0];

  for (const person of array) {
    if (person.split('').length > longestNameLength) {
      longestNameLength = person.split('').length;
      longestName = person;
    }
  }
    
  return console.log(longestName);
}

returnLongestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
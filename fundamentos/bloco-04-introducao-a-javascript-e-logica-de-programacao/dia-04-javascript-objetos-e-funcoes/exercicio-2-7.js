// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function verificaFimPalavra(word, ending) {
  const wordArray = word.split('');
  const endingArray = ending.split('');
  let isEnding = true;

  for (let index = 0; index < endingArray.length; index += 1) {
    if (wordArray[index + wordArray.length - endingArray.length] !== endingArray[index]) {
      isEnding = false;
    }
  }

  return console.log(isEnding);
}

verificaFimPalavra('joaofernando', 'nando');
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  console.log(reversedWord === word);
}

verificaPalindrome('arara');
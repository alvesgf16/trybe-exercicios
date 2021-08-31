// 1. Crie uma função que receba um número e retorne seu fatorial.
const factorial = number => number === 0 ? 1 : number * factorial(number - 1);

console.log(factorial(5));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = phrase => {
  let longestWord = phrase.split(' ')[0]
  for (let i = 0; i < phrase.split(' ').length; i += 1) {
    if (phrase.split(' ')[i].length > longestWord.length) {
      longestWord = phrase.split(' ')[i];
    }
  }

  return longestWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

// 3. Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

// let clickCount = 0;
// let counter = document.querySelector('p');
// counter.innerText = clickCount;

// document.querySelector('button').addEventListener('click', () => {
//   clickCount += 1;
//   counter.innerText = clickCount;
// });

// 4. Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

const replaceXWith = string => {
  const originalString =  'Tryber x aqui!'
  const resultingString = originalString.replace('x', string);

  return resultingString;
}

const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'];

const listSkills = string => `${string} Minhas cinco principais habilidades são ${skills.sort()} #goTrybe"`;

console.log(listSkills(replaceXWith('Bebeto')));

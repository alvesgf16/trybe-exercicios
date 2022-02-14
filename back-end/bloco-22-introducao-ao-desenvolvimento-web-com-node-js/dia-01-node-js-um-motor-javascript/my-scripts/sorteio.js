const readline = require('readline-sync');

function sortLotto() {
  const input = readline.questionInt('Digite um número entre 0 e 10 para participar do sorteio: ')
  const lotto = Math.floor(Math.random() * 11);
  const result = input === lotto ? 'Parabéns, número correto!'
    : `Opa, não foi dessa vez. O número era ${lotto}`;

  console.log(result);
}

sortLotto();

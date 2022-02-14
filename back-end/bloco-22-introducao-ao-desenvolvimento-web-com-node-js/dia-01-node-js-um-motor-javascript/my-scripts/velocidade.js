const readline = require('readline-sync');

function calcAvgSpd() {
  const length = readline.questionInt('Informe a distância (em m): ');
  const time = readline.questionInt('Informe o tempo (em s): ');
  
  const avgSpd = length / time;
  
  console.log(`Velocidade média: ${avgSpd.toFixed(2)} m/s`);
}

calcAvgSpd();

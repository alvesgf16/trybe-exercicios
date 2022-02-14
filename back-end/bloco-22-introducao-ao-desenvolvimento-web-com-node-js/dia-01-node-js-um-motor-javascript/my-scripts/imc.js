const readline = require('readline-sync');

function assessImc() {
  const weight = readline.questionFloat('Qual seu peso em kg? ');
  const height = readline.questionFloat('Qual sua altura em m? ');
  
  const bmi = weight / height ** 2;

  console.log(`IMC: ${bmi}`);

  const bmiSituationTable = {
    18.5: 'Abaixo do peso (magreza)',
    25: 'Peso normal',
    30: 'Acima do peso (sobrepeso)',
    35: 'Obesidade grau I',
    40: 'Obesidade grau II',
  }

  const upperLimits = Object.keys(bmiSituationTable);

  const isBmiBelowLimit = upperLimits.some((limit) => bmi < limit);
  const situationUpperLimit = upperLimits.find((limit) => bmi < limit);

  const bmiSituation = isBmiBelowLimit ? bmiSituationTable[situationUpperLimit]
    : 'Obesidade graus III e IV';

  console.log(`Situação: ${bmiSituation}`);
}

assessImc();

const checkResult = (givenParam, setParam) => givenParam === setParam;
const giveResult = (bet, resultTreatment) => {
  const sortedNumber = Math.floor(Math.random() * 5 + 1);
  
  return resultTreatment(bet, sortedNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(giveResult(3,checkResult));
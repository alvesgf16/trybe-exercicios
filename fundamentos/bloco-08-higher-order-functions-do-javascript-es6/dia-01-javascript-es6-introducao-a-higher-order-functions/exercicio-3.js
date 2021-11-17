const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkResult = (setParam, givenParam) => givenParam.reduce((result, param, index) => {
  if (param === 'N.A') return result + 0;
  
  return param === setParam[index] ? result + 1 : result - 0.5;
}, 0);

const giveResult = (listOfAnswers, studentAnswers, resultTreatment) =>
  resultTreatment(listOfAnswers, studentAnswers);

console.log(giveResult(RIGHT_ANSWERS, STUDENT_ANSWERS, checkResult));

const RIGHT_ANSWERS =   ['A', 'C'  , 'B', 'D', 'A', 'A', 'D'  , 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkResult = (setParam, givenParam) => {
  let result = 0;
  
  for (let i = 0; i < setParam.length; i += 1) {
    givenParam[i] === 'N.A' ? result += 0 : (givenParam[i] === setParam[i] ? result += 1 : result -= 0.5);
  }

  return result;
};

const giveResult = (listOfAnswers, studentAnswers, resultTreatment) => resultTreatment(listOfAnswers, studentAnswers);

console.log(giveResult(RIGHT_ANSWERS, STUDENT_ANSWERS, checkResult));
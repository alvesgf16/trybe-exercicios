const convertPercentageToLetterGrade = (percentage) => {
  const letterGradeConverter = {
    100: 'A',
    90: 'A',
    80: 'B',
    70: 'C',
    60: 'D',
    50: 'E',
    0: 'F',
  };

  const percentageRange = percentage < 50 ? 0 : Math.floor(percentage / 10) * 10;

  return (percentage < 0 || percentage > 100
    ? 'Não é uma nota válida' : letterGradeConverter[percentageRange]);
};

console.log(convertPercentageToLetterGrade(100));
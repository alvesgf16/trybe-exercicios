const convertPercentageToLetterGrade = (percentage) => {
  if (percentage < 0 || percentage > 100) {
    return 'Não é uma nota válida';
  } if (percentage >= 90) {
    return 'A';
  } if (percentage >= 80) {
    return 'B';
  } if (percentage >= 70) {
    return 'C';
  } if (percentage >= 60) {
    return 'D';
  } if (percentage >= 50) {
    return 'E';
  } 
    return 'F';
}

console.log(convertPercentageToLetterGrade(90));
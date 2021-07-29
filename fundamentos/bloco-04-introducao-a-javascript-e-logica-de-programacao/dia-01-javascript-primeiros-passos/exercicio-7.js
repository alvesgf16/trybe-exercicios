let percentage = 40;
let letterGrade;

if (percentage < 0 || percentage > 100) {
    letterGrade = "Não é uma nota válida";
} else if (percentage >= 90) {
    letterGrade = "A";
} else if (percentage >= 80) {
    letterGrade = "B";
} else if (percentage >= 70) {
    letterGrade = "C";
} else if (percentage >= 60) {
    letterGrade = "D";
} else if (percentage >= 50) {
    letterGrade = "E";
} else {
    letterGrade = "F";
}

console.log(letterGrade);
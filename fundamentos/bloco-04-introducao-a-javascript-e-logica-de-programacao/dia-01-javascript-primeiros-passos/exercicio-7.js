function convertPercentageToLetterGrade(percentage) {
    if (percentage < 0 || percentage > 100) {
        return "Não é uma nota válida";
    } else if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else if (percentage >= 50) {
        return "E";
    } else {
        return "F";
    }
}


console.log(convertPercentageToLetterGrade(90));
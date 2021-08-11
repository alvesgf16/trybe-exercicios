function isTriangle(a,b,c) {
    if (a < 0 || b < 0 || c < 0) {
        return "Ângulos internos não podem ser negativos!";
    } else {
        if (a + b + c === 180) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isTriangle(30,60,90));
let a = 60;
let b = 60;
let c = 60;

if (a < 0 || b < 0 || c < 0) {
    console.log("Ângulos internos não podem ser negativos!");
} else {
    if (a + b + c === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
}
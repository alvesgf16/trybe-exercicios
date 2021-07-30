let n = 5;
let numeroDeAstericosNaLinha = 1;
let str = "*";
let blank = " ";

for (i = 1; i <= n; i += 2) {
    console.log(blank.repeat((n - numeroDeAstericosNaLinha)/2) + str.repeat(numeroDeAstericosNaLinha));
    numeroDeAstericosNaLinha += 2;
}
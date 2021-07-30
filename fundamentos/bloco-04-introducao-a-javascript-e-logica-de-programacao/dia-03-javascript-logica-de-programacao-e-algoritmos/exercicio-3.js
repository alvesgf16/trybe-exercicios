let n = 5;
let numeroDeAstericosNaLinha = 1;
let str = "*"
let blank = " "

for (i = 1; i <= n; i += 1) {

    console.log(blank.repeat(n - numeroDeAstericosNaLinha) + str.repeat(numeroDeAstericosNaLinha));
    numeroDeAstericosNaLinha += 1
}
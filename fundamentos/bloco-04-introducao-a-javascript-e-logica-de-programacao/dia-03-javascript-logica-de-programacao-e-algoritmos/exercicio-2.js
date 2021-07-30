let n = 5;
let numeroDeAstericosNaLinha = 1;
let str = "*"

for (i = 1; i <= n; i += 1) {
    console.log(str.repeat(numeroDeAstericosNaLinha));
    numeroDeAstericosNaLinha += 1
}
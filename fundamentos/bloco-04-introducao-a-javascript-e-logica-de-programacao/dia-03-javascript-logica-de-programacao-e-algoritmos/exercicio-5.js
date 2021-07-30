let n = 9;
let numeroDeAsteriscosNoTopo = 1;
let numeroDeAstericosNaLinha = 1;
let numeroDeEspaçosNoMeio = 1;
let str = "*"
let blank = " "

for (i = 1; i <= n; i += 2) {
    if (i === numeroDeAsteriscosNoTopo || i === n) {
        console.log(blank.repeat((n - numeroDeAstericosNaLinha)/2) + str.repeat(numeroDeAstericosNaLinha));
        numeroDeAstericosNaLinha += 2;
    } else {
        console.log(blank.repeat((n - numeroDeAstericosNaLinha)/2) + str + blank.repeat(numeroDeEspaçosNoMeio) + str);
        numeroDeAstericosNaLinha += 2;
        numeroDeEspaçosNoMeio += 2;
    }
}
        
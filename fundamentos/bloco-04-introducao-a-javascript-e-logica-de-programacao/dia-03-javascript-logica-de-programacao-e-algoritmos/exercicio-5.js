let n = 9;
let numeroDeAsteriscosNoTopo = 1;
let numeroDeAsteriscosNaLinha = 1;
let numeroDeEspaçosNoMeio = 1;

for (i = 1; i <= n; i += 2) {
    let str = "";

    if (i === numeroDeAsteriscosNoTopo || i === n) {
        for (espaçosEmBranco = 1; espaçosEmBranco <= (n - numeroDeAsteriscosNaLinha)/2; espaçosEmBranco += 1) {
            str += " ";
        }

        for (asteriscos = 1; asteriscos <= numeroDeAsteriscosNaLinha; asteriscos += 1) {
            str += "*";
        }

        console.log(str);
    } else {
        for (espaçosEmBranco = 1; espaçosEmBranco <= (n - numeroDeAsteriscosNaLinha)/2; espaçosEmBranco += 1) {
            str += " ";
        }

        str += "*"
        
        for (espaçosEmBranco = 1; espaçosEmBranco <= numeroDeEspaçosNoMeio; espaçosEmBranco +=1) {
            str += " ";
        }

        str += "*";

        console.log(str);
        numeroDeEspaçosNoMeio += 2;
    }
    numeroDeAsteriscosNaLinha += 2;
}

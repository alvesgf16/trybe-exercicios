let n = 5;
let numeroDeAsteriscosNaLinha = 1;

for (linha = 1; linha <= n; linha += 1) {
    let str = "";

    for (espaçosEmBranco = 1; espaçosEmBranco <= (n - numeroDeAsteriscosNaLinha); espaçosEmBranco += 1) {
        str += " ";
    }

    for (asteriscos = 1; asteriscos <= numeroDeAsteriscosNaLinha; asteriscos += 1) {
        str += "*";
    }

    console.log(str);
    numeroDeAsteriscosNaLinha += 1;
}
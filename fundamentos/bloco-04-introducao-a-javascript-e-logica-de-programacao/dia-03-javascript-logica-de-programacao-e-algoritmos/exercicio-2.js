let n = 5;
let numeroDeAsteriscosNaLinha = 1;

for (linha = 1; linha <= n; linha += 1) {
    let str = "";

    for (coluna = 1; coluna <= numeroDeAsteriscosNaLinha; coluna += 1) {
        str += "*"
    }

    console.log(str);
    numeroDeAsteriscosNaLinha += 1;
}
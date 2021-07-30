let n = 7;
let numerosAnteriores = [];
quantidadeDeDivisiveis = 0;

for (numero = 1; numero <= n; numero += 1) {
    numerosAnteriores.push(numero);
}

for (posicao = 0; posicao < numerosAnteriores.length; posicao += 1) {
    if (n % numerosAnteriores[posicao] === 0) {
        quantidadeDeDivisiveis += 1;
    }
}

if (quantidadeDeDivisiveis > 2) {
    console.log("Não é primo")
} else {
    console.log("É primo")
}
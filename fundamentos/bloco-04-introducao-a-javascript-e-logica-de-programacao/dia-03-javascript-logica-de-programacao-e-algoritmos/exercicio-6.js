const n = 7;
const numerosAnteriores = [];
let quantidadeDeDivisiveis = 0;

for (let numero = 1; numero <= n; numero += 1) {
  numerosAnteriores.push(numero);
}

for (let posicao = 0; posicao < numerosAnteriores.length; posicao += 1) {
  if (n % numerosAnteriores[posicao] === 0) {
    quantidadeDeDivisiveis += 1;
  }
}

if (quantidadeDeDivisiveis > 2) {
  console.log('Não é primo');
} else {
  console.log('É primo');
}
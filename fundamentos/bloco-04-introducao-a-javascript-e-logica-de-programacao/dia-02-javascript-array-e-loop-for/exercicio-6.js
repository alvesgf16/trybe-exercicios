const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 6: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let quantidadeDeNumerosImpares = 0;

for (const number of numbers) {
  if (number % 2 === 1) {
    quantidadeDeNumerosImpares += 1;
  }
}

if (quantidadeDeNumerosImpares > 0) {
  console.log(quantidadeDeNumerosImpares);
} else {
  console.log('nenhum valor ímpar encontrado');
}

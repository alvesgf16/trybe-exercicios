// Exercício 1: Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
const n = 5;

for (let altura = 1; altura <= n; altura += 1) {
  let str = '';

  for (let lado = 1; lado <= n; lado += 1) {
    str += '*';
  }

  console.log(str);
}
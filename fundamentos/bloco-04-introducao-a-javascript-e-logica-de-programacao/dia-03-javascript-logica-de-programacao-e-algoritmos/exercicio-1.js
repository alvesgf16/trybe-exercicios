// Exercício 1: Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 10;
let str = "*";

for (lado = 1; lado <= n; lado += 1) {
        console.log(str.repeat(n));
}
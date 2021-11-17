const nota = 80;
let resultado;

console.log(nota);

if (nota >= 80) {
  resultado = 'aprovada';
} else if (nota >= 60) {
  resultado = 'lista';
} else {
  resultado = 'reprovada';
}

switch (resultado) {
case 'aprovada':
  console.log('Parabéns, você foi aprovado(a)');
  break;

case 'lista':
  console.log('Você está na nossa lista de espera');
  break;

case 'reprovada':
  console.log('Você foi reprovado(a)');
  break;

default:
  console.log('Não se aplica');
}
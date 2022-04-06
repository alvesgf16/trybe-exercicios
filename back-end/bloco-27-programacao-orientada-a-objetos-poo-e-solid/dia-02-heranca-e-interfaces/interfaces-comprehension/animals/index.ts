import Bird from './Bird';

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(parrot.age);
parrot.fly();

/*
Saída (código executado em Mar/2022):
6
Papagaio está voando!
*/
// Parte I - Objetos e For/In
// Usando o objeto abaixo, faça os exercícios a seguir:

const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';
// 3 - Faça um for/in que mostre todas as chaves do objeto.
for (const key in info) {
  if ({}.hasOwnProperty.call(info, key)) {
    console.log(key);
  }
}
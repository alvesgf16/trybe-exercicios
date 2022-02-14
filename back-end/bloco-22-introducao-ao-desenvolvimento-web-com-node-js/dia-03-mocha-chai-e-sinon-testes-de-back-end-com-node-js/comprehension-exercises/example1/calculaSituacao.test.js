const { expect } = require('chai');

const calculaSituacao = require('./calculaSituacao');

// console.log('Quando a média for menor que 7, retorna "reprovado":');
describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
//  const respostaCenario1 = calculaSituacao(4);
    const resposta = calculaSituacao(4);
//  if (respostaCenario1 === 'reprovado') {
//    console.log(`Ok 🚀`);
//  } else {
//    console.error('Resposta não esperada 🚨');
//  }
    expect(resposta).to.be.equals('reprovado');
// // console:
// // Quando a média for menor que 7, retorna "reprovado":
// // Ok 🚀
  });
});

// console.log('Quando a média for maior que 7, retorna "aprovado":');
describe('Quando a média for maior que 7', () => {
  it('retorna "aprovado"', () => {
//  const respostaCenario2 = calculaSituacao(9);
    const resposta = calculaSituacao(9);
//  if (respostaCenario2 === 'aprovado') {
//    console.log(`Ok 🚀`);
//  } else {
//    console.error('Resposta não esperada 🚨');
//  }
    expect(resposta).to.be.equals('aprovado');
// // console:
// // Quando a média for maior que 7, retorna "aprovado":
// // Ok 🚀
  });
});

// console.log('Quando a média for igual a 7, retorna "aprovado":');
describe('Quando a média for igual a 7', () => {
  it('retorna "aprovado"', () => {
//  const respostaCenario3 = calculaSituacao(7);
    const resposta = calculaSituacao(7);
//  if (respostaCenario3 === 'aprovado') {
//    console.log(`Ok 🚀`);
//  } else {
//    console.error('Resposta não esperada 🚨');
//  }
    expect(resposta).to.be.equals('aprovado');
// // console:
// // Quando a média for igual a 7, retorna "aprovado":
// // Resposta não esperada 🚨
 });
});

const { expect } = require('chai');

const numberSign = require('./');

describe('numberSign', () => {
  describe('Se o parâmetro informado não for do tipo Number', () => {
    it('deverá retornar "o valor deve ser um número"', () => {
      const response = numberSign('Not a number');

      expect(response).to.equal('o valor deve ser um número');
    });
  });

  describe('Se o parâmetro informado for do tipo número', () => {
    describe('Quando o número passado for maior que 0', () => {
      it('deverá retornar "positivo"', () => {
        const response = numberSign(1);
  
        expect(response).to.equal('positivo');
      });
    });
  
    describe('Quando o número passado for menor que 0', () => {
      it('deverá retornar "negativo"', () => {
        const response = numberSign(-1);
  
        expect(response).to.equal('negativo');
      });
    });
  
    describe('Quando o número passado for igual a 0', () => {
      it('deverá retornar "neutro"', () => {
        const response = numberSign(0);
  
        expect(response).to.equal('neutro');
      });
    });
  });
});

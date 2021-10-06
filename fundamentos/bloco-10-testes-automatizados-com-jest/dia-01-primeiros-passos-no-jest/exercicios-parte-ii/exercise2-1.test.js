const { encode, decode } = require('./encodeDecode');

describe('Para as funções encode e decode crie os seguintes testes', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente e teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?');
    expect(encode('This is an encoding test.')).toBe('Th3s 3s 1n 2nc4d3ng t2st.');
    expect(encode('go Trybe!')).toBe('g4 Tryb2!');
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('hello')).toHaveLength(5);
  })

    it('Teste se encode e decode são funções', () => {
    expect(typeof decode).toBe('function');
  });
    it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente e teste se as demais letras/números não são convertidos para cada caso', () => {
      expect(decode('H4w 1r2 y45 t4d1y?')).toBe('How are you today?');
      expect(decode('Th3s 3s 1n 2nc4d3ng t2st.')).toBe('This is an encoding test.');
      expect(decode('g4 Tryb2!')).toBe('go Trybe!');
    });
    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
      expect(decode('h2ll4')).toHaveLength(5);
    });
});
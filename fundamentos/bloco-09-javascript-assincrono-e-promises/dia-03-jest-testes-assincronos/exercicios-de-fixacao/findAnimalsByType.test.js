const { findAnimalsByType } = require('./findAnimalsByType');

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => (
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    })
  ));
});

describe('Quando o tipo do animal não existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(1);
    return findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')
    ));
  });
});
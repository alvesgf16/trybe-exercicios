const { findAnimalsByType } = require('./findAnimalsByType');

describe('Quando o tipo do animal existe', () => {
  test('Testando com async/await', async () => {
    const listDogs = await findAnimalsByType('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  });
});

describe('Quando o tipo do animal não existe', () => {
  test('Testando com async/await, testando o reject', async () => {
    expect.assertions(1);
    try {
      await findAnimalsByType('Lion');
    } catch (error) {
      expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
    }
  });
});
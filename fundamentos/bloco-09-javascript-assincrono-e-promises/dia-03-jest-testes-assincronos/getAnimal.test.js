const { animals } = require('./exercicios-de-fixacao/findAnimalsByType');

const Animals = animals;

const findAnimalByName = (name) => Animals
  .find((animal) => animal.name === name);

const getAnimal = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = findAnimalByName(name);

      return animal ? resolve(animal) : reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
);
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error.message).toEqual('Nenhum animal com esse nome!'));
    });
  });
});
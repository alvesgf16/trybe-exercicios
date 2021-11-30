const assert = require('assert');
const books = require('../data');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function getOldBooks() {
  const oldBooks = books.filter((book) => book.releaseYear < 2021 - 60);
  return oldBooks.map((book) => book.name);
}

assert.deepStrictEqual(getOldBooks(), expectedResult);
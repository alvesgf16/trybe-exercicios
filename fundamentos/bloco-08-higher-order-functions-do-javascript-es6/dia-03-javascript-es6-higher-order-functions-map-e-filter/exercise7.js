const assert = require('assert');
const books = require('../data');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.find((book) => book.author.name.match(/[A-Z]\.\s[A-Z]\.\s[A-Z]\.\s.*/)).name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
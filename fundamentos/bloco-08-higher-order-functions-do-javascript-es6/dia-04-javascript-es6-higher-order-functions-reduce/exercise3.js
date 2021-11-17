const assert = require('assert');
const books = require('./data');

const expectedResult = 43;

function averageAge() {
  return books.reduce((acc, book) => acc + book.releaseYear - book.author.birthYear, 0)
  / books.length;
}

assert.strictEqual(averageAge(), expectedResult);
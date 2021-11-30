const assert = require('assert');
const books = require('../data');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear >= 1901 && book.author.birthYear < 2001);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);
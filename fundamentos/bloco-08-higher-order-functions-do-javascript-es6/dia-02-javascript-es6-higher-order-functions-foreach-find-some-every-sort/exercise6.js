const assert = require('assert');
const books = require('../data');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1981 && book.releaseYear < 1991);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);
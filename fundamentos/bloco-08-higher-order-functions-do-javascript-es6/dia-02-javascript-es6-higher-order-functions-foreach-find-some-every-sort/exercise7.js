const assert = require('assert');
const books = require('../data');

const expectedResult = false;

function isAuthorUnique() {
  let authorUnique = true;

  books.forEach((bookA) => {
    books.forEach((bookB) => {
      if (bookA !== bookB && bookA.author.birthYear === bookB.author.birthYear) {
        authorUnique = false;
      }
    });
  });

  return authorUnique;
}

assert.strictEqual(isAuthorUnique(), expectedResult);
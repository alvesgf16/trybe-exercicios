const assert = require('assert');
const books = require('../data');

function authorBornIn1947() {
  const bookOfFirstAuthorBornIn1947 = books.find(({ author }) => author.birthYear === 1947);
  return bookOfFirstAuthorBornIn1947.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');
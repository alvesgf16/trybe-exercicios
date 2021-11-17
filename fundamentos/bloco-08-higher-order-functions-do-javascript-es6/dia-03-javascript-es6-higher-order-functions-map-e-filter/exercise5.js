const assert = require('assert');
const books = require('./data');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function getFantasyOrSciFiAuthors() {
  const fantasyOrSciFiBooks = books.filter(
    (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia',
  );
  const fantasyOrSciFiAuthors = fantasyOrSciFiBooks.map((book) => book.author.name);
  return fantasyOrSciFiAuthors.sort();
}

assert.deepStrictEqual(getFantasyOrSciFiAuthors(), expectedResult);
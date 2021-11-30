const assert = require('assert');
const books = require('../data');

function smallerName() {
  let nameBook = books[0].name;
  books.forEach((book) => { if (book.name.length < nameBook.length) nameBook = book.name; });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');
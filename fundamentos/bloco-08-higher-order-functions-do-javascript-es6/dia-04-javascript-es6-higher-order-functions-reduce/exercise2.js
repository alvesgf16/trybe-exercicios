const assert = require('assert');
const books = require('../data');

const expectedResult = 'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert,'
+ ' Stephen King, H. P. Lovecraft.';

function reduceNames() {
  return books.map(({ author }) => `${author.name}`).reduce((acc, name, i, arr) => (
    i === arr.length - 1 ? `${acc}, ${name}.` : `${acc}, ${name}`
  ));
}

assert.strictEqual(reduceNames(), expectedResult);
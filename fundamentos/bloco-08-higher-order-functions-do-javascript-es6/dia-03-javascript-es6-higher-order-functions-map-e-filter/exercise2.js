const assert = require('assert');
const books = require('./data');

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  const authorsWithInfo = books.map((book) => {
    const authorInfo = {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    };

    return authorInfo;
  });

  return authorsWithInfo.sort((authorA, authorB) => authorA.age - authorB.age);
}

assert.deepStrictEqual(nameAndAge(), expectedResult);
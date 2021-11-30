const assert = require('assert');
const books = require('../data');

const FICCAO_CIENTIFICA = 'Ficção Científica';

const expectedResult = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: FICCAO_CIENTIFICA,
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: FICCAO_CIENTIFICA,
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
];

function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === FICCAO_CIENTIFICA || book.genre === 'Fantasia');
}

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);
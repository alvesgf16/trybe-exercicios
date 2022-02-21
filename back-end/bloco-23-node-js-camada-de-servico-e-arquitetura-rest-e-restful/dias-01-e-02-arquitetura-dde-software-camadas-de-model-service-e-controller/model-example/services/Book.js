const Book = require('../models/Book');

const isValid = (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number'
    || !(Book.getAll().some(({ id }) => id === authorId))) return false;

  return true;
};

const getAll = async () => {
  return await Book.getAll();
}

const getByAuthorId = async (authorId) => {
  return await Book.getByAuthorId(authorId);
}

const findById = async (id) => {
  const book = await Book.findById(id);

  if (!book) return { error: {
    code: 'notFound',
    message: `Não foi possível encontrar um livro com o id ${id}`,
  } };

  return book;
}

const create = async (title, authorId) => {
  const validBook = isValid(title, authorId);

  if (!validBook) return false;

  const existingBook = await Book.findByTitle(title);

  if (existingBook) return { error: {
    code: 'alreadyExists',
    message: 'Já existe um livro com esse título',
  } }

  const [book] = await Book.create(title, authorId);

  return { id: book.insertId, title, authorId };
};

module.exports = {
  isValid,
  getAll,
  getByAuthorId,
  findById,
  create,
}
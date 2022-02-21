const connection = require('./connection');
const getAllBooks = require('./getAll');
const findBookById = require('./findById');

const columns = ['id', 'title', 'author_id'];
const table = 'model_example.books';

const serialize = ({ id, title, author_id }) => (
  { id, title, authorId: author_id }
);

const getAll = async () => await getAllBooks(columns, table, serialize);

const getByAuthorId = async (authorId) => {
  const query = `SELECT ${columns.join(', ')} FROM ${table} WHERE author_id = ?;`;
  const [books] = await connection.execute(query, [authorId]);
  
  return books.map(serialize);
};

const findById = async (id) => await findBookById(id, columns, table, serialize);

const create = async (title, authorId) => {
  const query = `INSERT INTO ${table} (title, author_id) VALUES (?,?); `;
  const [book] = await connection.execute(query, [title, authorId]);
  
  return book;
};

const findByTitle = async (title) => {
  const query = `SELECT ${columns.join(', ')} FROM ${table} WHERE title = ?`;
  const [bookData] = await connection.execute(query, [title]);
  
  if (bookData.length === 0) return null;
  
  return bookData.map(serialize)[0];
}

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
  findByTitle,
};
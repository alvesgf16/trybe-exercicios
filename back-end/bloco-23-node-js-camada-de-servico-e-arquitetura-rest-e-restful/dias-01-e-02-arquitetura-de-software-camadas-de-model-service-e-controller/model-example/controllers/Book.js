const Joi = require('joi');
const Book = require('../services/Book');

const getByAuthorIdOrGetAll = () => async (req, res) => {
  const { author_id } = req.query;
  const books = author_id ? await Book.getByAuthorId(author_id) : await Book.getAll();

  return res.status(200).json(books);
};

const findById = () => async (req, res, next) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (book.error) return next(book.error);

  return res.status(200).json(book);
};

const create = () => async (req, res, next) => {
  const { title, authorId } = req.body;
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    authorId: Joi.number().not().empty().required(),
  })
    .validate({ title, authorId })

  if (error) return next(error);

  const book = await Book.create(title, authorId);

  if (book.error) return next(book.error);

  return res.status(201).json({ message: 'Livro criado com sucesso! '});
};

module.exports = {
  getByAuthorIdOrGetAll,
  findById,
  create,
}
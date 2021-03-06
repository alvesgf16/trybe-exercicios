const { Book } = require('../models');

const findAll = async (_req, res) => {
  try {
    const books = await Book.findAll({ order: [ ['title', 'ASC'], ['createdAt', 'ASC'] ]});

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado '});
  };
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
};

const overwrite = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [overwriteBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    console.log(overwriteBook);

    if (!overwriteBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro sobrescrito' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy(
      { where: { id } },
    );

    console.log(deleteBook);

    return res.status(200).json({ message: 'Livro deletado' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
};

module.exports = {
  findAll,
  findById,
  create,
  overwrite,
  remove,
};

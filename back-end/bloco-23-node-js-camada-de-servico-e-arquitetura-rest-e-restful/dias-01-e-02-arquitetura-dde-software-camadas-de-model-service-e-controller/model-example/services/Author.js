const Author = require('../models/Author');

// Cria uma string com o nome completo do autor
const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return { id, firstName, middleName, lastName, fullName };
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  // Solicitamos que o model realize a busca no banco
  const author = await Author.findById(id);
  // Caso nenhuma pessoa autora seja encontrada, retornamos um objeto de erro.
  if (!author) return { error: {
    code: 'notFound',
    message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
  } };
  // Caso haja uma pessoa autora com o ID informado, retornamos essa pessoa
  return getNewAuthor(author);
};

const create = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return false;

  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) return { error: {
    code: 'alreadyExists',
    message: 'Já existe um autor com esse nome'
  } };
  // Caso a pessoa autora não exista e, portanto, possa ser criado
  // chamamos o model e retornamos o resultado
  const [author] = await Author.create(firstName, middleName, lastName);

  return getNewAuthor({ id: author.insertId, firstName, middleName, lastName });
};

module.exports = {
  getAll,
  findById,
  create,
}
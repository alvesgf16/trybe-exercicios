const connection = require('./connection');
const getAllAuthors = require('./getAll');
const findAuthorById = require('./findById');

const columns = ['id', 'first_name', 'middle_name', 'last_name']
const table = 'model_example.authors';

const serialize = ({ id, first_name, middle_name, last_name }) => ( // Converte o nome dos campos de snake_case para camelCase
  { id, firstName: first_name, middleName: middle_name, lastName: last_name }
);

const getAll = async () => await getAllAuthors(columns, table, serialize);

const findById = async (id) => await findAuthorById(id, columns, table, serialize);

const create = async (firstName, middleName, lastName) => {
  const query = (
    `INSERT INTO ${table} (first_name, middle_name, last_name) VALUES (?,?,?);`
  );
  const author = connection.execute(query, [firstName, middleName, lastName]);

  return author;
};

const findByName = async (firstName, middleName, lastName) => {
  let query = `SELECT ${columns.join(', ')} FROM ${table} `;
  if (middleName) { // Determinamos se devemos buscar com ou sem o nome do meio
    query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?';
  } else {
    query += 'WHERE first_name = ? AND last_name = ?';
  }

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];
  const [authorData] = await connection.execute(query, params); // Executamos a consulta e retornamos o resultado
  
  if (authorData.length === 0) return null; // Caso nenhum author seja encontrado, devolvemos null

  return authorData.map(serialize)[0]; // Caso contrário, retornamos o author encontrado
}

module.exports = {
  getAll,
  findById,
  create,
  findByName,
};
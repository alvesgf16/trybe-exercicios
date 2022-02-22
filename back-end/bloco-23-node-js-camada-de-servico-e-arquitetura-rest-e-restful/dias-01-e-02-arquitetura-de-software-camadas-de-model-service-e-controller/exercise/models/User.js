const connection = require('./connection');

const serialize = ({ id, first_name, last_name, email, password }) => ( // Converte o nome dos campos de snake_case para camelCase
  { id, firstName: first_name, lastName: last_name, email, password }
);

const create = async (firstName, lastName, email, password) => {
  const query = (
    'INSERT INTO exercise.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);'
  );
  const user = await connection.execute(query, [firstName, lastName, email, password]);

  return user;
};

const getAll = async () => {
  const query = 'SELECT * FROM exercise.users;';
  const [users] = await connection.execute(query);

  return users.map(serialize);
}

const findById = async (id) => {
  const query = 'SELECT * FROM exercise.users WHERE id = ?';
  const [user] = await connection.execute(query, [id]);
  
  if (user.length === 0) return null;
  
  return user.map(serialize)[0];
};

const update = async (firstName, lastName, email, password, id) => {
  const query = (
    'UPDATE exercise.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;'
  );
  const user = await connection
    .execute(query, [firstName, lastName, email, password, id]);

  return user;
}

module.exports = { create, getAll, findById, update };

const connection = require('./connection');

module.exports = async (id, columns, table, serialize) => {
  const query = `SELECT ${columns.join(', ')} FROM ${table} WHERE id = ?`;
  const [bookData] = await connection.execute(query, [id]);
  
  if (bookData.length === 0) return null;
  
  return bookData.map(serialize)[0];
};

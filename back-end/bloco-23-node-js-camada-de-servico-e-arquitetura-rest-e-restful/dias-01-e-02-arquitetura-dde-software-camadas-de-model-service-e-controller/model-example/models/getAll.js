const connection = require('./connection');

module.exports = async (columns, table, serialize) => {
  const query = `SELECT ${columns.join(', ')} FROM ${table};`;
  const [result] = await connection.execute(query);
  
  return result.map(serialize);
};
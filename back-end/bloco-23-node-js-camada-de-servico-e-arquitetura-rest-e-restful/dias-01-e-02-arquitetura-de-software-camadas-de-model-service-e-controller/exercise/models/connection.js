const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'alvesgf16',
    password: 'D@t@b@53',
    database: 'exercise' });

module.exports = connection;
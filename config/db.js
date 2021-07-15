const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kensington!1',
  database: 'blog_posts',
});

module.exports = db;

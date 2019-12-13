var mysql = require('mysql');

const options = {
  host: 'db',
  port: '3306',
  user: 'user',
  password: 'user',
  database: 'yelpoverviewgallery'
};

const db = mysql.createConnection(options);
db.connect();

module.exports = db;
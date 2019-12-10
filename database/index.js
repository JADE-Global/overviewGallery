var mysql = require('mysql');

const options = {
  user: 'user',
  password: 'user',
  database: 'yelpoverviewgallery'
};

const db = mysql.createConnection(options);
db.connect();

module.exports = db;
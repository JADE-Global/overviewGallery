var mysql = require('mysql');
var db_config = require('./config/db.config.js');

const options = {
  host: db_config.host,
  port: db_config.port,
  user: db_config.user,
  password: db_config.password,
  database: db_config.database,
}

const db = mysql.createConnection(options);
db.connect();

module.exports = db;
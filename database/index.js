var mysql = require('mysql');
const db_config = require('./config/db.config.js');

const options = db_config.options;

const db = mysql.createConnection(options);
db.connect();

module.exports = db;
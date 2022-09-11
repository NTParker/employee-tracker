const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MyPass1",
  database: "coolcorp_db",
});

module.exports = db;

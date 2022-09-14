const db = require("../db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
const promptUser = require("../index");

function getRoles() {
  const sql = `SELECT * FROM role`;
  db.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser.promptUser();
  });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "text",
        name: "newRole",
        message: "Please enter the name of the new role.",
      },
    ])
    .then(function (answer) {
      const sql = `INSERT INTO role (name) VALUES ('${answer.newRole}');`;
      db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser.promptUser();
      });
    });
}

module.exports = (getRoles, addRole);

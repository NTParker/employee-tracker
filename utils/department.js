const db = require("../db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
const promptUser = require("../index");

function getDepartments() {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser.promptUser();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "text",
        name: "newDepartment",
        message: "Please enter the name of the new department.",
      },
    ])
    .then(function (answer) {
      const sql = `INSERT INTO department (name) VALUES ('${answer.newDepartment}');`;
      db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser.promptUser();
      });
    });
}

module.exports = (getDepartments, addDepartment);

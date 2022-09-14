const db = require("../db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
const promptUser = require("../index");

function getEmployees() {
  const sql = `SELECT * FROM employee`;
  db.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser.promptUser();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "text",
        name: "newEmployee",
        message: "Please enter the name of the new employee.",
      },
    ])
    .then(function (answer) {
      const sql = `INSERT INTO employee (name) VALUES ('${answer.newEmployee}');`;
      db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser.promptUser();
      });
    });
}

module.exports = (getEmployees, addEmployee);

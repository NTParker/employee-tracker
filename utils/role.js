const db = require("../db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
const promptUser = require("../index");

function getRoles() {
  const sql = `SELECT role.*, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id`;
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
      {
        type: "text",
        name: "newSalary",
        message: "Please enter the salary information for the new role.",
      },
      {
        type: "text",
        name: "departmentId",
        message: "Please enter the department id for the new role.",
      },
    ])
    .then(function (answer) {
      const sql = `INSERT INTO role (title, salary, department_id) VALUES ('${answer.newRole}, ${answer.newSalary}, ${answer.departmentId}');`;
      db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser.promptUser();
      });
    });
}

module.exports = (getRoles, addRole);

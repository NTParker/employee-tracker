const db = require("../db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
const promptUser = require("../index");

function getEmployees() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, role.salary, CONCAT(manager.first_name, '', manager.last_name) AS manager, department.name AS department_name FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id`;
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
        name: "newName",
        message: "Please enter the first name of the new employee.",
      },
      {
        type: "text",
        name: "newLastname",
        message: "Please enter the last name of the new employee.",
      },
      {
        type: "text",
        name: "jobId",
        message: "Please enter the role ID of the new employee",
      },
      {
        type: "text",
        name: "managerId",
        message:
          "Please enter the managers id for the new employee(if applicable)",
      },
    ])
    .then(function (answer) {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.newName}, ${answer.newLastname}, ${answer.jobId}, ${answer.managerId});`;
      db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser.promptUser();
      });
    });
}

module.exports = (getEmployees, addEmployee);

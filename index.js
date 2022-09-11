const db = require("./db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
const department = require("./utils/department");
const employee = require("./utils/employee");
const role = require("./utils/role");

function promptUser() {
  inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "Please select an option.",
      choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
      ],
    },
  ]);
}

promptUser();

module.exports = promptUser;

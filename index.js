const db = require("./db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
const department = require("./utils/department");
const employee = require("./utils/employee");
const role = require("./utils/role");

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "mainMenu",
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
    ])
    .then((userPrompt) => {
      switch (userPrompt.mainMenu) {
        case "View all Departments":
          department.getDepartments();
          break;
        case "View all Roles":
          role.getRoles();
          break;
        case "View all Employees":
          employee.getEmployees();
          console.log("Here");
          break;
        case "Add a Department":
          department.addDepartment();
          break;
        case "Add a Role":
          role.addRole();
          break;
        case "Add an Employee":
          employee.addEmployee();
          break;
        case "Update an Employee Role":
          employee.updateRole();
          break;
      }
    });
}

promptUser();

exports.promptUser = promptUser;

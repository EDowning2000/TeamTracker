const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');

function initialPrompt(){
inquirer.prompt({
  type: "list",
  message: "What would you like to do?",
  name:"initialQuestion", 
  choices : [
    'View all Employees',
    'View all Employees by Department',
    'View all Employees by Manager',
    'Add Employee',
    'Remove Employee',
    'Update Employee Role',
    'Update Employee Manager',
    'View all Roles'
  ]})
  .then(data=>{
    const choice = data.initialQuestion
    switch(choice){
      case 'View all Employees':
        viewAllEmployees();
          break;
      case 'View all Employees by Department':
        viewAllEmployeesDept();
          break;
      case 'View all Employees by Manager':
        viewAllEmployeesManager();
          break;
      case 'Add Employee':
        addEmployee();
          break;
      case 'Remove Employee':
          removeEmployee();
            break;
      case 'Update Employee Role':
          updateEmployeeRole();
            break;
      case 'Update Employee Manager':
        updateEmployeeManager();
          break;
      case 'View all Roles':
        viewAllRoles();
          break;
    }
  })
}

function viewAllEmployees(){}
function viewAllEmployeesManager(){}
function addEmployee(){}
function removeEmployee(){}
function updateEmployeeRole(){}
function updateEmployeeManager(){}
function viewAllRoles(){}

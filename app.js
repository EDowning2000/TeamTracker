const inquirer = require('inquirer');
const mysql = require('mysql');
// const consoleTable = require('console.table');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Emerson150",
  database: "employeeDB"
});


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
    'Update Employee Deparment',
    'View all Roles',
    'Exit'

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
      case 'Update Employee Department':
          updateEmployeeDepartment();
            break;
      case 'Update Employee Manager':
        updateEmployeeManager();
          break;
      case 'View all Roles':
        viewAllRoles();
          break;
      case 'Exit':
        exit();
          break;
    }
  })
}

function viewAllEmployees(){

}


function viewAllEmployeesManager(){}
function addEmployee(){}
function removeEmployee(){}
function updateEmployeeDepartment(){}
function updateEmployeeManager(){}
function viewAllRoles(){}
function exit(){}

initialPrompt()

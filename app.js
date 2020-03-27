const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "eb6qla2x",
  database: "employeeDB"
});


function initialPrompt(){
inquirer.prompt({
  type: "list",
  message: "What would you like to do?",
  name:"initialQuestion", 
  choices : [
    'View Departments',
    'View Roles',
    'View Employees',
    'Add Department',
    'Add Roles',
    'Add Employees',
    'Update Employee Role',
    'Exit'

  ]})
  .then(data=>{
    const choice = data.initialQuestion
    switch(choice){
      case 'View Departments':
        viewDepartments();
          break;
      case 'View Roles':
        viewRoles();
          break;
      case 'View Employees':
        viewEmployees();
          break;
      case 'Add Departments':
        addDepartments();
          break;
      case 'Add Roles':
          addRoles();
            break;
      case 'Add Employees':
          addEmployees();
            break;
      case 'Update Employee Role':
        updateEmployeeRole();
          break;
      case 'Exit':
        exit();
          break;
    }
  })
}


function viewDepartments(){
  var query = connection.query(
    'SELECT * FROM department',function(err, res){
      if (err) throw err;
        console.table(res)
          console.log('Here are the departments')
    }
  )
  console.log(query)
  console.log(query.sql)
}


function viewRoles(){}
function viewEmployees(){}
function addDepartments(){}
function addRoles(){}
function addEmployees(){}
function updateEmployeeRole(){}
function exit(){}

viewDepartments()

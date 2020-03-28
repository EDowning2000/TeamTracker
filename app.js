const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');

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
          console.log('List of all departments')
            initialPrompt()
    }
  )
  // console.log(query)
  // console.log(query.sql)
}


function viewRoles(){
  var query =connection.query(
    'SELECT * FROM role', function(err, res){
      if (err) throw err;
        console.table(res);
          console.log("List of all Roles");
            initialPrompt()
    }
  )
  // console.log(query)
  // console.log(query.sql)
}
function viewEmployees(){
  var query = connection.query(
    'SELECT * FROM employee', function(err, res){
      if (err) throw err; 
        console.table(res);
          console.log("List of all Employees")
            initialPrompt()
    }
  )
  // console.log(query)
  // console.log(query.sql)
}

function addDepartments(){
  inquirer.prompt({
    type: "prompt",
    message: "What is the name of the Department you would like to add?",
    name: "addDepartmentPrompt"
  })
  .then(data=>{
      var query = connection.query(
        'INSERT INTO department ?', data, function(err, res){
          if (err) throw err;
            console.table(res)
              console.log("Department Added")
                initialPrompt();
      }
    )
  })
}

function addRoles(){
  inquirer.prompt({
    type: 'prompt',
    message: 'What is the role you would like to add?',
    name: "addRolePrompt"
  }).then(data=>{
    var query = connection.query(
      'INSERT INTO role ?', data, function(err, res){
        if (err) throw err;
          console.table(res);
            console.log('Role added');
              initialPrompt();
      }
    )
  })
}

function addEmployees(){
  inquirer.prompt({
    type: 'prompt',
    message: 'What is the first and last name of the employee you would like to add?', 
    name: 'addEmployeesPrompt'
  }).then(data=>{
    var query = connection.query(
      'INSERT INTO employee ?', data, function(err,res){
        if (err) throw err;
          console.table(res);
            console.log('Employee Added');
              initialPrompt();
      }
    )
  })
}

function updateEmployeeRole(){
  inquirer.prompt({
    type: 'prompt',
    message: 'What is the first and last name of the employee whos role you would like to update?',
    name: 'updateEmployeeRolePrompt'
  })
}
function exit(){}

initialPrompt()

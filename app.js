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
    'Add Departments',
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
    type: 'input',
    message: 'What is the name of the department you would like to add?',
    name: 'addDeptPrompt'
  }) .then(data=>{
    connection.query(
      'INSERT INTO department SET ?', {name : data.addDeptPrompt},       function  (err, res){
        if(err) throw err;
          console.log(res)
      }
    )
    connection.end()
  })
}

function addRoles(){
  inquirer.prompt([{
    type: 'input',
    message: 'What is the title of the role?',
    name: 'roleTitlePrompt'
  },{
  type: 'input',
    message: 'What is the salary of the role?',
    name: 'roleSalaryPrompt'
  },{
    type: 'input',
    message:'What is the department ID',
    name: 'roleIDPrompt'
  }])
  .then(data=>{
    connection.query(
      'INSERT INTO role SET ?', {title: data.roleTitlePrompt, salary: data.roleSalaryPrompt, department_id: data.roleIDPrompt}, function(err,res){
        if(err) throw err;
          console.log(res)
      }
    )
    connection.end()
  })
}

function addEmployees(){
  inquirer.prompt([{
    type: 'input',
    message: 'What is the first name of the employee you would like to add?',
    name: 'firstNamePrompt'
  },{
    type: 'input',
    message: 'What is the last name of the employee you would like to add',
    name: 'secondNamePrompt'
  },{
    type: 'input',
    message: 'What is the employee you would like to adds role ID?',
    name: 'employeeRoleIDPrompt'
  }])
  .then(data=>{
    connection.query(
      'INSERT INTO employee SET ?', {first_name: data.firstNamePrompt, last_name: data.secondNamePrompt, role_id: data.employeeRoleIDPrompt}, function (err, res){
        if(err) throw err;
          console.log(res)
      }
    )
    connection.end()
  })
}

function updateEmployeeRole() {
  let employees = [
      'Michael Scott',
      'Dwight Schrute',
      'Jim Halpert',
      'Stanley Hudson',
      'Angela Schrute',
      'Kevin Malone',
      'Emerson Downing'
  ];

  let roles = [
      'Regional Manager',
      'Assistant to Regional Manager',
      'Salesman',
      'Accountant',
      'test',
  ];

  inquirer.prompt([
      {
          message: "Which Employee do you wish to update?",
          type: 'list',
          name: 'employeeUpdatePrompt',
          choices: employees
      },
      {
          message: "What is his/her new role?",
          type: 'list',
          name: 'employeeRoleUpdate',
          choices: roles
      }
  ])
    .then(answers => {
        connection.query(`
        UPDATE employeeDB.employee 
        SET role_id = '${roles.indexOf(answers.role) + 1}' WHERE (id = '${employees.indexOf(answers.employee) + 1}');`,
            (err, result) => {
                if (err) throw err;
                console.log(result);
            })
    })
    connection.end()
}


function exit(){
  connection.end();
}


initialPrompt()

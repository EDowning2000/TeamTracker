# TeamTracker





function addEmployees(){
  inquirer.prompt({
    type: 'prompt',
    message: 'What is the first and last name of the employee you would like to add?', 
    name: 'addEmployeesPrompt'
  }).then(data=>{
    var query = connection.query(
      'INSERT INTO employee ?', {name: data.addEmployeesPrompt}, function(err,res){
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



function addRoles(){
  inquirer.prompt([{
    type: 'prompt',
    message: 'What is the role you would like to add?',
    name: "addRolePrompt"},
    {
      type: 'prompt',
      message: 'What is the roles yearly salary?',
      name: "yearlySalaryPrompt"
    }])
      .then((data) => {
        connection.query(`
             INSERT INTO role SET ?`,
            {
                title: answers.newRole,
                salary: answers.salary,
            },
            (err, result) => {
                if (err) throw err;
                  

            })
    })
    viewRoles();
}

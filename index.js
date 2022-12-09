const mysql = require('mysql2');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "employees_db"
});
connection.connect(function (err) {
  if (err) throw err;
  // PromptUser();
});

inquirer.prompt([
  {
    type: "list",
    message: "What would you like to do?",
    name: "doNext",
    choices: ["view all employees", "view all roles", "view all departments", "add a department", "add an employee", "add a role", "update an employee role"]
  }
]).then(answers => {
  if (answers.doNext == "view all employees") {
    viewEmployee()
  }
  else if (answers.doNext == "view all roles") {
    viewRole()
  }
  else if (answers.doNext == "view all departments") {
    viewDepartment()
  }
  else if (answers.doNext == "add a department") {
    addDepartment()
  }
  else if (answers.doNext == "add an employee") {
    addEmployee()
  }
  else if (answers.doNext == "add a role") {
    addRole()
  }
  else if (answers.doNext == "update an employee role") {
    updateEmployeeRole()  
  }
})

function viewEmployee() {
  var query = 'SELECT * FROM employee';
  connection.query(query, function (err, res) {
    if (err) throw err
    console.table(res);
    // PromptUser();
  });
}

function viewRole() {
  var query = 'SELECT * FROM role';
  connection.query(query, function (err, res) {
    if (err) throw err
    console.table(res);
  });
}

function viewDepartment() {
  var query = 'SELECT * FROM department';
  connection.query(query, function (err, res) {
    if (err) throw err
    console.table(res);
  });
}

function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the department?",
      name: "name",
    }
  ])
    .then(answers => {
      var query = `insert into department (name) values ("${answers.name}")`;
      connection.query(query, function (err, res) {
        if (err) throw err
        console.table(res);
      });
    }
    );
}

function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the employees first name?",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is the employees last name?",
      name: "lastName",
    },
    {
      type: "input",
      message: "What is the employees title?",
      name: "title",
    },  
    {
      type: "input",
      message: "What is the employees department?",
      name: "department",
    },
    {
        type: "input",
        message: "What is the employees salary?",
        name: "salary",
    },
    {
        type: "input",
        message: "Who the employees manager?",
        name: "manager",
    }
  ])
  .then(answers => {
    var query = `INSERT INTO employee (first_name, last_name, title, department, salary, manager) values ("${answers.firstName}", "${answers.lastName}", "${answers.title}", "${answers.department}", "${answers.salary}", "${answers.manager}")`;
    connection.query(query, function (err, res) {
      if (err) throw err
      console.table(res);
    });
  }
  )
}

function addRole() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the role title?",
      name: "roleTitle",
    },
    {
      type: "input",
      message: "What is the role salary?",
      name: "roleSalary",
    },
    {
      type: "input",
      message: "What is the role department?",
      name: "roleDepartment",
    }
  ]).then(answers => {
    var query = `INSERT INTO role (title, salary, department) values ("${answers.roleTitle}", "${answers.roleSalary}", "${answers.roleDepartment}")`;
    connection.query(query, function (err, res) {
      if (err) throw err
      console.table(res);
    });
  }
  )
}

// function updateEmployeeRole() {
//   inquirer.prompt([
//     {
//       type: "input",  
//       message: "What is the new employee role?",
//       name: "newRole",
//     }
//   ]).then(answers => {
//     var query = `UPDATE role SELECT employee SET role_id = "${answers.newRole}"`;
//     connection.query(query, function (err, res) {
//         if (err) throw err
//         console.table(res);
//       });
//   } 
//   )
// }


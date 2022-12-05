const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "1234",
    database: "employeesDB"
    });
    connection.connect(function (err) {
    if (err) throw err;
    PromptUser();
    });
    viewEmployee()
    {
    var query = 'SELECT first_name, last_name, role_id, manager_id FROM employee';
    connection.query(query, function (err, res){
    if(err) throw err
    console.log(res);
    PromptUser();
    });
  }

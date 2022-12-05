USE employees_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 1),
       ("Sally", "Smith", 2, 2),
       ("Bob", "Jones", 3, 3);


INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 100000, 1),
       ("CFO", 80000, 1),
       ("CTO", 80000, 1);

INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance");
       
       
       

USE employees_db;

INSERT INTO employee (first_name, last_name, title, department, salary, manager)
VALUES ("John", "Doe", "CEO", "Sales", 100000, "Bob"),
       ("Jane", "Doe", "VP", "Engineering", 80000, "Sally"),
       ("Sally", "Smith", "CFO", "Finance", 80000, "Bob");


INSERT INTO role (title, salary, department)
VALUES ("CEO", 100000, "Sales"),
       ("VP", 80000, "Engineering"),
       ("CFO", 80000, "Finance");
     

INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance");
       

       

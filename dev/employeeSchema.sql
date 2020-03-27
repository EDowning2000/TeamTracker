DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);
INSERT INTO department (name)
VALUES ('Management'),('Sales'),('Accounting');

INSERT INTO role (title, salary, title_id)
VALUES ('Regional Manager', 80000, 1),('Assistant to Regional Manager', 60000, 2),('Salesman', 60000, 3),('Accountant',40000,4);

INSERT INTO employee (firstName, lastName, roleID, managerID)
VALUES ('Michael', 'Scott', 1, null),('Dwight','Schrute',2,null),('Jim','Halpert', 3, null),('Stanley', 'Hudson', 3,null),('Angela','Schrute',4,null),('Kevin', 'Malone',4,null);
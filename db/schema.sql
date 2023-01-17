DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE IF NOT EXISTS employees_db;

USE employees_db;

CREATE TABLE department(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30),
    FOREIGN KEY (role)
    REFERENCES role(department_id)
);

CREATE TABLE role(
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department_id INT 
    FOREIGN KEY (employee)
    REFERENCES employee(role_id)
);

CREATE TABLE employee(
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    REFERENCES employee(manager_id)
);

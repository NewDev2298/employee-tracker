const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');

require('console.table');

const db = mysql.createConnection({
    user: 'root',
    database: 'employees_db'
});


// INSTRUCTOR HELPED GUIDE SWITCH CASE FUNCTION

const options =  (type) => {
    switch (type) {
        case 'VIEW ALL DEPARTMENTS':{
            db.query('SELECT * FROM department', (err, department) => {
                console.table(department);
            });
        }
        case 'VIEW ALL ROLES':{
            db.query('SELECT * FROM role', (err, role) => {
                console.table(role);
            });
        }
        case 'VIEW ALL EMPLOYEES':{
            db.query('SELECT * FROM employee', (err, employee) => {
                console.table(employee);  
            });
        }
    };
};

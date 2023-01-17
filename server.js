const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');

const db = mysql.createConnection({
    user: 'root',
    database: 'employees_db'
});

db.query('SELECT * FROM department', (err, department) => {
    console.table(department);
});
db.query('SELECT * FROM role', (err, role) => {
    console.table(role);
});
db.query('SELECT * FROM employee', (err, employee) => {
    console.table(employee);  
});
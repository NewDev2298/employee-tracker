const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');

const database = mysql.createConnection({
    user: 'root',
    database: 'employees_db'
});

db.query('SELECT * FROM department');
db.query('SELECT * FROM role');
db.query('SELECT * FROM employee');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');

require('console.table');

const db = mysql.createConnection({
    user: 'root',
    database: 'employees_db'
});


// INSTRUCTOR HELPED GUIDE SWITCH CASE FUNCTION and PROMPT/THEN 

const options =  (type) => {
    switch (type) {
        case 'VIEW ALL DEPARTMENTS':{
            db.query('SELECT * FROM department', (err, department) => {
                console.table(department);
                init();
            });
            break;
        } 
        case 'VIEW ALL ROLES':{
            db.query('SELECT * FROM role', (err, role) => {
                console.table(role);
                init();
            });
            break;
        }
        case 'VIEW ALL EMPLOYEES':{
            db.query('SELECT * FROM employee', (err, employee) => {
                console.table(employee);
                init();  
            });
            break;
        }
    };
};

const init = () => {
    prompt({
        type: 'rawlist',
        message: 'Pick an option.',
        choices: [
            'VIEW ALL DEPARTMENTS',
            'VIEW ALL ROLES',
            'VIEW ALL EMPLOYEES',
        ],
        name: 'type'
    })
    .then((answers) => {
        options(answers.type);
    });
}

init();
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
        case 'ADD AN EMPLOYEE':{
            const newEmployee = prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Please enter employee\s first name.',
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Please enter employee\s last name.',
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Please enter employee\s role id.',
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Please enter employee\s manager id.',
            }
        ]).then((newEmployee) => {
            const newEmployeeData  =() => { db.query('INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)', [newEmployee.first_name, newEmployee.last_name, newEmployee.role_id, newEmployee.manager_id])}

                newEmployeeData();
                // console.table(employee);
                init();
            });
            break;
        }

        case 'ADD A DEPARTMENT':{
            const newDepartment = prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter name for Department.',
            }
        ]).then((newDepartment) => {
            const newDepartmentData  =() => { db.query('INSERT INTO department(name) VALUES(?)', [newDepartment.name])}

                newDepartmentData();
                init();
            });
            break;
        }

        case 'ADD A ROLE':{
            const newRole = prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Please enter job title.',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Please enter role salary.',
            },
            {
                type: 'input',
                name: 'department_id',
                message: 'Please add department id.',
            }
        ]).then((newRole) => {
            const newRoleData  =() => { db.query('INSERT INTO role(title, salary, department_id) VALUES(?,?,?)', [newRole.title, newRole.salary, newRole.department_id])}

                newRoleData();
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
            'ADD AN EMPLOYEE',
            'ADD A DEPARTMENT',
            'ADD A ROLE'
        ],
        name: 'type'
    })
    .then((answers) => {
        options(answers.type);
    });
}

init();
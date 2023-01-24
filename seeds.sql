USE employees_db;
INSERT INTO department (name)
VALUES
    ('HR'), 
    ('Accounting'),
    ('I.T.'), 
    ('Sales'),
    ('Customer Relations'); 

INSERT INTO role (title, salary, department_id)
VALUES
    ('Office Clerk', 75000, 1),
    ('Administrator', 100000, 1),
    ('Compliance Analyst', 75000, 1),
    ('Accountant', 75000, 2),
    ('Economic Analyst', 75000, 2),
    ('Acct. Supervisor', 100000, 2),
    ('IT Manager', 100000, 3),
    ('Network Engineer', 75000, 3),
    ('Security', 75000, 3),
    ('Help Desk', 75000, 3),
    ('Sales Associate', 75000, 4),
    ('Sales Lead', 75000, 4),
    ('Accounts Director', 100000, 4),
    ('Support Specialist', 75000, 5),
    ('Phone Operator', 75000, 5),
    ('CRM', 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
    ('Julius', 'Erving', 1, 2),
    ('Tim', 'Duncan', 2, null),
    ('Dwyane', 'Wade', 3, 2),
    ('Candace', 'Parker', 4, 6),
    ('Earvin', 'Johnson', 5, 6),
    ('Chris', 'Paul', 6, null),
    ('Chris', 'Bosh', 7, null),
    ('Maya', 'Moore', 8, 7),
    ('Hakeem', 'Olajuwon', 9, 7),
    ('Kelsey', 'Plum', 10, 7),
    ('Stephen', 'Curry', 11, 13),
    ('Chris', 'Mullin', 12, 13),
    ('Breanna', 'Stewart', 13, null),
    ('Lauren', 'Jackson', 14, 16),
    ('Dirk', 'Nowitzki', 15, 16),
    ('Cheryl', 'Miller', 16, null);
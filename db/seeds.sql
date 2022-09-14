INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Piers', 'Gaveston', 2, 1),
('Charles', 'LeRoi', 6, 5),
('Katherine', 'Mansfield', 5, NULL),
('Dora', 'Carrington', 1, NULL),
('Edward', 'Bellamy', 4, 3),
('Montague', 'Summers', 2, 1),
('Octavia', 'Butler', 5, NULL),
('Unica', 'Zurn', 3, NULL),
('James', 'Fraser', 2, 1),
('Jack', 'London', 6, 5),
('Robert', 'Bruce', 2, 1),
('Peter', 'Greenaway', 4, 3),
('Derek', 'Jarman', 6, 5),
('Paolo', 'Pasolini', 4, 3),
('Heathcote', 'Williams', 2, 1);
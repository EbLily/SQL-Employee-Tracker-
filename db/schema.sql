
DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

\c employeeTracker_db; -- Connect to the newly created database

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    salary INT,
    department_id INT, -- Add this missing column
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  employees_firstName VARCHAR(30) NOT NULL,
  employees_lastName VARCHAR(30) NOT NULL,
  role_id INT, -- Assuming roles are assigned upon creation
  manager_id INT, -- Assuming managers are assigned upon creation
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);







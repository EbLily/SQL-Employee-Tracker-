DROP DATABASE IF EXISTS sqlemployee_db;
CREATE DATABASE sqlemployee_db;

\c sqlemployee_db;

 CREATE TABLE department_list (
   id SERIAL PRIMARY KEY,
   department_name VARCHAR(30)  UNIQUE NOT NULL
 );

 CREATE TABLE role_list (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30)  UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_list_id INT NOT NULL, 
    FOREIGN KEY (department_list_id) REFERENCES department_list(id) ON DELETE CASCADE
 );

 CREATE TABLE employee_list (
   id SERIAL PRIMARY KEY,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_list_id INT NOT NULL,
   manager_id INT, -- NULL if the employee has no manager,
   FOREIGN KEY (role_list_id) REFERENCES role_list(id) ON DELETE CASCADE,
   FOREIGN KEY (manager_id) REFERENCES employee_list(id) ON DELETE SET NULL
 );







# SQL-Employee-Tracker-
## Description 
This interface allows non-developers to easily view and interact with information through 
the command-line of the application stored in an SQL Employee Tracker database.

## Table of Contents:
Overview
The Challenge
Usage
Installation Process
Built With 
What I learned
License

## Overview 

## The Challenge:
Create an interface that allows non-developers to easily view and interact with information
stored in an SQL Employee Tracker database.These interfaces are called content management systems(CMS).

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business.

## Acceptance Criteria 
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Usage Instructions
1. Open the content management systems(CMS) named "SQL-Employee-Tracker".
2. Open integrated terminal on server.js or SQL-Employee-Tracker.
3. Run the command "node server.js". 
4. Use the "UP" and "DOWN" arrow keys to navigate the command line.
5. Click "enter" or "return" on your respective choice.
 
## Installation Process 
1. Clone the repository
2. Install the following:

 
  Inquirer.js:Version 8.2.4
  MySQL
3. Open the repository in any source code editor.
4. Open the integrated terminal for the document and complete the respective installation guides provided above in section (2) to ensure the cloned documentation will operate.

## Built With 
inquirer.js: Version 8.2.4
MySQL
Visual Studio Code

## What I Learned 
1. How to build a command-line application from scratch to manage an employee database,using Node.js,Inquirer, and MySQL.
2. Creating a lengthly content management systems(CMS).

## Link to the Walkthrough Video: 

## SQL Screenshots
![Screenshot of My website](./assets/View%20All%20Employees.PNG)

![Screenshot of My Website](./assets/View%20All%20Department.PNG)

![Screenshot of My Website](./assets/View%20All%20Roles.PNG)

## License
MIT
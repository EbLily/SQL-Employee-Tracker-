 \c sqlemployee_db;
      INSERT INTO department_list(department_name)  
VALUES ('Sales'),
       ('Engineerding'),
       ('Finance'),
       ('Legal');

       INSERT INTO role_list (title,salary,department_list_id)
VALUES  ('Sales Lead',100000,1),
        ('Saleperson',150000,1),
        ('Lead Ingineer', 150000,2),
        ('Software Engineer',120000,2),
        ( 'Accoun Manager',160000,3),
        ('Legat Team Lead',250000,4),
        ('Lawyer,190000',190000, 4);

       INSERT INTO employee_list ( first_name,last_name, role_list_id, manager_id)
VALUES ('John','Doe', 1,null),
       ('Mike ','Chan',2, 1),
       ('Ashley', 'Rodriguez',3, null),
       ('Kevin','Tupik',4,3),
       ('Kunal','Singh',5,null),
       ('Malia', 'Brown',6,5),
       ('Sarah' , 'Lourd',7, null),
       ('Tom' ,'Allen',7,7);

      
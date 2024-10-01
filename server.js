const inquirer = require(`inquirer`);



// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require('pg');
workTime()

// Connect to database
const pool = new Pool(
    {
      // TODO: Enter PostgreSQL username
      user: 'postgres',
      // TODO: Enter PostgreSQL password
      password: 'student',
      
      host: 'localhost',
      
      database: 'sqlemployee_db'
    },
    console.log(`Connected to the \sqlemployee_db database.`)
  )
  
  pool.connect();

function workTime() {
  inquirer
  .prompt([
{
   type: 'list',
   name: 'choice',
   message: 'what would you like to do?',
   choices: [
   
       "view All Employees",
       "view All Departments",
       "view All Roles",
       "Add A Department",
       "Add A Role",
       "Add An Employee",
       "Update Employee Role",
      //  "View Employee by Manager",
      //  "View Employee by Department",
       "quit",
   ],
  },
])
.then((answer) =>{
  //console.log("user selected:    " + answer.choice);
  let choices = answer.choice;

  //console.log("Selection: ", choices);

  switch (choices){
    case "view All Employees":
      viewAllEmployees();
      break;
    case "view All Departments":
      viewAllDepartments();
      break;
    case "view All Roles":
      viewAllRoles();
      break;
    case "Add A Department":
      addADepartment();
      break;
    case "Add A Role":
      addARole();
      break;
    case "Add An Employee":
      addAnEmployee();
      break;
    case "Update Employee Role":
      updateEmployeeRole();
      break;
    case "quit":
      quit();
      break;
    default:
      console.log("Have a nice day");
      break;
  }
 });
}

 function viewAllEmployees() {
  pool.query("SELECT e.id AS employee_id, e.first_name, e.last_name, r.title AS job_title, d.department_name AS department,r.salary, CONCAT(m.first_name,'' ,m.last_name) AS manager_name FROM employee_list e JOIN role_list r ON e.role_list_id = r.id JOIN department_list d ON r.department_list_id = d.id LEFT JOIN employee_list m ON e.manager_id = m.id;",function(err,results) {
    err ? console.log(err) : console.table(results.rows);
    
    workTime();
  });
}


  
function viewAllDepartments() {
pool.query("SELECT id AS department_id, department_name AS department_name FROM department_list;", function (err,results) {
  err ? console.log(err) : console.table(results.rows);
  
 // console.log("data: ", results.rows);
  
  workTime();
});
}

function viewAllRoles() {
  pool.query("SELECT r.id AS role_id, r.title AS job_title, r.salary, d.department_name AS department_name FROM role_list r JOIN department_list d ON r.department_list_id = d.id;", function (err,results) {
    err ? console.log(err) : console.table(results.rows)
    
    workTime();
  });
}

function addADepartment() {
  inquirer
   .prompt([
    {
      type: "input",
      name: "addADepartment",
      message:"enter a department name.",
    },
   ])
   .then((answer) => {
    //console.log(answer.addADepartment);
    const sql =
      `INSERT INTO
             department_list
             (department_name) VALUES
           ($1)`;
    const params = [answer.addADepartment];
    pool.query(sql,params,(err,result)=> {
      if (err) {
        res.status(400).json({error: err.message});
        return;
      }
      //console.log("Department Added...", result);
      res.json({
        message: 'Department Added',
        data: body 
      })
    })

        workTime();
        console.log(answer.name);
  });
}

function addARole() {
    pool.query("SELECT * FROM department_list", function(err,results) {
      if(err) {
        console.log(err);
        return workTime();
      }

      //console.log("Data: ", results.rows);

      inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "Enter the title of the new role:",
         },
         {
          type: "input",
          name: "salary",
          message: "Enter the salary of the new role:",
         },
         {
          type: "list",
          name: "department",
          message: "Select the depatment of the new role:",
          choices: results.rows.map(
          (department)=> department.department_name
         ),
         },
      ])
      .then((answers) => {
      //  console.log('Answers: ', answers)
        const department = results.rows.find(
        (department) => department.department_name === answers.department)
      //    console.log("Dept ID: ", department);
        pool.query(
          `INSERT INTO 
                 role_list
                 (title,salary,department_list_id)
                 VALUES
                 ($1, $2, $3);
                 `, [answers.title, answers.salary, department.id],
            function (err,results) {
              err
                 ? console.log(err)
                 : console.table(`Added: ${answers.title}!!!!`),
                 workTime();
            }
          );

        });
    })
}
      
      
      

  function addAnEmployee() {
        pool.query("SELECT * FROM role_list", function(err,results) {
          if (err) {
            console.log(err);
            return workTime();
          }
        
          const roleChoices = results.rows.map((role) => ({
            value: role.id,
            name: role.title,
          }));
          pool.query("SELECT * FROM employee_list", function (err,employeeResults) {
            if (err) {
              console.log(err);
              return workTime();
            }

            const managerChoices = employeeResults.rows.map((employee) => ({
              value: employee.id,
              name: `${employee.first_name} ${employee.last_name}`,
            }));

            managerChoices.push({ value: null, name: "No Manager"});

            inquirer
            .prompt([
              {
                type: "input",
                name: "firstName",
                message: "Enter the employee's first name.",
               },
              {
                type: "input",
                name: "lastName",
                message: "Enter the  employee's last name.",
              },
              {
                type:"list",
                name: "roleId",
                message: "Select the employee role ",
                choices: roleChoices,
              },
              {
                type: "list",
                name: "managerId",
                message: "select the employee's manager (or 'No Manager'):",
                choices: managerChoices,
              },
             ])
             .then((answers) => {
              console.log("Data: ", answers)
              console.log("employee added: " + answers.roleId);
              const roleId = answers.roleId;
              const empfirst = answers.firstName;
              const empLast = answers.lastName;
              const managerId = answers.managerId;
              pool.query(
                `INSERT INTO employee_list
                (first_name,last_name,
                  role_list_id,manager_id)VALUES
                  ('${empfirst}',
                   '${empLast}',
                   '${roleId}',
                   '${managerId}')`,
                function (err,results) {
                  err
                     ? console.log(err)
                     : console.log('Added: ${anEmployee}!!!!'),
                     workTime();
                     viewAllEmployees();
                }
                  );
          });

              
             });
          })
      }


  function updateEmployeeRole() {
    const queryEmployees =
    "SELECT employee_list.id, employee_list.first_name, employee_list.last_name FROM employee_list"
            // "SELECT employee.id, employee.first_name, employee.last_name, role_list_id FROM employee_list LEFT JOIN roles ON employee.role_list_id = role_list.id";
    const queryRoles = "SELECT * FROM role_list";


    pool.query(queryEmployees, (err, resEmployees) => {
      console.log("resEmployees",resEmployees.rows)
        if (err) throw err;
        pool.query(queryRoles, (err, resRoles) => {
            if (err) throw err;
          inquirer
          .prompt([
            {
              type: "list",
              name: "employee",
              message: "enter the ID of the employee you want to update:",
              choices:resEmployees.rows.map(
                (employee) =>
                  `${employee.first_name} ${employee.last_name}`
              ),
    },
      {
       type: "list",
     name: "role",
     message: "select the new role for the employee:",
     choices: resRoles.rows.map((role) => role.title),
     },
     ])
         
     .then((answers) => {
     const employee = resEmployees.find(
       (employee) => 
 `${employee.first_name} ${employee.last_name}`===
   answers.employee
  );
  const role = resRole.find(
    (role) => role.title === answers.role
  );
  const query = "UPDATE employee SET role_id = $1 WHERE id = 2";
  pool.query(
    query,
    [role.id,employee.id],
    (err,res) => {
      if (err) throw err;
      console.log(
        `Updated ${employee.first_name}${employee.last_name}s role to ${role.title} in the database!`

      );
      workTime();
      }
    );
     });

    });
  });
}




  
    
      
            
          
        
      
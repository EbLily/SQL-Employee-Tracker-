const express = require('express');

// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require('pg');



// create a MySQL connection
// Connect to database
const pool = new Pool(
    {
      // TODO: Enter PostgreSQL username
      user: '',
      // TODO: Enter PostgreSQL password
      password: '',
      
      database: 'employeeTracker_db'
    },
    console.log(`Connected to the employeeTracker_db database.`)
  )
  
  pool.connect();

//   // Create an employee
// app.post('/api/new-employee', ({ body }, res) => {
//   const sql = `INSERT INTO employees (employee_name)
//     VALUES ($1)`;
//   const params = [body.employee_name];

//   pool.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
//   });
// });


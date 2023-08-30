const mysql = require ("mysql2");
require ("dotenv").config()

// Connect to database
const  connection = mysql.createConnection(
    {
        host: "localhost",
        // MySQL username,
        user: process.env.DB_USER,
        // TODO: Add MySQL password here
        password: process.env.DB_PW,
        database: "employeeTracker_db",
    },
);

//connection.connect()

connection.connect(function(error){
    if (error) throw error
    console.log("connected to database");
})

module.exports = connection


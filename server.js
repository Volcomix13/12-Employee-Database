const mysql = require ("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // MySQL username,
        user: "root",
        // TODO: Add MySQL password here
        password: "1234",
        database: "employeeTracker_db",
    },
);
const mysql = require ("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // MySQL username,
        user: "root",
        // TODO: Add MySQL password here
        password: "",
        database: "employeeTracker_db",
    },
);

db.connect(function(error){
    if (error) throw error
});

module.exports = db;
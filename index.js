const inquirer = require('inquirer')
const connection = require('./db/connection')

//const db = require('./db/indexUtilities')
// const mysql = require ("mysql2");

// // Connect to database
// const  connection = mysql.createConnection(
//     {
//         host: "localhost",
//         // MySQL username,
//         user: "root",
//         // TODO: Add MySQL password here
//         password: "1234",
//         database: "employeeTracker_db",
//     },
// );

//connection.connect()



init()



function init() {
    inquirer.prompt([
        {
            message: "Please choose from the options below",
            name: "choices",
            type: "list",
            choices: ["See all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee"],
        }])
        .then(answer => {
            console.log("okay", answer);

            // connection.connect(function(error){
            //     if (error) throw error
            // });

            if (answer.choices === "See all departments") {
                console.log("call function see all depart")
                viewAllDepartments()
            } else if (answer.choices === "View all roles") {
                viewAllRoles()

            } else if (answer.choices === "View all employees") {
                viewAllEmployees()

            } else if (answer.choices === "Add a department") {
                addDepartment()

            } else if (answer.choices === "Add a role") {
                addRole()

            } else if (answer.choices === "Add an employee") {
                addEmployee()

            } else { console.log("Goodbye!") };
        })
}

//init()

function viewAllDepartments() {
    const departmentQuery = "select * from department;";
    connection.query(departmentQuery, (err, res) => {
        if (err) throw err;
        console.table(res)
        init();
    })
};

//function to create table with all roles
function viewAllRoles() {
    const roleQuery = "select * from roles;"
    connection.query(roleQuery, (err, res) => {
        if (err) throw err;
        console.table(res)
        init();
    })
};

//function to create table with all employees
function viewAllEmployees() {
    const employeeQuerry = "select * from employee;";
    connection.query(employeeQuerry, (err, res) => {
        if (err) throw err;
        console.table(res)
        init();
    })
};

//function to add department
function addDepartment() {
    inquirer.prompt({
        type: "input",
        message:"Please add the name of the department to add",
        name:"addDept"
    }).then(function(answer){

        connection.query("INSERT INTO department (name) VALUES(?)", [answer.addDept], (err, res) => {
        if (err) throw err;
        console.table(res)
        init();
        })
    });
}

//function to add role
function addRole() {
    inquirer.prompt([
    {
        type: "input",
        message:"Please add the name of the role to add",
        name:"title"
    },
    {
        type: "input",
        message:"Please enter a salary",
        name:"salary"
    },
    {
        type: "input",
        message:"Please add the name of the department",
        name:"deptartmentId"
    }
])
    .then(function(answer){

        connection.query("INSERT INTO roles (title, salary, departmentId) VALUES(?, ?, ?)", [answer.title, answer.salary, answer.departmentId], (err, res) => {
        if (err) throw err;
        console.table(res)
        init();
        })
    });
}
//function to add employee
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the employee's first name",
            name: "firstName"
        },
        {
            type: "input",
            message: "Please enter the employee's last name",
            name: "lastName"
        },
        {
            type: "input",
            message: "Please enter the employee's role ID",
            name: "roleId"
        },
        {
            type: "input",
            message: "Please enter the employee's manager ID (if applicable)",
            name: "managerId"
        }
    ]).then(function (answer) {
        connection.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
            [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
            (err, res) => {
                if (err) throw err;
                console.table(res);
                init();
            }
        );
    });
}
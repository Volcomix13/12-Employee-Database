// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const db = require ("./config/connection");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "Please choose from the options below",
        name: "departments",
        type: "list",
        choices: ["See all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee"],
    }
    
];



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response)=> {
            if (response.departments === "See all departments"){
                console.log("department")
            }else if (response.departments === "View all roles"){
                console.log("roles")
                init()

            }else if (response.departments === "View all employees"){
                console.log("employees")
                viewAllEmployees()

            }else if (response.departments === "Add a department"){

            }else if (response.departments === "Add a role"){

            }else if (response.departments === "Add an employee"){

            }else {console.log("Please pick something else")};
                
                        
        })
        .catch((error)=>{
            console.log(error)
        })
}

// Function call to initialize app
init();


function viewAllEmployees (){
    const employeeQuerry= "select * from employee;";
    db.query(employeeQuerry, (err, res)=>{
        if (err) throw err;
        console.table(res)
        init()
    })
}

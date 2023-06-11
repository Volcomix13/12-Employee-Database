// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "View all departments? (Please answer yes or no)",
        name: "departments",
        type: "list",
        choices: ["Yes", "No"],
    },

    {
        message: "View all roles? (Please answer yes or no)",
        name: "roles",
        type: "list",
        choices: ["Yes", "No"],
    },
    {
        message: "View all employees? (Please answer yes or no)",
        name: "employees",
        type: "list",
        choices: ["Yes", "No"],
    },
    {
        message: "Add a department",
        name: "addDepartment"
    },
    {
        message: "Add a role",
        name: "addRole"
    },
    {
        message: "Add an employee?",
        name: "addEmployee"
    },
];



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response)=> {

            console.log("got it!")
            fs.writeFile("./README.md", generateMarkdown({...response}), (err)=>//grabs data from the top
            err ? console.log(err) : console.log("Loading data"))
        })
        .catch((error)=>{
            console.log(error)
        })
}

// Function call to initialize app
init();


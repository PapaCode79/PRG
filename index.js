// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message:"what is the title for your project"
    },
    {
        type: "input",
        name: "des",
        message:"what is the description of your project",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(function (answers) {
                console.log(answers)
            })
}

// Function call to initialize app
init();

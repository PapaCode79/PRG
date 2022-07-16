// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message:"What is the title for your project?"
    },
    {
        type: "input",
        name: "description",
        message:"What is the description of your project?"
    },
    {
        type: "input",
        name:"installation",
        message:"How do you install this project?"
    },
    {
        type: "input",
        name: "contribution",
        message:"How do you make contribution to this project?"
    },
    {
        type: "input",
        name: "inplimatation",
        message:"What is the use of this application?"
    },
    {
        type: "input",
        name: "functionality",
        message:"How do I use this application?"
    },
    {
        type: "input",
        name: "issues",
        message:"How do you report issues about project?"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose your license",
        choices: ["MIT","ISC","Apache","GNU"]

    },
    {
        type: "input",
        name: "userName",
        message: "What is the userName for the project?"
    
    },
    {
        type: "input",
        name: "Repo",
        message: "What is the repository for this application?"
    }

];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(function (answers) {
            console.log(answers)
            fs.writeFileSync("./DIST/README.md",generateMarkdown(answers))
            })
}
// Function call to initialize app
init();

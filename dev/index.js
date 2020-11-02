const inquirer = require("inquirer");
const fs = require("fs");



// array of questions for user
const questions = new Promise(function(res,err){
    res(inquirer.prompt([

        {
            type: "input",
            name: "Title",
            message: "What is the name of your Project?"
        },
        {
            type: "input",
            name: "Description",
            message: "Please write a description of your project: "
        },
        {
            type: "input",
            name: "Installation",
            message: "How to install the application: "
        },
        {
            type: "input",
            name: "Usage",
            message: "Usage: "
        },
        {
            type: "list",
            name: "License",
            message: "Licenses ",
            choices: ["MIT", "SCI", "APACHE 2.O", "GPL 3.0", "BSD 3", "NONE"]

        },
        {
            type: "input",
            name: "Contribution",
            message: "Contribution: "
        },
        {
            type: "input",
            name: "tests",
            message: "Tests: "
        },
        {
            type: "input",
            name: "Questions",
            message: "Questions: "
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is your github username: "

        }
     ])
    )
});


// function to write README file
questions.then(function(data){
    const readme = `
# ${data.Title}
## Table of Content 
* [Description](#Description)
* [Installation](#Installation)
* [Instructions](#Instructions)
* [Usage](#Usage)
* [License](#License)
* [Tests](#tests)
* [Questions](#Questions)
* [gitHub](#gitHub)
# Description
${data.Description}
# Installation 
${data.Installation}
# Usage
${data.Usage}
# License
${data.License}
# Contribution
${data.Contribution}
# tests
${data.tests}
# Questions
${data.Questions}
# Github profile
${data.gitHub}
`;
    fs.writeFile('readme.md', readme, function(err){
        if(err){
            return console.log(err);

        }
        console.log('Created the readMe file');
    });
})


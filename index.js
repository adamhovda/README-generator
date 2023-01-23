// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your Github username?'
    }
,
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
,   
    {
        type: `input`,
        name: `title`,
        message: `What the project's title?`
        
    }
,
    {
        type: 'input',
        name: 'install',
        message: ' What are the steps required to install your project?'
    }
,
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    }
,
    {
        type: 'input',
        name: 'contribute',
        message: 'What are the guidelines for contributing?'
    }
,
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests'
    }




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
    err ? console.log(err) : console.log('README created successfully!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        let mdfile = generateMarkdown(data);
        writeToFile('README', mdfile)
    })
}

// Function call to initialize app
init();

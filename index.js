const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ({title, description, installation, usage, contribution, license, github}) => 
`# ${title}

## Table of Contents

## Description

${description}

## Installation Instructions 

${installation}

## Usage

${usage}

## Contribution Guidelines 

${contribution}

## License
${license}

${license.text}


## Questions
    www.github.com/${github}
`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: `What is your project's title?`,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project in detail.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for potential users.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions for potential users.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide users with contribution guidelines.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select one of the following licenses.',
            choices: ['MIT', 'Apache 2.0', 'IBM', 'ISC']
        }
    ])
.then((answers) => {
// TODO: Create a function to write README file
//let fileName = 'README.md'
console.log(answers)
//function writeToFile(fileName, answers) {}
})
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

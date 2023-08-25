const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Assets/utils/generateMarkdown');

module.imports = generateMarkdown;

// TODO: Create an array of questions for user input
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
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username.'
        }
    ])
.then((data) => {
fs.writeFile('genReadme.md', generateMarkdown(data), (err) =>
err ? console.log(err) : console.log('Success!')
);
})
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

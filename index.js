const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Assets/utils/generateMarkdown');

//Inquire prompt, holds an array of questions which are dynamically added to the readme template.
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
            type: 'input',
            name: 'test',
            message: 'Feel free to include tests.',
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
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        }
    ])
.then((data) => {
    //generateMarkdown fxn accepts data and inputs into readme template and outputs completed readme to fs
fs.writeFile('genReadme.md', generateMarkdown(data), (err) =>
err ? console.log(err) : console.log('Success!')
);
})

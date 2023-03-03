const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    'What is the title of your project?',
    'Please provide a brief description of your project.',
    'What are the steps required to install your project?',
    'What are the steps required to use your project?',
    'Which license is your project using?',
    'How can users contibute to the project?',
    'What tests have you provided, and how can users run them?',
    'What is your GitHub username?',
    'What is the email address you would like users to contact with questions?',
    'What would you like the filename to be? Do not include the extension.'
];

function writeToFile(fileName, data) {
    markdown = generateMarkdown(data);
    fs.writeFile('./output/' + fileName, markdown, (err) =>
        err ? console.log(err) : console.log(fileName + ' successfully created in the "output" directory.')
    );
};

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'desc',
                message: questions[1],
            },
            {
                type: 'editor',
                name: 'install',
                message: questions[2],
            },
            {
                type: 'editor',
                name: 'usage',
                message: questions[3],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[4],
                choices: [
                    'NONE',
                    'Apache License 2.0',
                    'Boost Software License 1.0',
                    'GNU AGPLv3',
                    'GNU GPLv3',
                    'GNU LGPLv3',
                    'ISC',
                    'MIT',
                    'Mozilla Public License 2.0',
                    'The Unlicense'
                ],
            },
            {
                type: 'input',
                name: 'contributing',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[6],
            },
            
            {
                type: 'input',
                name: 'username',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
            },
            {
                type: 'input',
                name: 'filename',
                message: questions[9],
            },
        ])
        .then((data) => {
            writeToFile(data.filename + '.md', data);
        })
}

init();

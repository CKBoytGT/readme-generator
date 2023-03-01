const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    'What is the title of your project?',
    'Please provide a brief description of your project.',
    'What are the steps required to install your project?',
    'What are the steps required to use your project?',
    'Please provide the URL or path to a screenshot of your project.',
    'How should users report issues?',
    'How can users contibute to the project?',
    'Please list any credits for your project, ex. collaborators, third-party assets, or tutorials.',
    'Which license is your project using?',
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
                type: 'input',
                name: 'screenshot',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'issues',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'contribute',
                message: questions[6],
            },
            {
                type: 'editor',
                name: 'credits',
                message: questions[7],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[8],
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
                name: 'filename',
                message: questions[9],
            },
        ])
        .then((data) => {
            writeToFile(data.filename + '.md', data);
        })
}

init();

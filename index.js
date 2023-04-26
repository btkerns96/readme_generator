// Included Packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  // Add more questions for installation, usage, contribution, tests, license, GitHub username, and email, etc..
];

// Writes README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) throw err;
    console.log('README.md has been generated successfully!');
  });
}

// Iniatlizes the app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const markdown = generateMarkdown(responses);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
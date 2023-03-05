const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description1',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'description2',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'description3',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'description4',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]);

promptUser()
  .then((answers) => writeFileAsync('professionalREADME.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to professionalREADME.md'))
  .catch((err) => console.error(err));



// const writeFileAsync = util.promisify(fs.writeFile);


// // array of questions for user
// const questions = [
//     '1. Document title', 

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

// const x = generateMarkdown() 
// writeToFile()
//     .then((data) => writeFileAsync('readme1.md', generateMarkdown(data)))


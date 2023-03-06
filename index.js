const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// Creates question and inquire format
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
      name: 'installation',
      message: 'Enter installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'usageVideo',
      message: 'Add video link.',
    },
    {
      type: 'list',
      name: 'licence',
      message: 'Choose a license for your application .',
      choices: [new inquirer.Separator(), "Apache Licence 2.0", "GNU General Public Licence 3.0", "MIT", "Boost Software Licence 1.0", "Mozilla Public Licence 2.0", "The Unlicence"],
      // choices: choicesLicence,
    },
    {
      type: 'input',
      name: 'credCollaborators',
      message: 'List your collaborators, if any (GitHub profile links).',
    },
    {
      type: 'input',
      name: 'credTutorials',
      message: 'Mention tutorials (include links).',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Add contribution guidelines.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Add test instructions.',
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'Enter your GitHub username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
  ]);

// Runs the application
promptUser()
  .then((answers) =>
    writeFileAsync('professionalREADME.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to professionalREADME.md'))
  .catch((err) => console.error(err));
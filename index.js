
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// array of questions for user
const questions = [
{
  type: 'input',
  message: 'Enter your GitHub username: ',
  name: 'username',
},
{
  type: 'input',
  message: 'Enter your project title: ',
  name: 'title',
},
{
  type: 'input',
  message: 'Write a description of your ${`title`}: ',
  name: 'description',
},
{ 
  type: 'input',
  message: 'Installation(s) used: ',
  name: 'installation',
},
{
  type: 'input',
  message: 'Usage of the project: ',
  name: 'usage',
},
{
  type: 'list',
  message: "Select license used",
  choices: ['Academic Free License v3.0', 'Creative Commons Attribution 4.0', 'European Union Public License 1.1', 'GNU Lesser General Public License v3.0', 'PostgreSQL License'],
  name: 'license',
},
{
  type: 'input',
  message: 'Contributing information: ',
  name: 'contributing',
},
{
  type: 'input',
  message: 'Enter any tests: ',
  name: 'tests',
},
{
  type: 'input',
  messages: "Provide your email: ",
  name: 'email'
}
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("Success! Your README.md file has been generated")
  });
}

// function to initialize program
async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    const markdown = generateMarkdown(userResponses)
    await writeToFile('example_README.md', markdown);
  } catch (error) {
    console.log(error);
  }
};

// function call to initialize program
init();

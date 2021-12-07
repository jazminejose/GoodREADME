const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// array of questions for user
const questions = [
{
  type: 'input',
  message: 'Enter your GitHub username: ',
  name: 'username'
},
{
  type: 'input',
  message: 'Enter your project title: ',
  name: 'repository',
},
{
  type: 'input',
  message: 'Write a description of your project: ',
  title: 'description',
},
{ 
  type: 'input',
  message: 'Installation: ',
  name: 'installation',
},
{
  type: 'input',
  message: 'Usage of the project: ',
  name: 'usage'
}
{
  type: 'list',
  message: "Select License used",
  choices: ['MIT License', 'The Unlicense', 'Google 2.0v'],
  name: 
},
{
  type: 'input',
  message: 'Contributing information: ',
  name: ''
}
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

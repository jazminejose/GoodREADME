
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// array of questions for user
const questions = [
{
  type: 'input',
  name: 'username',
  message: 'Enter your GitHub username: ',

},
{
  type: 'input',
  name: 'title',  
  message: 'Enter your project title: ',
},
{
  type: 'input',
  name: 'description',  
  message: 'Write a description of your project: ',
},
{ 
  type: 'input',
  name: 'installation',  
  message: 'Installation(s) used: ',
},
{
  type: 'input',
  name: 'usage',  
  message: 'Usage of the project: ',
},
{
  type: 'list',
  name: 'license',  
  message: "Select license used: ",
  choices: ['Academic Free License v3.0', 'Creative Commons Attribution 4.0', 'European Union Public License 1.1', 'GNU Lesser General Public License v3.0', 'PostgreSQL License'],
},
{
  type: 'input',
  name: 'contributing',  
  message: 'Contributing information: ',
},
{
  type: 'input',
  name: 'tests',  
  message: 'Enter any tests: ',
},
{
  type: 'input',
  name: 'email', 
  message: "Provide your email: ",
}
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("README.md file has been generated.")
  });
}

// function to initialize program
async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    const markdown = generateMarkdown(userResponses)
    await writeToFile('README.md', markdown);
  } catch (error) {
    console.log(error);
  }
};

// function call to initialize program
init();

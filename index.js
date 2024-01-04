// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    // add in readme template
    type: "input",
    name: "name",
    message: "Welcome to the README file generator! To start please provide your name:",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log(
          `Please enter your name! You must credit yourself for your work`
        );
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub Username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log(
          `Please enter your GitHub username! it is essential to show your projects to other developers.`
        );
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log(
          `Please enter your email! For other developers to reach out!`
        );
      }
    },
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log(
          `Your README file must contain a title.`
        );
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter your project description here:',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log(
          `Please add a description to your project.`
        );
      }
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter an installation steps for your project here:',
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log(
          `Please provide installation steps for users to install tools needed for your project`
        );
      }
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter a usage steps for your project here:',
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          `Please provide usage steps for project`
        );
      }
    },
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Please if there are any credits help you with you project add it here:',
    validate: (creditsInput) => {
      if (creditsInput) {
        return true;
      } else {
        console.log(
          `Please provide credits such as documentation or anything help you with your project`
        );
      }
    },
  },
  {
    type: 'list',
    name: 'credits',
    choices: ["MIT", "GPL", "CC--0"],
    validate: (creditsInput) => {
      if (creditsInput) {
        return true;
      } else {
        console.log(
          `Please provide credits such as documentation or anything help you with your project`
        );
      }
    },
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateFile");

// TODO: Create an array of questions for user input
const questions = [
  // inquirer allow us to use choose the type of data we want to add such as input, list, and more
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
    name: 'license',
    choices: ["MIT", "GPL", "CC--0"],
    validate: (creditsInput) => {
      if (creditsInput) {
        return true;
      } else {
        console.log(
          `Please provide credits such as documentation or anything helped you with your project`
        );
      }
    },
  },
  {
    type: 'input',
    name: 'features',
    message: 'What are the features of your project?',
    validate: (featureInput) => {
      if (featureInput) {
        return true;
      } else {
        console.log(
          `Please describe the features of your project, it guaranteed that readers will easily understand the content of your project`
        );
      }
    },
  }
];

// TODO: Create a function to write README file
// Here we start using fs which is node.js library visit node.js fs methods to see all documentation
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data,  (err) => {
    err ? console.log(err) : console.log("README file was created successfully!")
  })
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((answers)=>{
    const readmeData = generateMarkdown(answers);
    writeToFile('output.md', readmeData);
  });
}

// Function call to initialize app
init()

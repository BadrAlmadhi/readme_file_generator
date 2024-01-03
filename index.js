// import inquirer it is node.js library that create command line interface
const inquire = require("inquirer");
// node.js file system
const fs = require("fs");

const generateReadMeFile = require('./generateFile');

const promptUser = () => {
  return inquire.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title for your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Add a description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Add installation instructor to your project:",
    },
    {
      type: "input",
      name: "usage",
      message: "Add the usage information of your project:",
    },
    {
      type: "input",
      name: "credits",
      message:
        "Add collaborators, ex. sources used or any kind of support helped with your project:"
    },
    {
      type: "list",
      name: 'license',
      message: 'Select what license did you use for your project:',
      choices: ['MIT License', 'Apache License 2.0', 'General Public License (GPL) v3.0', 'BSD 2-Clause "Simplified" License'],
    },
    {
      type: "input",
      name: "contribution",
      message: "Add the contribution guideline of your project:",
    },
    {
      type: "input",
      name: "features",
      message: "Add features of your project:",
    },
  ]);
};



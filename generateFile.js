// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return `Invalid license badge`;
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${renderLicenseLink(
      license
    )})`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/mit/";
    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "CC--0":
      return "https://creativecommons.org/publicdomain/zero/1.0/";
    default:
      // Handle cases where the license is not recognized
      return "Invalid license";
  }
};

function renderBadges(badges) {
  switch (badges) {
    case "JavaScript":
      return "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E";
    case "Python":
      return "	https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue";
    case "C++":
      return "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white";
      case "C#":
      return "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white";
    case "CSS":
      return "	https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white";
    case "HTML":
      return "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white";
      case "React":
      return "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB";
    default:
      // Handle cases where the license is not recognized
      return "Invalid license";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ## Description
  ${data.description}

  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}


${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

## Badges
${renderBadges(data.badges)}

## Features
${data.features}

## For contact info

If you have any questions about the project please reach out:

GitHub : https://github.com/${data.github}
Email: ${data.email}

`;
}

module.exports = generateMarkdown;

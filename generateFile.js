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

## License
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

## Badges
${data.badges}

## Features
${data.features}

## For contact info

If you have any questions about the project please reach out:

GitHub : https://github.com/${data.github}
Email: ${data.email}

`;
}

module.exports = generateMarkdown;

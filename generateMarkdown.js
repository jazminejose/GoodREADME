// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Badge for GitHub commit activity](https://img.shields.io/github/commit-activity/w/${data.username}/${data.repo}?style=for-the-badge)
  [![License: MIT](https://img.shields.io/badge/License-${data.license}?style=for-the-badge)](https://opensource.org/licenses/${data.license}?style=for-the-badge)


## Table of Content(s)

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
Run the following command: 
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license}

## Questions
For any questions, please contact me:<br>
Email - ${data.email}<br>
Github - https://github.com/${data.username}<br>
`;
}

module.exports = generateMarkdown;

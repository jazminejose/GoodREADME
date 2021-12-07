// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Badge for GitHub commit activity](https://img.shields.io/github/commit-activity/w/${data.username}/${data.repo}?style=for-the-badge)
  ![Badge for GitHub commit activity](https://img.shields.io/npm/l/${data.license}?color=yellow&style=for-the-badge)

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

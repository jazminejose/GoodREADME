// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
For any questions, please contact me:
Github: https://github.com/${data.username}<br>
Email: ${data.email}

`;
}

module.exports = generateMarkdown;

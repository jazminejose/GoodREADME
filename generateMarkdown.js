// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Badge for GitHub commit activity](https://img.shields.io/github/commit-activity/w/${data.username}/${data.repo}?style=for-the-badge)
  [![License: MIT](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})


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

Link: <a href="https://drive.google.com/file/d/13JzX8Y1hP4uKZF0iXTSlgWuoYD_oUCiX/view">Walkthrough Video</a>

<img src="https://user-images.githubusercontent.com/92974218/145131744-db1e2c8c-eb85-46ab-874a-e2547f108840.png">

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

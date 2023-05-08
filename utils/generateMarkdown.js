function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/github/license/${data.githubUsername}/${data.repoName}?style=flat-square)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under the ${license} License. For more information, please visit [${renderLicenseLink(license)}](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
  }
  return 'This project is not licensed.';
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.title} ${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please reach out to me on [GitHub](https://github.com/${data.githubUsername}) or email me at ${data.email}.
`;

}

module.exports = generateMarkdown;
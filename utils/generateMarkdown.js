function renderLicenseBadge(license) {
  // Add code to render the license badge
}

function renderLicenseLink(license) {
  // Add code to render the license link
}

function renderLicenseSection(license) {
  // Add code to render the license section
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
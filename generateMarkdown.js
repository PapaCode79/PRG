// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![badge](https://img.shields.io/badge/license-${data.license}-green)
![badge](https://img.shields.io/github/last-commit/${data.userName}/${data.Repo})
![badge](https://img.shields.io/github/issues/${data.userName}/${data.Repo})
## description
${data.description}

## installation 
${data.installation}

## contribution
${data.contribution}

## inplimatation
${data.inplimatation}

## functionality
${data.functionality}

## issues
${data.issues}
`;
}

module.exports = generateMarkdown;

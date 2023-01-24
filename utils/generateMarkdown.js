let link;
let badge;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache license 2.0' :
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;    
        case 'GNU General Public License v3.0' :
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;  
        case 'MIT License' :
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;    
        
    
    }
}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'Apache license 2.0' :
            link = 'https://www.apache.org/licenses/LICENSE-2.0';
        break;    
        case 'GNU General Public License v3.0' :
            link = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
        break;  
        case 'MIT License' :
            link = 'https://opensource.org/licenses/MIT';
        break;    
        
    
    }
}


// TODO: Create a function to generate markdown for README

const generateMarkdown = (data) => {
renderLicenseLink(data.license);
renderLicenseBadge(data.license)

return `
# ${data.title}

${badge}

## Description

${data.description}

## Table Of Contents

- Installation

- Usage

- License

- Contributing

- Tests

- Questions

## Installation

${data.install}

## Usage

${data.usage}

## License

${data.license}

${link}


## Contributing

${data.contribute}

## Tests

${data.tests}

## Questions

`



}

module.exports = generateMarkdown;



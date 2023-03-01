const licenseLinks = {
  'Apache License 2.0': {
    badge: 'Apache_2.0-blue.svg',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  'Boost Software License 1.0': {
    badge: 'Boost_1.0-lightblue.svg',
    link: 'https://www.boost.org/LICENSE_1_0.txt'
  },
  'GNU AGPLv3': {
    badge: 'AGPL_v3-blue.svg',
    link: 'https://www.gnu.org/licenses/agpl-3.0'
  },
  'GNU GPLv3': {
    badge: 'GPL_v3-blue.svg',
    link: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  'GNU LGPLv3': {
    badge: 'LGPL_v3-blue.svg',
    link: 'https://www.gnu.org/licenses/lgpl-3.0'
  },
  'ISC': {
    badge: 'ISC-blue.svg',
    link: 'https://opensource.org/licenses/ISC'
    
  },
  'MIT': {
    badge: 'MIT-yellow.svg',
    link: 'https://opensource.org/licenses/MIT'
  },
  'Mozilla Public License 2.0': {
    badge: 'MPL_2.0-brightgreen.svg',
    link: 'https://opensource.org/licenses/MPL-2.0'
  },
  'The Unlicense': {
    badge: 'Unlicense-blue.svg',
    link: 'http://unlicense.org/'
  }
};

function renderLicenseBadge(license) {
  if (license !== 'NONE') {
    return `https://img.shields.io/badge/License-${licenseLinks[license].badge}`;
  } else {
    return '';
  };
};

function renderLicenseLink(license) {
  if (license !== 'NONE') {
    return licenseLinks[license].link;
  } else {
    return '';
  };
};

function renderLicenseSection(license) {
  if (license !== 'NONE') {
    return `
## License

[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
  } else {
    return '';
  };
};

function generateMarkdown(data) {
  return `# ${data.title}

${data.desc}

## Installation

${data.install}

## Usage

${data.usage}

## Screenshot

![Screenshot](${data.screenshot})

## Reporting Issues

${data.issues}

## Contributing

${data.contribute}

## Credits

${data.credits}
${renderLicenseSection(data.license)}
`;
};

module.exports = generateMarkdown;

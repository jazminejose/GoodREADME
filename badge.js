//function to place badge 
//NOTES - ERROR: BADGE IS NOT DEFINED
let Badge = (license) => {
  if (license !== 'none') {
    return `[![Licence : ${license}](https://img.shields.io/badge/License-${license}.svg)](https://opensource.org/licenses/${license})`
  }
  else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})`
  }
  else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-${data.license}_2.0-blue.svg)](https://opensource.org/licenses/${data.license}-2.0)`
  }
  else if (license === 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-${data.license}-blue.svg)](http://${data.license}.org/)`
  }
  else {
    return ``
  }
}
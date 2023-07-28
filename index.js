let inquirer = require('inquirer')
let fs = require ('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { escape } = require('querystring');

let licenses = {bsd:'BSD Zero-Clause license',gpl:'GNU General Public License family',mit:'MIT'}

inquirer
  .prompt([
	  {
		  name: 'name',
		  message: 'Whats the name of the project?',
		  type: 'input'

	  },
	  
	  {
		  name: 'description',
		  message: 'Give a description.',
		  type: 'input'

	  },
	  {
		  name: 'usage',
		  message: 'How do you use this program?',
		  type: 'input'

	  },
	  {
		  name: 'license',
		  message: 'What license would you like?',
		  type: 'list',
		  choices: ['mit','gpl','bsd']

	  },
	  {
		  name: 'instructions',
		  message: 'How do you run it?',
		  type: 'input'

	  },
	  {
		  name: 'github',
		  message: 'Github link?',
		  type: 'input'

	  },
	  {
		  name: 'email',
		  message: 'Whats your email?',
		  type: 'input'

	  },
	  {

		  name: 'contributions',
		  message: 'Any contributions that was made?',
		  type: 'input'
	  },

	  {

		  name: 'testing',
		  message: 'Any tests available?',
		  type: 'input'
	  }
  ])
  .then((answers) => {
let response =`
# ${answers.name}

## Table of Contents

- [Description](#description)

- [Usage](#usage)

- [Contributions](#contributions)

- [Testing](#testing)

- [Links](#links)

## Description

${answers.description}

## Installation

${answers.installation}

## Usage
	
${answers.usage}


## Contributions

${answers.contributions}

## Testing

${answers.testing}

## Links
	
[Github](${answers.github})
	
[Email](${answers.email})

## License

${licenses[answers.license]}
`;

fs.writeFile('README.md',response, (err) => { if(err) {throw err;}}  ) ;

		    })
  .catch((error) => {
    if (error.isTtyError) {
	    console.log('Unable to render.')
    } else {
	    console.log('An error has occured preventing a normal process.')
    }
  });



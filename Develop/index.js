// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer =  require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'project title?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for your Repository?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
    },
    {
        type: 'input',
        name: 'description',
        message: 'project description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'how do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can people contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'provide Github Usernames',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide email to contact you with any question',

    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(path.join(process.cwd(), fileName), data);

// }
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};
 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);
    var fileContent = generateMarkdown(answer);
    writeToFile(fileContent)
    });
}

// Function call to initialize app
init();

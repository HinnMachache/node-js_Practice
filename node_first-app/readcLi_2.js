const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What\'s your name?'
    }
];

inquirer.prompt(questions).then(answers => {
    console.log(`Hello ${answers.name}`);
});

for (let num = 0; num <= 100; num++){
    console.log(num)
}
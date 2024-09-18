const { stdin, stdout } = require('process')
const readline = require('readline')

const readL = readline.createInterface(
    {
        input: stdin,
        output: stdout
    }
);

readL.question("What is your name? ", answer => {
    console.log(`Hello ${answer}\n`);
    readL.close()
});

for (let num = 0; num <=100; num++) {
    console.log(num)
}

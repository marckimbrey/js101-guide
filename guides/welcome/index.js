const exec = require('child_process').exec;
const fs = require('fs');
const path = require("path");
const nyan = require('nyansole');
const chalk = require("chalk");
const error = chalk.bold.red;
const SOLUTION_FILENAME = path.join(__dirname, '/solution/index.js')
const HELLO_FILENAME = path.join(__dirname, '../../hello.js')

exec('node ' + HELLO_FILENAME, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  const helloOut = stdout;

  exec('node ' + SOLUTION_FILENAME, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    const solutionOut = stdout;

    if (solutionOut === helloOut) {
      console.log(chalk.yellow('Well done! You passed the welcome exercise with flying colours!'));
      const cat = new nyan();
      cat.start();
    } else {
      console.log(chalk.yellow('\nOh noes! You has failed the welcome guide!\n'));
      console.log(chalk.green('Expected: ' + helloOut));
      console.log(chalk.red('Actual: ' + solutionOut));
    }
   });
});

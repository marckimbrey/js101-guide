const exec = require('child_process').exec;
var fs = require('fs');
var path = require("path");
var nyan = require('nyansole');
var chalk = require("chalk");
var error = chalk.bold.red;
var guide = process.argv[2];
var GUIDE_DIR = path.join(__dirname, '/guides/');
var EXERCISE_FILENAME = 'exercise.js';
var replyFilename = path.join(__dirname, guide + '.js');

exec('node ' + replyFilename, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  var replyOut = stdout;

  exec('node ' + GUIDE_DIR + guide + '/' + EXERCISE_FILENAME, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    var exerciseOut = stdout;

    if (exerciseOut !== replyOut) {

      console.log(chalk.yellow('Oh noes! You has failed the ' + guide + ' guide!\n'));
      console.log(chalk.green('Expected: ' + replyOut));
      console.log(chalk.red('Actual: ' + exerciseOut));
    } else {
      console.log(chalk.yellow('Well done! you passed the ' + guide + ' guide with flying colours!'));
      cat = new nyan();
      cat.start();
    }
   });
});

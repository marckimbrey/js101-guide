const exec = require('child_process').exec;
const fs = require('fs');
const path = require("path");
const nyan = require('nyansole');
const chalk = require("chalk");
const error = chalk.bold.red;
const SOLUTION_FILENAME = path.join(__dirname, '/solution/index.js')
const HELLO_FILENAME = path.join(__dirname, '../../hello.js')
const getFileContents = (filename) => {
    return new Promise((resolve, reject) => {
        exec('node ' + filename, (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          resolve(stdout);
        })
    })
}

Promise.all([getFileContents(SOLUTION_FILENAME), getFileContents(HELLO_FILENAME)]).then(values => {
    if (values[0] === values[1]) {
        console.log('WIN!')
    } else {
        console.log('FAIL!')
    }
    console.log(values)
}, reason => {
    console.log(reason)
});

// getFileContents(SOLUTION_FILENAME).then(
//     (response) => {
//         const solution = response
//         console.log('I haz the solution!', solution)
//         getFileContents(HELLO_FILENAME).then(
//             (response) => {
//                 const submission = response
//                 console.log('I haz the submission!', submission)
//             },
//             (error) => console.log('errorz', error)
//         )
//     },
//     (error) => console.log('errorz', error)
// )

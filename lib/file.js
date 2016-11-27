const exec = require('child_process').exec;
const chalk = require("chalk");

class File {

    getFileOutput(filePath) {
        return new Promise((resolve, reject) => {
            exec('node ' + filePath, (error, stdout, stderr) => {
              if (error) {
                console.error(`exec error: ${error}`);
                return;
              }
              resolve(stdout);
            })
        })
    }

    compareFileOutput(path1, path2, success, fail) {
        const output1 = this.getFileOutput(path1)
        const output2 = this.getFileOutput(path2)

        return Promise.all([output1, output2]).then(values => {
            if (values[0] === values[1]) {
                console.log(chalk.green('Well done, solution correct!'))
            } else {
                console.log(chalk.green('Expected: ' + values[0]))
                console.log(chalk.red('Actual: ' + values[1]))
            }
        }, reason => {
            console.log(reason)
        });
    }
}

module.exports = File

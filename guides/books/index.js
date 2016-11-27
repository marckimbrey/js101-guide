const path = require("path");
const exec = require('child_process').exec;
var Guide = require('../../lib/guide');
var guide = new Guide(__dirname)


guide.run = function() {
    this.renderReadMe(() => {
        console.log('BOOKS CALLBACK.............................BOOKS CB')
        // const questionPath = path.join(__dirname, 'question.js')
        // exec('node ' + questionPath, (error, stdout, stderr) => {
        //   if (error) {
        //     console.error(`exec error: ${error}`);
        //     return;
        //   }
        //   console.log('Q COMPLETE')
        // });
    })
    this.debug()
}

module.exports = guide

// process.stdin.resume();


// const question = 'wtf?'
// const answer = 'srsly'
// rl.question('wtf?', (answer) => {
//     console.log('ttly')
// })
// rl.close();

// process.stdin.setEncoding('utf8');
// var util = require('util');
//
// process.stdin.on('data', function (text) {
//   console.log('received data:', util.inspect(text));
//   if (text === 'quit\n') {
//     done();
//   }
// });
//
// function done() {
//   console.log('Now that process.stdin is paused, there is nothing more to do.');
//   process.exit();
// }

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function Ask(question, answer, callback) {
    // console.log('rl', rl)
    rl.question(question, (answer) => {
        callback()
    })
    rl.close();
}

module.exports = Ask

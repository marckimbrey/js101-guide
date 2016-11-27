const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class Question {
    ask(question, callback) {

        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        })
        
        rl.question(question, (answer) => {
            callback(answer)
        })
        rl.close();
    }
}


module.exports = Question

const readline = require('readline');
 chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gettingStarted = {
    intro ()  {
        console.log('\nYou take the ' + chalk.blue('blue pill') + ', the story ends.  You wake up in your bed and believe whatever you want to believe.\n');
        console.log('You take the ' + chalk.red('red pill') + ', you stay in Wonderland, and I show you how deep the rabbit hole goes...\n');
    },
    get question() {
        return 'Would you like the ' + chalk.blue('blue pill') + ' or the ' + chalk.red('red pill') + '?\n\nEnter the colour: '
    },
    process(answer) {
        const action = {
            red() {
                console.log(chalk.yellow('\nWell done! you have made a wise decision!\n'))
                console.log(chalk.yellow('Loading the matrix...'))
                setTimeout(() => require('matrix-rain'), 5000)
            },
            blue() {
                console.log(chalk.red('\nOh noes! you\'re not ready.  Come back later!\n'))
                console.log(chalk.red('Hang on a moment...'))
                setTimeout(() => require('nyan'), 5000)
            },
            default() {
                console.log("Please enter 'red' or 'blue'")
            }
        }
        return (action[answer] || action['default'])()
    },
    run() {
        this.intro()
        rl.question(this.question, this.process)
    }
}

gettingStarted.run()

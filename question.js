const readline = require('readline');
var chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\nYou take the ' + chalk.blue('blue pill') + ', the story ends.  You wake up in your bed and believe whatever you want to believe.\n');
console.log('You take the ' + chalk.red('red pill') + ', you stay in Wonderland, and I show you how deep the rabbit hole goes...\n');

rl.question('Would you like the ' + chalk.blue('blue pill') + ' or the ' + chalk.red('red pill') + '?\n', (answer) => {
  switch (answer) {
      case 'red':
          console.log(chalk.yellow('\nWell done! you have made a wise decision!\n'));
          console.log(chalk.yellow('Loading matrix...'));
          delayedRequire("matrix-rain");
          break;
      case 'blue':
          console.log(chalk.red('\nOh noes! you\'re not ready.  Come back later!\n'));
          console.log(chalk.red('Wait for it...'));
          delayedRequire('nyan');
          break;
      default:
          console.log("Please enter 'red' or 'blue'");
          break;

  }

  rl.close();
});

function delayedRequire(module) {
    setTimeout(() => require(module), 7000)
}

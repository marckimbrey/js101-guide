const readline = require('readline');
 chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = 'Which book would you like to know more about?'

// rl.question(question, (answer) => {
//   switch (answer) {
//       case 'ninja':
//           console.log(chalk.yellow('\nAre you ready to go deep!?\n'));
//           break;
//       default:
//           console.log('Default question response')
//           break;
//
//   }
//
//   rl.close();
// });

console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n', 'QUESTION.....', question)

const Question = require('../../lib/question');

const question = new Question()

question.ask('Orly?', (answer) => {
    switch (answer) {
        case 'yarly':
            console.log('YaRly!')
            break;
        case 'narly':
            console.log('NaRly!')
            break;
        default:
            console.log('sRsly?')
    }
})

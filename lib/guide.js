var slugify = require('slugify');
var path = require("path");
var fs = require('fs');
var marked = require('marked');
var spawn = require('child_process').spawn
var ask = require('./ask');
var readline = require('readline');
var TerminalRenderer = require('marked-terminal');

marked.setOptions({
  renderer: new TerminalRenderer()
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function Guide(__dirname) {
    this.dir = __dirname
}

Guide.prototype.run = function() {
    // console.log('\n\nParent:Guide:run')
    // console.log('Parent:Guide:render:README')
    // this.openURL('http://www.google.com')
}

Guide.prototype.renderReadMe = function(callback) {
    const filePath = path.join(this.dir, 'guide.md')
    fs.readFile(filePath, 'utf8', function(err, contents) {
        console.log(marked(contents));
        callback()
    });
}

Guide.prototype.ask = function(question, answer, callback) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    console.log('PROCESS')
    console.log('\n\n\nAsk', question)
    // ask(question, answer, callback)

    rl.question('question', (answer) => {
        // callback()
    })
    rl.close();
}

Guide.prototype.openURL = function(url) {
    spawn('open', [url]);
}

Guide.prototype.debug = function() {
    console.log('DEBUG', this)
}

module.exports = Guide

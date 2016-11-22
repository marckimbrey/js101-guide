var Menu = require('terminal-menu');
var menu = Menu({ width: 29, x: 4, y: 2 });
var guides = require('./menu.json')
var fs = require('fs');
var path = require("path");
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');
var slugify = require('slugify');
var GUIDE_DIR = path.join(__dirname, '/guides/');
var GUIDE_FILENAME = 'guide.md';
 
marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
});

menu.reset();
menu.write('JS101 GUIDE\n');
menu.write('-------------------------\n');

guides.forEach(function(guide){
    menu.add(guide);
});

menu.on('select', function (label, i) {
    menu.close();
    printGuide(label);
});
process.stdin.pipe(menu.createStream()).pipe(process.stdout);

process.stdin.setRawMode(true);
menu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
});

function printGuide(label) {
    var guideDir = slugify(label).toLowerCase();
    var guideFilename = path.join(GUIDE_DIR, guideDir + '/' + GUIDE_FILENAME);

    fs.readFile(guideFilename, 'utf8', function(err, contents) {
        console.log(marked(contents));
    });
}

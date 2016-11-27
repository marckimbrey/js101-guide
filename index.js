var Menu = require('terminal-menu');
var menu = Menu({ width: 29, x: 4, y: 2 });
var guides = require('./menu.json')
var path = require("path");
var fs = require('fs');
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');
var GuideManager = require('./lib/guideManager')
var guide = require('./guides/example/index');
var GUIDE_DIR = path.join(__dirname, 'guides')

const gm = new GuideManager(guides, GUIDE_DIR, menu)

gm.runMenu()
// console.log('gm', gm, gm instanceof GuideManager)

// marked.setOptions({
//   renderer: new TerminalRenderer()
// });
//
// menu.reset();
// menu.write('JS101 GUIDE\n');
// menu.write('-------------------------\n');
//
// guides.forEach(function(guide){
//     menu.add(guide);
// });
//
// menu.on('select', function (label, i) {
//     const gm = new GuideManager(GUIDE_DIR)
//     gm.run(label)
//
//     // menu.close();
// });
// process.stdin.pipe(menu.createStream()).pipe(process.stdout);
// process.stdin.pipe('foobar').pipe(process.stdout);
//
// process.stdin.setRawMode(true);
// menu.on('close', function () {
//     process.stdin.setRawMode(false);
//     process.stdin.end();
// });

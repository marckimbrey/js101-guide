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

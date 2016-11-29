var Menu = require('terminal-menu');
var menu = Menu({ width: 29, x: 4, y: 2 });
var items = require('./menu.json')
var path = require("path");
var fs = require('fs');
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');
var Guide = require('./lib/guide')
var GUIDE_DIR = path.join(__dirname, 'guides')

const guide = new Guide(GUIDE_DIR, items, menu)

guide.runMenu()

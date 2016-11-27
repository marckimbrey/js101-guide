var slugify = require('slugify');
var path = require("path");
var fs = require('fs');
var marked = require('marked');

function GuideManager(name, baseDir) {

    var name = name
    var baseDir = baseDir
    var GUIDE_FILENAME = 'guide.js'

    this.getName = function() {
        return name
    }

    this.getBaseDir = function() {
        return baseDir
    }

    this.filePath = function() {
        const guideDir = slugify(name).toLowerCase()
        return path.join(baseDir, guideDir, GUIDE_FILENAME)
    }

    this.render = function() {
        fs.readFile(this.filePath(), 'utf8', function(err, contents) {
            console.log(marked(contents));
        });
    }

    this.run = function() {
        console.log('\n\nParent:Guide:Run')
        this.openURL('http://www.google.com')
    }

    this.openURL = function(url) {
        console.log('Opening ' + url)
    }
}

module.exports = GuideManager

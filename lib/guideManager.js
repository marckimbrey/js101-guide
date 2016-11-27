var slugify = require('slugify');
var path = require("path");
var fs = require('fs');
var marked = require('marked');

function GuideManager(baseDir) {

    var baseDir = baseDir
    var GUIDE_FILENAME = 'index.js'

    this.guideFilePath = function(label) {
        const guideDir = slugify(label).toLowerCase()
        return path.join(baseDir, guideDir, GUIDE_FILENAME)
    }

    this.run = function(label) {
        const guideFilePath = this.guideFilePath(label)
        const guide = require(guideFilePath)
        guide.run()
    }
}

module.exports = GuideManager

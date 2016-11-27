var Menu = require('terminal-menu');
var slugify = require('slugify');
var path = require("path");
var fs = require('fs');
var marked = require('marked');

class GuideManager {

    constructor(guides, baseDir, menu) {
        this.baseDir = baseDir
        this.guides = guides
        this.menu = menu
    }

    runMenu() {
        this.menu.reset();
        this.menu.write('JS101 GUIDE\n');
        this.menu.write('-------------------------\n');

        this.guides.forEach(guide => {
            this.menu.add(guide)
        })

        process.stdin.pipe(this.menu.createStream()).pipe(process.stdout)
        process.stdin.setRawMode(true)

        this.menu.on('select', (label, i) => {
            this.run(label)
            // menu.close();
        });

        menu.on('close', () => {
            process.stdin.setRawMode(false);
            process.stdin.end();
        });
    }

    guideFilePath(label) {
        const guideDir = slugify(label).toLowerCase()
        return path.join(this.baseDir, guideDir, 'index.js')
    }

    run(label) {
        const guideFilePath = this.guideFilePath(label)
        const guide = require(guideFilePath)
        guide.run()
    }
}

module.exports = GuideManager

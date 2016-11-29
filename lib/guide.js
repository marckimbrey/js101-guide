var Menu = require('terminal-menu');
var slugify = require('slugify');
var path = require("path");
var fs = require('fs');
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');

marked.setOptions({
  renderer: new TerminalRenderer()
});

/**
 *  Guide Manager runs the terminal menu and renders the selected guide README file
 */
class GuideManager {

    constructor(baseDir, items, menu) {
        this.baseDir = baseDir
        this.items = items
        this.menu = menu
    }

    runMenu() {
        this.menu.reset();
        this.menu.write('\n');
        this.menu.write('JS101 GUIDE\n');
        this.menu.write('-------------------------\n');

        this.items.forEach(guide => {
            this.menu.add(guide)
        })

        process.stdin.pipe(this.menu.createStream()).pipe(process.stdout)
        process.stdin.setRawMode(true)

        this.menu.on('select', (label, i) => {
            this.renderReadMe(label)
            this.menu.close();
        });

        this.menu.on('close', () => {
            process.stdin.setRawMode(false);
            process.stdin.end();
        });
    }

    readMePath(label) {
        const guideDir = slugify(label).toLowerCase()
        return path.join(this.baseDir, guideDir, 'guide.md')
    }

    renderReadMe(label) {
        const readMePath = this.readMePath(label)
        fs.readFile(readMePath, 'utf8', function(err, contents) {
            console.log(marked(contents));
        })
    }
}

module.exports = GuideManager

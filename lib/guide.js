var slugify = require('slugify');
var path = require("path");

class Guide {

    constructor(name, dir) {
        this.name = name
        this.dir = dir
    }

    get filePath() {
        const filename = slugify(this.name).toLowerCase() + '.md'

        return path.join(this.dir, filename)
    }

    get fileContents() {
        return 'Example file contents'
    }
}

export default Guide

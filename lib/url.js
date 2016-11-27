const spawn = require('child_process').spawn

class Url {
    open(url) {
        spawn('open', [url]);
    }
}

module.exports = Url

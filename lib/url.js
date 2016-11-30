'use strict'
const openBrowser = require("open")

class Url {
    open(url) {
        console.log("Url",url);
        openBrowser(url);
    }
}

module.exports = Url

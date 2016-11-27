var Guide = require('../../lib/guide');
var guide = new Guide(__dirname)

guide.run = function() {
    this.renderReadMe(() => console.log('cb'))
    this.openURL('http://secrets-of-js-ninja.com')
    this.debug()
}

module.exports = guide

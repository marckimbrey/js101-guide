var EventEmitter = require('events').EventEmitter;

class EventBus extends EventEmitter {
    constructor() {
        // this.foo = 'I haz event bus'
    }
    fire() {
        this.emit('fire', 'pew', 'pow')
    }
}

var eb = new EventBus()

console.log('Event Bus', eb)

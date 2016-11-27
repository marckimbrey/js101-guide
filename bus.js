const util = require('util');
var EventEmitter = require('events')

class EventBus extends EventEmitter {
    constructor() {
        super()
        setInterval(() => this.foo(), 1000)
    }
    doSomething() {
        return 'doSomething'
    }
    foo() {
        console.log('emit fire event');
        this.emit('foo', 'pew', 'pow')
    }
}

class Luke extends EventEmitter {
    constructor() {
        super()
    }
    duck() {
        console.log('*Luke ducks*')
    }
}

const bus = new EventBus()
const luke = new Luke()

console.log('typeof', typeof(bus))
console.log('instanceof', bus instanceof EventEmitter)
console.log('bus: ' + bus)
console.log('method: ' + bus.doSomething())

// bus.on('foo', (shot1, shot2) => console.log(shot1, shot2))
luke.on('foo', (shot1, shot2) => {
    console.log(shot1, shot2)
    luke.duck()
})

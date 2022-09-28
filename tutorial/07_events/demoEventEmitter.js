var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler
var myEventHandler = function () {
    console.log('I hear a scream!');
}

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');
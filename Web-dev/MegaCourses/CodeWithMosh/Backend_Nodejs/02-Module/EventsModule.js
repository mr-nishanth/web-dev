const EventEmitter = require('events'); // EventEmitter is class

const emitter = new EventEmitter();

// Order is important [Register,Raise]

// Register a listener
// addListener aliases on

/*
emitter.on('messageLogged', function () {
    console.log('Listener message logged');
});

// Raise an event
emitter.emit('messageLogged');
*/

const Logger = require('./reqLogger');
const logger = new Logger();
// Event arguments
logger.on('messageLogged', (args) => {
    console.log('Listener message logged', args);
});

// Raise an event
// emitter.emit('messageLogged', { id: 1, url: 'http://' });

logger.log('Request logging');

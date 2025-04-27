import { EventEmitter } from 'events';

// Used for real time events

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' + name);
}

function goodbyeHandler() {
    console.log('goodbye world');
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet', 'Frankie');
myEmitter.emit('goodbye');

// Error handling
myEmitter.on('error', (err) => {
    console.log('error occured: ' + err);
})

// Simulate error
myEmitter.emit('error', new Error('something wrong'));
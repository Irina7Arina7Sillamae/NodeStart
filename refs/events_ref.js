const http = require('events');
const { EventEmitter } = require('stream');

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger()

logger.on('message', data => {
    console.log(data)
})

logger.log('First')
logger.log('Second')
logger.log('Third')
const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const Logger = new Logger()

Logger.on('message', data => {
    console.log(data)
})

Logger.log('Hello!!!')
Logger.log('Hello!!!')
Logger.log('Hello!!!')

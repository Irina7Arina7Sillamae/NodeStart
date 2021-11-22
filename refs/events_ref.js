//Класс определяется и выставляется модулем:EventEmitterevents
const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
//Синхронно вызывает каждого из прослушивателей, зарегистрированных для события с именем , 
//в том порядке, в том порядке, в который они были зарегистрированы, передавая каждому из предоставленных аргументов.
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger()

logger.on('message', data => {
    console.log(data)
})

logger.log('Hello!!!')
logger.log('Hello!!!')
logger.log('Hello!!!')

const EventEmmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmmitter {
    log(msg) {
        this.emit("message", {id: uuid.v4(), msg})
    }
}

// module.exports = Logger

// const Logger = require('./Logger')

const logger = new Logger()

logger.on('message', data => console.log("Received this message:", data))

logger.log('Start server')
logger.log('Response 200')
logger.log('404 Not found')
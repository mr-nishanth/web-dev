const {logEvents} = require("./logger")

// Override default express error handler
const errorHandler = (err,req,res,next) =>{
    
    logEvents(message=`${err.name}\t${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,logFileName='errLog.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500 // Server error

    res.status(status)

    res.json({message:err.message})
}

module.exports = errorHandler
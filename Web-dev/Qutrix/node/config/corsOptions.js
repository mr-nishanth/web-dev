const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin:(origin,callback) =>{
        //if(allowedOrigins.has(origin)){} / !origin for postman testing purposes
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            // callback(error object,success object)
            callback(null,true)
        }else{
            callback(new Error("Not allowed by CORS"))
        }
    },
    
    // Access Control Allow Credentials Header
    credentials: true,
    
    optionsSuccessStatus: 200,
}

module.exports = corsOptions
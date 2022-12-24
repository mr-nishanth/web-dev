const limitter = require('express-rate-limit');


// Whole application
app.use(
    limitter({
        // 5000 -> 5sec
        windowMs: 5000,
        // max amount of requests allowed for 5sec
        max: 5,
        message: {
            code: 429,
            message: "❌ Too many requests❌"
        }
    })
)
// max 5 requests allowed for 5sec

// Particular routes
const registerLimiter = limitter({
    // 5mins
    windowMs: 5 * 60 * 1000,
    // 1min
    windowMs: 1 * 60 * 1000,

    max: 2
})

// only 2 requests allowed for 5mins
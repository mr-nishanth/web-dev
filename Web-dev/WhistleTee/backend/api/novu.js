const { Novu } = require('@novu/node')
const API_KEY = process.env.NOVU_API_KEY
console.log(API_KEY)
const novu = new Novu(API_KEY);

function sendNotification(todoHeading, email, id) {
    console.log(todoHeading, email, id)
    console.log("sendNotification")
    novu.trigger('whistle-tee', {
        to: {
            subscriberId: id,
            email: email
        },
        payload: {
            todoHeading: todoHeading
        }
    })

}

module.exports = sendNotification
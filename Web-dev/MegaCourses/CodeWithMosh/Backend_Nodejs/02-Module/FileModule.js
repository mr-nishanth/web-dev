const fs = require('fs');

// SYNC
// const files = fs.readdirSync('./');
// console.log(files); // returns array

// ASYNC

fs.readdir('.', function (error, success) {
    if (error) console.log('Error', error);
    console.log(success); // returns array
});

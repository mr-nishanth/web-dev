/*
const url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

// module.exports.log = log; // export  object

// module.exports.endPointUrl = url;

module.exports = log; // export single function

console.log('Module from logger', module);
*/

/*
//! Note: Module wrapper function
(function (exports, require, module, __filename, __dirname) {
    const url = 'http://mylogger.io/log';

    console.log('File name: ' + __filename);
    console.log('File path: ' + __dirname);

    function log(message) {
        // Send an HTTP request
        console.log(message);
    }

    // module.exports.log = log; // export  object

    // module.exports.endPointUrl = url;

    module.exports = log; // export single function
    // or
    module.exports.log = log;
    exports.log = log;

    // we cannot write
    // exports = log; // this exports reference to module.exports , we cannot change(overwrite) exports reference , seems to be assign log function to exports

    console.log('Module from logger', module);
})();

*/

const url = 'http://mylogger.io/log';
console.log('File name ' + __filename);
console.log('File Path ' + __dirname);
function log(message) {
    // Send an HTTP request
    console.log(message);
}

// module.exports.log = log; // export  object

// module.exports.endPointUrl = url;

module.exports = log; // export single function

console.log('Module from logger', module);

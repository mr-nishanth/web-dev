const os = require('os');

console.log(`Total memory: ${os.totalmem / 1024} GB`);
console.log(`Free memory: ${os.freemem / 1024} GB`);
console.log(`NetworkInterface: ${JSON.stringify(os.networkInterfaces())}`);
console.log(`User information ${JSON.stringify(os.userInfo())}`);
console.log(`User Username ${JSON.stringify(os.userInfo().username)}`);

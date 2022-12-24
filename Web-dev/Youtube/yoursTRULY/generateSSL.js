const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');

const app = express();

app.use("/", (req, res, next) => {
    res.send("Hello from SSL server")
})




/**
 * mkdir cert
 * cd cert
 * install openSSL
 *  openssl 
 * 
 * Steps for SSL certificate generation
 * 1. Generate a private key
 * 2. Create a CSR (certificate signing request) using the private key
 * 3. Generate the SSL certification from CSR
 * 
 * -> 1. Generate a private key
 *  
 *          openssl genrsa -out key.pem
 * 
 * -> 2. Create a certificate signing request 
 *          
 *          openssl req -new -key key.pem -out csr.pem
 *          IN
 *          SKIP
 *          SKIP
 *          Organization name
 *          SKIP
 *          SKIP
 *          EMAIL
 *          SKIP......
 * 
 * -> 3. Generate the SSL certification from CSR
 *      
 *           openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem 
 * 
 * OPTIONAL: delete csr.pem file
 *
 * 
 * open chrome flags
 * 
 * chrome://flags
 * search allow invalid certificates -> enabled
 */



// Let's create a SSL server
const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
}, app)

sslServer.listen(4000, console.log(`Secure server listening`))





























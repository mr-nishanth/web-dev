
const express = require('express');
const serveIndex = require('serve-index');

const app = express();


app.use(
    "/ftp",
    express.static("public/ftp"),
    serveIndex("public/ftp", {
        // can pass hidden:true also to serve hidden files
        icons: true
    })
)

app.listen(8080, () => console.log(`List on 8080`));






/**
 * create public
 * 
 *  inside public folder create ftp
 *      paste the folder and files you want to serve inside public folder
 * 
 * npm install serve-index
 * 
 */
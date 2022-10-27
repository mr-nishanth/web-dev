
const path = require('path');
const home = (req,res) =>{
    res.sendFile(path.join(__dirname, '..' , "views","quiz","index.html"));
}


module.exports = {
    home,
}

const path = require('path');
const home = (req,res) =>{
    res.sendFile(path.join(__dirname, '..' , "views","wordHunt","index.html"));
}



module.exports = {
    home,
}
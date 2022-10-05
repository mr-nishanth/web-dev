const router = require('express').Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..' , "views","index.html"));
})

module.exports = router;
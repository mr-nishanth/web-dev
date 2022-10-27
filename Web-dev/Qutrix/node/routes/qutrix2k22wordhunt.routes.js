const router = require('express').Router()


const qutrix2k22wordhunt = require("../controllers/qutrix2k22wordHunt")



router.get("/",qutrix2k22wordhunt.home)

router.all("*", (req, res) => {
    res.status(404)
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"))
    } else if (req.accepts("json")) {
        res.json({ message: "404 Not Found" })
    } else {
        res.type("txt").send("404 Not Found")
    }
})

module.exports = router
const express = require('express');

const app = express();
const PORT = 8000



app.listen(process.env.PORT || PORT, (err) => {
    if (err) console.log(err)
    console.log(`Application listening on http://localhost:${process.env.PORT || PORT}`)
})
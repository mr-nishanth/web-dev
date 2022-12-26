const path = require("path")
require("dotenv").config({ path: path.join(__dirname, "config", "config.env") })
const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "public")))

const storeItems = new Map([
    [
        1, { priceCents: 10000, name: "Learn Stripe" }
    ],
    [
        2, { priceCents: 20000, name: "Learn Node" }
    ]
])


app.listen(process.env.PORT || 3500, () => {
    console.log(`🚀🚀🚀 is ready to launch at ${process.env.PORT} port`)
})
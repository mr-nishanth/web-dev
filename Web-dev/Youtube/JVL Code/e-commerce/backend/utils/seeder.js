const dotenv = require("dotenv")
const path = require("path")
dotenv.config({ path: path.join(__dirname, "..", "config", "config.env") })

const connectDB = require("../helpers/databases")

const products = require("../data/products.json")
const Product = require("../model/product.model")

// Database connection
connectDB()


const seedProducts = async () => {
    try {
        const deletedProducts = await Product.deleteMany({})
        console.log(`➖➖ All Products ➖➖ `)
        const insertedProducts = await Product.insertMany(products)
        console.log(`➕➕ All Products ➕➕ `)
    } catch (error) {
        console.log(error.message)
    }
    process.exit()
}

seedProducts()
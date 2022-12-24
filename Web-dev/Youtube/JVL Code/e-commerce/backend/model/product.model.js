const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        default: 0.0
    },
    default: {
        type: String,
        required: [true, "Please provide a product description"],
    },
    rating: {
        type: String,
        default: 0
    },
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please provide a product category"],
        enum: {
            values: [
                "Electronics",
                "Mobile Phones",
                "Laptops",
                "Accessories",
                "Headphones",
                "Foods",
                "Books",
                "Clothes/Shoes",
                "Beauty/Health",
                "Sports",
                "Outdoor",
                "Home"
            ],
            message: "Please select correct category"
        }
    },
    seller: {
        type: String,
        required: [true, "Please provide product seller"]
    },
    stock: {
        type: Number,
        required: [true, "Please provide product stock"],
        max: [20, "Product stock cannot exceed 20"]
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    numOfReviews: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: () => Date.now()
    }
})

const productModel = mongoose.model("Product", productSchema)
module.exports = productModel
const Product = require("../model/product.model")
const ErrorHandler = require("../utils/errorHandler")

/**
 * @description Create a new product
 * @param {/api/v1/product/new} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.newProduct = async (req, res, next) => {

    try {
        const product = await Product.create(req.body)
        return res.status(201).json({
            success: true,
            product
        })
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }

}

/**
 * @description Get all products
 * @param {/api/v1/products} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        return res.status(201).json({
            success: true,
            count: products.length,
            products,

        })
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}


/**
 * @description Get single products
 * @param {/api/v1/product/:id} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.getSingleProduct = async (req, res, next) => {
    const id = req.params.id

    try {
        const product = await Product.findById(id)

        if (!product) {
            // return res.status(404).json(
            // {
            //     success: false,
            //     message: "Product not found"
            // }
            // )
            return next(new ErrorHandler("Product not found", 400))
        }
        return res.status(200).json({
            success: true,
            product,
        })

    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
}


/**
 * @description Update Products
 * @param {/api/v1/product/:id} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.updateProduct = async (req, res, next) => {
    const id = req.params.id

    try {
        let product = await Product.findById(id)

        if (!product) return res.status(404).json(
            {
                success: false,
                message: "Product not found"
            }
        )

        product = await Product.findByIdAndUpdate(
            id, req.body, { new: true, runValidators: true }
        )

        return res.status(200).json({
            success: true,
            product,
        })

    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
}


/**
 * @description Delete a product
 * @param {/api/v1/product/:id} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.deleteProduct = async (req, res, next) => {
    const id = req.params.id

    try {
        let product = await Product.findById(id)

        if (!product) return res.status(404).json(
            {
                success: false,
                message: "Product not found"
            }
        )

        product = await Product.findByIdAndDelete(
            id
        )

        return res.status(200).json({
            success: true,
            message: "Product Deleted"
        })

    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
}


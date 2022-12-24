const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/product.controllers')

const productRouter = require('express').Router()

// method one from create a routes/router
productRouter.route("/products").get(getProducts)
productRouter.route("/product/new").post(newProduct)

// method two from create a routes/router
// productRouter.get("/product/:id", getSingleProduct)
// productRouter.put("/product/:id", updateProduct)
productRouter.route("/product/:id")
    .get(getSingleProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = productRouter
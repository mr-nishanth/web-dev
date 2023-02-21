const Product = require("../models/product.model");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");
/**
 * @description Create a new product
 * @param {/api/v1/product/new} req
 * @param {*} res
 * @param {*} next
 */

// exports.newProduct = async (req, res, next) => {

//     try {
//         const product = await Product.create(req.body)
//         return res.status(201).json({
//             success: true,
//             product
//         })
//     } catch (error) {
//         return res.status(500).json({ success: false, error: error })
//     }

// }
exports.newProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

/**
 * @description Get all products
 * @param {/api/v1/products} req
 * @param {*} res
 * @param {*} next
 */

exports.getProducts = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 2;
  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .paginate(resultPerPage);
  const products = await apiFeatures.query;
  return res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
});

/**
 * @description Get single products
 * @param {/api/v1/product/:id} req
 * @param {*} res
 * @param {*} next
 */

exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;

  const product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  return res.status(200).json({
    success: true,
    product,
  });
});

/**
 * @description Update Products
 * @param {/api/v1/product/:id} req
 * @param {*} res
 * @param {*} next
 */

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  let product = await Product.findById(id);

  if (!product)
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });

  product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    success: true,
    product,
  });
});

/**
 * @description Delete a product
 * @param {/api/v1/product/:id} req
 * @param {*} res
 * @param {*} next
 */

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  let product = await Product.findById(id);

  if (!product)
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });

  product = await Product.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: "Product Deleted",
  });
});

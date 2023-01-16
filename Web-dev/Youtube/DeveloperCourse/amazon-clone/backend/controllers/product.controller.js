import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { Product } from "../models/Product.model.js";

// !==============================================================
export const createProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).json({ newProduct });
  } catch (error) {
    throw new Error(error);
  }
});

// export const createProduct = asyncHandler(async(req,res)=>{})
// export const createProduct = asyncHandler(async(req,res)=>{})
// export const createProduct = asyncHandler(async(req,res)=>{})

/*

try {
    
  } catch (error) {
    throw new Error(error);
  }

 */

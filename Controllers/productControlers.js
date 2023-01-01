const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const listProduct = asyncHandler(async (req, res) => {
  const product = await Product.find()

  if (product) {
    res.status(201).json({product});
  } else {
    res.status(400).json({error:"error"});
    throw new Error("Error Occurd");
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const { pic, namecar, factory, distance, skills, price,status } = req.body;

  const product = await Product.create({
    pic,
    namecar,
    factory,
    skills,
    distance,
    price,
    status
  });
  if (product) {
    res.status(201).json({
      _id: product._id,
      namecar: product.namecar,
      factory: product.factory,
      skills: product.skills,
      distance: product.distance,
      price: product.price,
      status:product.status
    });
  } else {
    res.status(400);
    throw new Error("Error Occurd");
  }
});

module.exports = { createProduct, listProduct };

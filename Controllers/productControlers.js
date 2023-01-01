const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const createProduct = asyncHandler(async (req, res) => {
  const { pic, namecar, factory, distance, skills } = req.body;

  const product = await Product.create({
    pic,
    namecar,
    factory,
    skills,
    distance,
  });
  if (product) {
    res.status(201).json({
      _id: product._id,
      namecar: product.namecar,
      factory: product.factory,
      skills: product.skills,
      distance: product.distance,
    });
  } else {
    res.status(400);
    throw new Error("Error Occurd");
  }
});

module.exports = { createProduct };

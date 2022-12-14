const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const uuid = require("uuid");
const listProduct = asyncHandler(async (req, res) => {
  const product = await Product.find();
  if (product) {
    res.status(201).json(product.map((item) => item));
    // product.map((item) => {
    //   res.status(201).json({
    //     id: item._id,
    //     namecar: item.namecar,
    //     factory: item.factory,
    //     distance: item.distance,
    //     skills: item.skills,
    //     pic: item.pic,
    //     price: item.price,
    //     status: item.status,
    //     data: item.data,
    //   });
    // });
  } else {
    res.status(400).json({ error: "error" });
    throw new Error("Error Occurd");
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const { pic, namecar, factory, distance, skills, price, status } = req.body;
  const id = uuid.v4();
  const product = await Product.create({
    pic,
    namecar,
    factory,
    skills,
    distance,
    price,
    status,
    id,
  });
  if (product) {
    res.status(201).json({
      _id: product._id,
      namecar: product.namecar,
      factory: product.factory,
      skills: product.skills,
      distance: product.distance,
      price: product.price,
      status: product.status,
      id: product.id,
    });
  } else {
    res.status(400);
    throw new Error("Error Occurd");
  }
});

const DeleteProduct = asyncHandler(async (req, res) => {
  const porduct = await Product.deleteOne({ id: req.params.id });

  // if (porduct.user.toString() !== req.user._id.toString()) {
  //   res.status(401);
  //   throw new Error("you cant perform this action");
  // }
  if (porduct) {
    // await porduct.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

const UpdateProduct = asyncHandler(async (req, res) => {
  const { pic, namecar, factory, distance, skills, price, status } = req.body;
  const product = await Product.findOne({ id: req.params.id });
  if (product) {
    product.namecar = namecar;
    product.factory = factory;
    product.skills = skills;
    product.pic = pic;
    product.distance = distance;
    product.price = price;
    product.status = status;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error(`Note not found ${id}`);
  }
});
module.exports = { createProduct, listProduct, DeleteProduct, UpdateProduct };

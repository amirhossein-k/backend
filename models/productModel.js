const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const productSchema = {
  namecar: {
    type: String,
    required: true,
  },
  factory: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
            type: Date,
            default: Date.now
      }
};

const Product = mongoose.model("product", productSchema);
module.exports = Product;

const express = require("express");
const {
  createProduct,
  listProduct,
} = require("../Controllers/productControlers");
const router = express.Router();

router.route("/newproduct").post(createProduct);
router.route("/list").get(listProduct);

module.exports = router;

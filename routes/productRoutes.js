const express = require("express");
const { createProduct } = require("../Controllers/productControlers");
const router = express.Router();

router.route("/newproduct").post(createProduct);

module.exports = router;

const express = require("express");
const { productController } = require("../Controllers/productController");
const router = express.Router();

router.post('/products', productController);

module.exports = router;
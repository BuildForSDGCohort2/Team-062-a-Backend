const express = require("express");
const { addProductController, findProductsController, getAllProductsController } = require("../Controllers/productController");
const router = express.Router();
const auth  = require("../Middlewares/auth");

router.post('/products', auth, addProductController);
router.get('/products/:productId', findProductsController);
router.get('/products', getAllProductsController);

module.exports = router;
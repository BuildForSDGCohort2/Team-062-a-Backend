const express = require("express");
const { productController, findAllProductsController, getAllProductsController } = require("../Controllers/productController");
const router = express.Router();
const { getToken, auth} = require("../Middlewares");

router.post('/products', getToken, auth, addProductController);
router.post('/products/:name', findAllProductsController);
router.get('/products', getAllProductsController);

module.exports = router;
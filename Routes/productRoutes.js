const express = require("express");
const { productController } = require("../Controllers/productController");
const router = express.Router();
const { getToken, auth} = require("../Middlewares");

router.post('/products', getToken, auth,productController);

module.exports = router;
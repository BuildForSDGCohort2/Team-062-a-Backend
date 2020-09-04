const express = require("express");
const { cartController } = require("../Controllers/cartController");
const router = express.Router();
const auth = require("../Middlewares/auth");

router.post("/cart", auth, cartController);

module.exports = router;

const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "documentation.html"));
});

module.exports = router;

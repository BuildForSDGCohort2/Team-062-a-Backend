const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

const connectDatabase = (url, cb) => {
  mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.connection.once("open", () => {
    console.log("database connected");
    cb();
  });
};

let db = {};

const models = fs.readdirSync(path.join(__dirname, "Models"));

models.forEach((file) => {
  const model = require(path.join(__dirname, "Models", file));
  db[model.modelName] = model;
});

module.exports = {
  connectDatabase,
  ...db,
};

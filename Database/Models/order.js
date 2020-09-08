const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  //TODO: I will work on this tomorrow
});
const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;

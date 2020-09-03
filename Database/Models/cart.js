const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CartSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
    products: [
      {
        productId: Number,
        quantity: Number,
        name: String,
        price: Number,
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const CartModel = mongoose.model("Order", CartSchema);

module.exports = CartModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    properties:{
        type: String,
        required: true
    }
});

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;


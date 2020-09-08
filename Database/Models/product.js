const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    properties: {
        type: String,

    },
    price: {
        type: Number,
    },
    from: {
        type: String, 
    }
}, {timestamps: true});

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;


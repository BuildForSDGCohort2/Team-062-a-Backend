const { Product } = require('../Database');

exports.productController = async (req, res, next) => {
    const {name , properties} = req.body;
    console.log(name, properties);
    try{
        const newProduct = new Product();
        newProduct.name = name;
        newProduct.properties = properties;
        await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Product successfully added to Inventory"
        });
    }
    catch(e){
        next(e);
    }
}
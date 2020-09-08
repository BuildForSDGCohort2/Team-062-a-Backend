const { Product } = require('../Database');

exports.addProductController = async (req, res, next) => {
    const data = req.body;
    try {
        const product = new Product(data);
        await product.save();
        return res.status(201).json({
            success: true,
            message: "Product successfully added to Inventory",
            product
        });
    }
    catch (e) {
        next(e);
    }
}


exports.getAllProductsController= async (req, res, next) => {
    try {
        const allProducts = await Product.find({})

        return res.status(200).json({
            success: true,
            products: allProducts
        });
    } catch (e) {
        next(e)
    }
}

exports.findProductsController = async (req, res, next) => {
    const productId = req.params.productId
    try {
        const product  = await Product.findById(productId)
        return res.status(200).json({
            success: true,
            product
        });
    } catch (e) {
        next(e)
    }
   
}
const { Product } = require('../Database');

exports.addProductController = async (req, res, next) => {
    const { name, properties } = req.body;
    try {
        const newProduct = new Product();
        newProduct.name = name;
        newProduct.properties = properties;
        await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Product successfully added to Inventory"
        });
    }
    catch (e) {
        next(e);
    }
}
exports.findAllProductsController = async (req, res, next) => {
    const { name } = req.body;
    try {
        const findProduct = new Product();
        await findProduct.find({ name: name }, function (err, data, next) {
            if (!name || !price) next(err);
            done(null, res.json({ data }))
        })
    } catch (e) {
        next(e)
    }
}

exports.getAllProductsController = (req, res, next) => {
        const findAllProducts = new Product(); 
        findAllProducts.find()
            .then((result) => res.send(result))
            .catch((err) => next(err))
}
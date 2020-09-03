const { Cart } = require("../Database");

exports.cartController = async (req, res, next) => {
  const { productId, quantity, name, price } = req.body;

  const userId = req.user.userId;

  try {
    //retrieve Cart for user with User ID userId
    let cart = await Cart.findOne({ userId });

    if (cart) {
      //check if cart exists for user
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        //Check if product already exists in the cart, update the quantity
        let productItem = cart.products[itemIndex];
        productItem.quantity = quantity;
        cart.products[itemIndex] = productItem;
      } else {
        //product does not exists in cart, add new item
        cart.products.push({ productId, quantity, name, price });
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      //no cart for user, create new cart
      const newCart = await Cart.create({
        userId,
        products: [{ productId, quantity, name, price }],
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    next(err);
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

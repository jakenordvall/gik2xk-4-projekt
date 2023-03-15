const { async } = require("validate.js");
const db = require("../models");
async function getCartById(cartId) {
  try {
    const cart = await db.cart.findOne({
      where: { id: cartId },
      include: [
        {
          model: db.product,
          attributes: ["id", "title", "price", "description", "imageUrl"],
        },
      ],
    });

    return cart;
  } catch (error) {
    return error;
  }
}

async function deleteCartProduct(cartId, productId) {
  try {
    const cart = await db.cart.findByPk(cartId);
    const product = await db.product.findByPk(productId);

    // Find the shoppingCartRow record
    const cartRow = await db.shoppingCartRow.findOne({
      where: { cartId, productId },
    });

    if (cartRow) {
      // Update the cart's total and amount values
      await cart.decrement({
        total: product.price * cartRow.quantity,
        amount: cartRow.quantity,
      });

      // Delete the shoppingCartRow record
      await cartRow.destroy();
      return { message: `Product with ID: ${productId} removed from cart` };
    } else {
      throw new Error(`Product with ID: ${productId} not found in cart`);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = { getCartById, deleteCartProduct };

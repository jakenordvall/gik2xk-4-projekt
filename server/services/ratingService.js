const db = require("../models");
async function createRating(productId, rating) {
  try {
    const product = await db.product.findByPk(productId);

    if (!product) {
      throw new Error("Product not found");
    }

    const newRating = await db.rating.create({
      rating: rating,
      productId: productId,
    });
    return newRating;
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = { createRating };

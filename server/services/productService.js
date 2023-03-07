const db = require("../models");
async function getAllProducts() {
  try {
    const allProducts = await db.product.findAll({ include: [db.rating] });
    return allProducts;
  } catch (error) {
    return error;
  }
}

async function getByProduct(productId) {
  try {
    const product = await db.product.findOne({
      where: { id: productId },
      include: [db.rating],
    });

    return product;
  } catch (error) {
    return error;
  }
}

module.exports = { getAllProducts, getByProduct };

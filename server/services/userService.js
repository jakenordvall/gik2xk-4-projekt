const db = require("../models");

async function getAll() {
  try {
    const allUsers = await db.user.findAll({ include: [db.cart] });
    return allUsers;
  } catch (error) {
    return error;
  }
}

async function getByUser(userId) {
  try {
    const user = await db.user.findOne({
      where: { id: userId },
      include: [db.cart],
    });

    return user;
  } catch (error) {
    return error;
  }
}

module.exports = { getAll, getByUser };

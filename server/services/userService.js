const { async } = require("validate.js");
const db = require("../models");

async function getAll() {
  try {
    const allUsers = await db.user.findAll({ include: [db.cart] });
    return allUsers;
  } catch (error) {
    return error;
  }
}

async function getByUser(firstName) {
  try {
    const user = await db.user.findOne({
      where: { firstName: firstName },
      include: [db.cart],
    });

    return user;
  } catch (error) {
    return error;
  }
}

module.exports = { getAll, getByUser };

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

module.exports = { getAll };

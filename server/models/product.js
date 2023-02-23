const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
};

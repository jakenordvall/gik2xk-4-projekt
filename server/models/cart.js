const { BOOLEAN } = require("sequelize");
const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "cart",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.INTEGER(1),
        defaultValue: 0,
      },
      total: {
        type: DataTypes.FLOAT(1),
        defaultValue: 0,
      },

      payed: {
        type: BOOLEAN,
        defaultValue: false,
      },
    },
    { underscored: true }
  );
};

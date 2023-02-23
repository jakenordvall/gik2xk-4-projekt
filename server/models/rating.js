const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "rating",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      rating: {
        type: DataTypes.FLOAT(1),
        allowNull: false,
        validate: {
          min: 0,
          max: 5,
        },
      },
    },
    { underscored: true }
  );
};

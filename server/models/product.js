const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      imageUrl: {
        type: DataTypes.STRING(500),
        validate: {
          isUrl: true,
        },
      },
    },
    { underscored: true }
  );
};

const { BOOLEAN } = require("sequelize");
const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      admin: {
        type: BOOLEAN,
        defaultValue: false,
      },
    },
    { underscored: true, onDelete: "CASCADE" }
  );
};

const Sequelize = require("sequelize");

const sequelize = require("./../database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;

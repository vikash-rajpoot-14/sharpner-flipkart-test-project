const Sequelize = require("sequelize");

const sequelize = new Sequelize("test", "root", "Minato@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

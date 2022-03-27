const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    "students",
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: "mysql",
        host: process.env.HOST,
    }
);

module.exports = sequelize;

/**
 * config/config.js
 * Arquivo responsável pela conexão.
 */
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_DIALECT,
  operatorsAliases: 0,
  logging: false,

  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
};

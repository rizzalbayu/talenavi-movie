const config = require('./config/database');

const Sequelize = require('sequelize');
const enviroment = process.env.NODE_ENV;
const sequelize = new Sequelize(config[enviroment].url, {
  dialect: config[enviroment].dialect,
  operatorsAliases: false,

  pool: {
    max: 500,
    min: 30,
    acquire: 60000,
    idle: 30000,
  },
});

const db = {};

db.sequelize = sequelize;

module.exports = db;

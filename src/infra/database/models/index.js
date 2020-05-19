const { ModelsLoader } = require('src/infra/sequelize');
const Sequelize = require('sequelize');
const { database: config } = require('config/database');


// eslint-disable-next-line no-console
const logDatabaseError = () => console.error('Database configuration not found, disabling database.');

const sequelize = new Sequelize(config);

const loadDb = () => (config
  ? ModelsLoader.load({
    sequelize,
    baseFolder: __dirname,
  })
  : logDatabaseError());

module.exports = loadDb();

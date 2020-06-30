const corsMiddleware = require('./cors.middleware');
const httpOptionsMiddleware = require('./httpOptions.middleware');
const loggerMiddleware = require('./logger.middleware');
const authenticationMiddleware = require('./authentication.middleware');

module.exports = {
  corsMiddleware,
  httpOptionsMiddleware,
  loggerMiddleware,
  authenticationMiddleware,
};

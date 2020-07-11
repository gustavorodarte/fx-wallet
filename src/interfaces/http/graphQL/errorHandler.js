const { Just } = require('crocks/Maybe');

// TO IMPROVE
module.exports = ({ logger }) => ({ error }) => Just(logger.error(`${error.message}: ${error.details}`))
  .map(() => new Error(error));

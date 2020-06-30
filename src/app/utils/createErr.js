
const { Err } = require('crocks/Result');

const createErr = (message) => (details) => Err({ message, details });

module.exports = createErr;

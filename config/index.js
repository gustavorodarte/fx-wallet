const fs = require('fs');
const path = require('path');
const apollo = require('./apollo');
const express = require('./express');
const database = require('./database');


function loadDbConfig() {
  const ENV = process.env.NODE_ENV || 'development';
  const hasDbConfig = fs.existsSync(path.join(__dirname, './database.js'));
  return hasDbConfig ? database[ENV] : {};
}


module.exports = {
  apollo,
  express,
  database: loadDbConfig(),
};

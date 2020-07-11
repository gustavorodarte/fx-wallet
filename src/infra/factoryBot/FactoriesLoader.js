/* eslint-disable fp/no-unused-expression */
/* eslint-disable import/no-dynamic-require */

const fs = require('fs');
const path = require('path');

module.exports = {
  load({ factoryGirl, baseFolder, models }) {
    fs
      .readdirSync(baseFolder)
      .filter((file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
      // eslint-disable-next-line fp/no-nil
      .forEach((file) => {
        const factoryPath = path.join(baseFolder, file);
        // eslint-disable-next-line global-require
        const factory = require(factoryPath);
        factory(factoryGirl, models);
      });

    return factoryGirl;
  },
};

/* eslint-disable fp/no-nil */
/* eslint-disable no-undef */
/* eslint-disable fp/no-unused-expression */

const container = require('src/container');

container.resolve('database');

const cleanDatabase = require('specs/support/cleanDatabase');

beforeEach(async () => {
  await cleanDatabase();
});

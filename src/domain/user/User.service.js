const { fromPromise } = require('crocks/Async');
const Result = require('crocks/Result');
const bcrypt = require('bcrypt');
const curry = require('crocks/helpers/curry');

const { Err } = Result;

const encryptPassword = (user) => {
  const hashPassword = fromPromise(() => bcrypt.hash(user.password, 3));
  return hashPassword().map((password) => ({
    ...user,
    password,
  }));
};

const validPassword = (inputPassword, user) => {
  const isValidPassword = bcrypt.compareSync(inputPassword, user.password);
  return isValidPassword
    ? user
    : Err('Unable to Login');
};

module.exports = {
  encryptPassword,
  validPassword: curry(validPassword),
};

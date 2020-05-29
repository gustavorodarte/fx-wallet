const { fromPromise } = require('crocks/Async');
const Result = require('crocks/Result');
const bcrypt = require('bcrypt');


const { Err, Ok } = Result;

const encryptPassword = (user) => {
  const hashPassword = fromPromise(() => bcrypt.hash(user.password, 3));
  return hashPassword().map((password) => ({
    ...user,
    password,
  }));
};

const validPassword = (user) => (
  (bcrypt.compareSync(password, theUser.password))
    ? Ok(user)
    : Err('Unable to Login')
);

module.exports = {
  encryptPassword,
  validPassword,
};

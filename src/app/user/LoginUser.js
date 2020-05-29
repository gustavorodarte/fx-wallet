const Result = require('crocks/Result');
const pipe = require('crocks/helpers/pipe');
const either = require('crocks/pointfree/either');
const compose = require('crocks/helpers/compose');
const setProp = require('crocks/helpers/setProp');
const objOf = require('crocks/helpers/objOf');

const { Err } = Result;

const createErr = (message) => (error) => Err({ message, error });

const hasError = setProp('hasError');

const buildResult = (key, isError) => compose(hasError(isError), objOf(key));

const createResult = either(
  buildResult('error', true),
  buildResult('result', false),
);

module.exports = ({
  userDomainService: {
    validPassword,
  },
  userRepository,
  authService: {
    sigIn,
  },
}) => (userData) => {
  const checkInputPassword = validPassword(userData.password);
  return userRepository.getOneByEmail(userData)
    .bimap(createErr('Unable to Login'), pipe(checkInputPassword, sigIn)).map(createResult);
};

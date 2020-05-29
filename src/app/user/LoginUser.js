const Result = require('crocks/Result');
const pipe = require('crocks/helpers/pipe');

const { Err } = Result;

const createErr = (message) => Err(message);

module.exports = ({
  userDomainService: {
    validPassword,
  },
  userRepository,
  authService: {
    sigIn,
  },
}) => (userData) => (
  userRepository.getOneByEmail(userData)
    .fork(createErr('Unable to Login'), pipe(validPassword, sigIn)));

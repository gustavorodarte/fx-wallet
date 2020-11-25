const pipe = require('crocks/helpers/pipe');

const {
  UserDomainService,
} = require('src/domain/user');

const { createOperationOutput, createErr } = require('../utils');

module.exports = ({
  userRepository,
  authService: {
    sigIn,
  },
}) => (userData) => {
  const checkInputPassword = UserDomainService.validPassword(userData.password);
  return userRepository.getOneByEmail(userData)
    .bimap(createErr('Unable to Login'), pipe(checkInputPassword, sigIn)).map(createOperationOutput);
};

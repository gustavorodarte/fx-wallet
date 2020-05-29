const Async = require('crocks/Async');

const { Resolved } = Async;

module.exports = ({
  userDomainFactory,
  userDomainService: {
    encryptPassword,
  },
  userRepository,
  authService: {
    sigIn,
  },
}) => (userData) => (
  Resolved(userDomainFactory(userData))
    .chain(encryptPassword)
    .chain(userRepository.add)
    .map(sigIn)
);

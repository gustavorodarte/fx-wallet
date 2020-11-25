const Async = require('crocks/Async');
const { Err } = require('crocks/Result');
const {
  UserDomainFactory,
  UserDomainService,
} = require('src/domain/user');

const { createOperationOutput } = require('../utils');

const { Resolved } = Async;

module.exports = ({
  userRepository,
  authService,
}) => (userData) => (
  Resolved(UserDomainFactory(userData))
    .chain(UserDomainService.encryptPassword)
    .chain(userRepository.add)
    .bimap((err) => err, authService.sigIn)
    .bimap((err) => createOperationOutput(Err(err)), (result) => createOperationOutput(result))
);

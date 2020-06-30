const { struct } = require('superstruct');

const User = struct({
  cpf: 'string',
  name: 'string',
  email: 'string',
  password: 'string',
});

module.exports = User;

const jwt = require('jsonwebtoken');

module.exports = ({
  config: {
    authSecret,
  },
}) => ({
  sigIn: (user) => ({
    token: jwt.sign(user, authSecret),
  }),
});

const jwt = require('jsonwebtoken');
const tryCatch = require('crocks/Result/tryCatch');

module.exports = ({
  config: {
    authSecret,
  },
}) => ({
  sigIn: (user) => {
    const trySigIn = tryCatch(() => ({
      token: jwt.sign(user, authSecret),
    }));
    const result = trySigIn();
    return result;
  },
});

const jwt = require('jsonwebtoken');
const { Err } = require('crocks/Result');


const decodedToken = (authorizationHeader, authSecret) => {
  const token = authorizationHeader.replace('Bearer ', '');
  const decoded = jwt.verify(token, authSecret);
  return decoded;
};

module.exports = ({
  config: {
    authSecret,
  },
}) => (req, requireAuth = true) => {
  const header = req.req.headers.authorization;

  return header
    ? decodedToken(header, authSecret)
    : requireAuth
      ? Err('Login in to access resource')
      : {};
};

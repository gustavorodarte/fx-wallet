const jwt = require('jsonwebtoken');
const { Err } = require('crocks/Result');


const decodedToken = (authorizationHeader) => {
  const token = authorizationHeader.replace('Bearer ', '');
  const decoded = jwt.verify(token, 'supersecret');
  return decoded;
};

module.exports = (req, requireAuth = true) => {
  const header = req.req.headers.authorization;

  return header
    ? decodedToken(header)
    : requireAuth
      ? Err('Login in to access resource')
      : {};
};

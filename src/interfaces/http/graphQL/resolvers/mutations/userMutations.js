module.exports = ({
  loginUser,
  signupUser,
  apolloErrorHandler,
}) => ({
  signupUser: (_, { data: userData }) => signupUser(userData).toPromise()
    .catch(apolloErrorHandler)
    .then(({ result }) => result),
  loginUser: (_, { data: userData }) => loginUser(userData).toPromise()
    .catch(apolloErrorHandler)
    .then(({ result }) => result),
});

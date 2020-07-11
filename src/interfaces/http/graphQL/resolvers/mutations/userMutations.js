module.exports = ({
  loginUser,
  signupUser,
  apolloErrorHandler,
}) => ({
  signupUser: (_, { data: userData }) => signupUser(userData)
    .fork(apolloErrorHandler, ({ result }) => result),
  loginUser: async (_, { data: userData }) => {
    const { result } = await loginUser(userData).toPromise();
    return result;
  },
});

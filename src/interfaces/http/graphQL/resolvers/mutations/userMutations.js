module.exports = ({
  loginUser,
  signupUser,
}) => ({
  signupUser: async (_, { data: userData }) => signupUser(userData).toPromise(),
  loginUser: () => loginUser.toPromise(),
});

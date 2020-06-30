module.exports = ({
  loginUser,
  signupUser,
}) => ({
  signupUser: async (_, { data: userData }) => signupUser(userData).toPromise(),
  loginUser: async (_, { data: userData }) => {
    const { result } = await loginUser(userData).toPromise();
    return result;
  },
});

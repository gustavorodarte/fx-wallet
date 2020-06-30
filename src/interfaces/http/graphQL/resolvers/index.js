module.exports = ({
  userQueries,
  userMutations,
}) => {
  const Query = { ...userQueries };
  const Mutation = { ...userMutations };

  return {
    Query,
    Mutation,
  };
};

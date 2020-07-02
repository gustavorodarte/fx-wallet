module.exports = ({
  userQueries,
  userMutations,
  graphQLDate,
}) => {
  const Query = { ...userQueries };
  const Mutation = { ...userMutations };

  return {
    Query,
    Mutation,
    Date: graphQLDate,
  };
};

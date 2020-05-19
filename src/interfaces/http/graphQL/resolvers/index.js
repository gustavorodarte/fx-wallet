module.exports = ({
  userQueries,
}) => {
  const Query = { ...userQueries };
  const Mutation = {};

  return {
    Query,
    Mutation,
  };
};

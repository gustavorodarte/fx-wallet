const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

module.exports = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      // eslint-disable-next-line fp/no-nil
      return null;
    },
  }),
};

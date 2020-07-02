/* eslint-disable no-undef */
/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
const {
  makeExecutableSchema,
  addMocksToSchema,
  mockServer,
} = require('graphql-tools');

const { graphql } = require('graphql');
const { importSchema } = require('graphql-import');
const path = require('path');
const queries = require('./utils/quotation/queries');
const mutations = require('./utils/quotation/mutations');

const testCases = [...queries, ...mutations];

describe('Quotation', () => {
  const schemaPath = '../../../../src/interfaces/http/graphQL/schemas/schema.graphql';
  const typeDefs = importSchema(path.join(__dirname, schemaPath));
  const mockSchema = addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }),
    mocks: {
      String: () => 'test',
      Int: () => 0,
      Boolean: () => true,
      ID: () => '1',
      Status: () => 'pending',
      Date: () => '1977-05-24T00:00:00.000Z',
    },
  });

  test('has valid type definitions', async () => {
    expect(async () => {
      const MockServer = mockServer(typeDefs);
      await MockServer.query('{ __schema { types { name } } }');
    }).not.toThrow();
  });

  testCases.map((testCase) => {
    const {
      id, query, variables, context: ctx, expected,
    } = testCase;
    return test(`query: ${id}`, async () => {
      const result = await graphql(mockSchema, query, null, { ctx }, variables);
      expect(result).toEqual(expected);
    });
  });
});

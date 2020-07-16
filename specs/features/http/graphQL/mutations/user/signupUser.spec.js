/* eslint-disable fp/no-let */
/* eslint-disable fp/no-unused-expression */
/* eslint-disable no-undef */
/* eslint-disable fp/no-nil */

const request = require('specs/support/request');
const factory = require('specs/support/factory');


describe('API: GraphQL :: Mutations :: User :: SingUp', () => {
  describe('When received the correct input', () => {
    test('should create a new user', async () => {
      const query = `
      mutation {
        signupUser(data: {
          email: "guga.rodarte2@live.com",
          password: "aaaaaadadsa",
          name: "Gustavo",
          cpf: "kkkk"
        }){
          token
        }
      }`;

      const { body } = await request()
        .post('/v1/graphql')
        .send({ query })
        .expect(200);
      expect(body).toEqual({
        data: {
          signupUser: {
            token: expect.any(String),
          },
        },
      });
    });
  });
  describe('When user already exists', () => {
    let user;
    beforeEach(async () => {
      // eslint-disable-next-line fp/no-mutation
      user = await factory.create('user');
    });
    test('should create a new user', async () => {
      const query = `
      mutation {
        signupUser(data: {
          email: "${user.email}",
          password: "${user.password}",
          name: "${user.password}", 
          cpf: "${user.cpf}",
        }){
          token
        }
      }`;

      const { body } = await request()
        .post('/v1/graphql')
        .send({ query })
        .expect(200);
      expect(body).toEqual(expect.objectContaining({
        errors: expect.any(Array),
      }));
    });
  });
});

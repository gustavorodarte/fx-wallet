/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
/* eslint-disable fp/no-unused-expression */
/* eslint-disable no-undef */
/* eslint-disable fp/no-nil */

const LoginUser = require('src/app/user/LoginUser');

const { Ok } = require('crocks/Result');
const { Rejected, Resolved } = require('crocks/Async');

describe('Unit :: App :: User :: LoginUser', () => {
  describe('When user data is valid', () => {
    let loginUser;
    beforeAll(() => {
      const MockUserRepository = {
        getOneByEmail: () => Resolved({
          cpf: '111.526.111-09',
          email: 'dummy@live.com',
          name: 'Dollynho da Silva',
          password: '$2b$04$c1tagXRGqFETmp/bALOsv.JYZ5kJeLvUO9kU8yFBhRM/XSD3C37a.',
        }),
      };

      const MockAuthService = {
        sigIn: () => Ok({
          token: 'dummy-token',
        }),
      };

      loginUser = LoginUser({
        userRepository: MockUserRepository,
        authService: MockAuthService,
      });
    });
    test('should return a valid jwt token', async () => {
      const userData = {
        email: 'dummy@live.com',
        password: 'my-password',
      };
      const { result, hasError } = await loginUser(userData).toPromise();

      expect(hasError).toBeFalsy();
      expect(result).toEqual({
        token: 'dummy-token',
      });
    });
  });
  describe('when there is an internal error', () => {
    let loginUser;
    beforeAll(() => {
      const MockUserRepository = {
        getOneByEmail: () => Rejected('same error'),
      };

      const MockAuthService = {
        sigIn: () => Ok({
          token: 'dummy-token',
        }),
      };

      loginUser = LoginUser({
        userRepository: MockUserRepository,
        authService: MockAuthService,
      });
    });
    test('should return a valid jwt token', async () => {
      const userData = {
        cpf: '111.526.111-09',
        email: 'dummy@live.com',
        name: 'Dollynho da Silva',
        password: 'my-password',
      };

      expect(loginUser(userData).toPromise()).rejects.toThrow({
        error: 'same error',
        hasError: true,
      });
    });
  });
});

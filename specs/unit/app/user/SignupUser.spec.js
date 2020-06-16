const SignupUser = require('src/app/user/SignupUser');

const { Ok } = require('crocks/Result');
const { Rejected, Resolved } = require('crocks/Async');

describe('Unit :: App :: User :: SignupUser', () => {
  describe('When user data is valid', () => {
    let signupUser;
    beforeAll(() => {
      const MockUserRepository = {
        add: user => Resolved(user),
      };

      const MockAuthService = {
        sigIn: () => Ok({
          token: 'dummy-token',
        }),
      };

      signupUser = SignupUser({
        userRepository: MockUserRepository,
        authService: MockAuthService,
      });
    });
    test('should return a valid jwt token', async () => {
      const userData = {
        cpf: '111.526.111-09',
        email: 'dummy@live.com',
        name: 'Dollynho da Silva',
        password: 'my-password'
      };
      const { result, hasError} = await signupUser(userData).toPromise();

      expect(hasError).toBeFalsy();
      expect(result).toEqual({
        token: 'dummy-token',
      });
    });
  });
  describe('when there is an internal error', () => {
    let signupUser;
    beforeAll(() => {
      const MockUserRepository = {
        add: user => Rejected('same error'),
      };

      const MockAuthService = {
        sigIn: () => Ok({
          token: 'dummy-token',
        }),
      };

      signupUser = SignupUser({
        userRepository: MockUserRepository,
        authService: MockAuthService,
      });
    });
    test('should return a valid jwt token', async () => {
      const userData = {
        cpf: '111.526.111-09',
        email: 'dummy@live.com',
        name: 'Dollynho da Silva',
        password: 'my-password'
      };

      expect(signupUser(userData).toPromise()).rejects.toThrow({
        error: 'same error',
        hasError: true,
      });
    });
  });
});
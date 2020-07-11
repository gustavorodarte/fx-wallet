/* eslint-disable fp/no-nil */
/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-mutation */
const faker = require('faker');
const cpf = require('@fnando/cpf/commonjs');


module.exports = (factory, { User: UserModel }) => {
  faker.locale = 'pt_BR';
  factory.define('user', UserModel, {
    cpf: () => cpf.generate(true),
    name: () => faker.name.firstName(),
    email: () => faker.internet.email(),
    password: () => faker.internet.password(),
  });
};

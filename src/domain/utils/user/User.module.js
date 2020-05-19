const createDomainFactory = require('../utils/createDomainFactory');

module.exports = () => {
  const userSchema = {
    cpf: {
      required: true,
      type: 'String',
    },
    name: {
      required: true,
      type: 'String',
    },
    email: {
      required: true,
      type: 'String',
    },
    password: {
      required: true,
      type: 'String',
    },
  };

  const {
    domain: UserDomainFactory,
    createDomainValidate: createUserDomainValidate,
  } = createDomainFactory(userSchema);
  return {
    UserDomainFactory,
    createUserDomainValidate,
  };
};

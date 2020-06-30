module.exports = {
  toDatabase: ({
    cpf,
    name,
    email,
    password,
  }) => ({
    cpf,
    name,
    email,
    password,
  }),
  toDomain: ({
    dataValues: {
      cpf,
      name,
      email,
      password,
    },
  }) => ({
    cpf,
    name,
    email,
    password,
  }),
};

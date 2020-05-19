const { fromPromise } = require('crocks/Async');

const SequelizeUserRepository = ({
  UserModel,
}) => ({
  add: (userData) => {
    const createUser = fromPromise((data) => UserModel.create(data));
    return createUser(userData);
  },
  getOneByEmail: (email) => {
    const getUser = fromPromise(() => UserModel.findOne({
      where: {
        email,
      },
    }));
    return getUser();
  },
});

module.exports = SequelizeUserRepository;

const { fromPromise } = require('crocks/Async');
const { toDatabase, toDomain } = require('./SequelizeUserRepositoryMapper');

const SequelizeUserRepository = ({
  UserModel,
}) => ({
  add: (userData) => {
    const createUser = fromPromise((data) => UserModel.create(toDatabase(data)));
    return createUser(userData).map(toDomain);
  },
  getOneByEmail: ({ email }) => {
    const getUser = fromPromise(() => UserModel.findOne({
      where: {
        email,
      },
    }, { rejectOnEmpty: true }));

    return getUser().map(toDomain);
  },
});

module.exports = SequelizeUserRepository;

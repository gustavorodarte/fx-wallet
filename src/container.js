const {
  createContainer, asFunction, asValue,
} = require('awilix');

// Configuration imports
const config = require('../config');

// Interfaces layer imports
const {
  healthCheckHandler,
} = require('./interfaces/http/handlers');
const {
  corsMiddleware,
  httpOptionsMiddleware,
  loggerMiddleware,
} = require('./interfaces/http/middleware');
const {
  rootRouter,
  v1Router,
} = require('./interfaces/http/routers');
const apollo = require('./interfaces/http/graphQL/apollo');
const context = require('./interfaces/http/graphQL/context');
const resolvers = require('./interfaces/http/graphQL/resolvers');
const server = require('./interfaces/http/server');
const typeDefs = require('./interfaces/http/graphQL/typeDefs');
const {
  userQueries,
} = require('./interfaces/http/graphQL/resolvers/queries');
const {
  userMutations,
} = require('./interfaces/http/graphQL/resolvers/mutations');


// Application layer imports
const application = require('./app/application');
const {
  SignupUser,
  LoginUser,
} = require('./app/user');

const {
  AuthService,
} = require('./app/services/');


// Domain layer imports

const {
  UserDomainService,
  UserDomainFactory,
} = require('./domain/user');

// Infra layer imports

const {
  database,
  User: UserModel,
} = require('./infra/database/models');

const SequelizeUserRepository = require('./infra/repositories/user/SequelizeUserRepository');


module.exports = createContainer()
  // Configuration registration
  .register({
    config: asValue(config),
  })
  // Interfaces layer registrations
  .register({
    apollo: asFunction(apollo).singleton(),
    context: asFunction(context).singleton(),
    corsMiddleware: asFunction(corsMiddleware).singleton(),
    healthCheckHandler: asFunction(healthCheckHandler).singleton(),
    httpOptionsMiddleware: asFunction(httpOptionsMiddleware).singleton(),
    loggerMiddleware: asFunction(loggerMiddleware).singleton(),
    resolvers: asFunction(resolvers).singleton(),
    rootRouter: asFunction(rootRouter).singleton(),
    server: asFunction(server).singleton(),
    typeDefs: asFunction(typeDefs).singleton(),
    v1Router: asFunction(v1Router).singleton(),
    userQueries: asFunction(userQueries).singleton(),
    userMutations: asFunction(userMutations).singleton(),
  })
  // Application layer registrations
  .register({
    app: asFunction(application).singleton(),
    signupUser: asFunction(SignupUser).singleton(),
    loginUser: asFunction(LoginUser).singleton(),
    authService: asFunction(AuthService).singleton(),
  })
  // Domain layer registrations
  .register({
    userDomainService: asValue(UserDomainService),
    userDomainFactory: asValue(UserDomainFactory),
  })
  // Infra layer registrations
  .register({
    database: asValue(database),
    UserModel: asValue(UserModel),
    logger: asValue(console),
    userRepository: asFunction(SequelizeUserRepository).singleton(),
  });

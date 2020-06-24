const Async = require('crocks/Async');
const axios = require('axios');
const setProp = require('crocks/helpers/setProp');
const SimpleExchangeService = require('./exchange/SimpleExchangeService');

const signIn = (baseUrl, credentials) => {
  const createAxiosInstance = ({ data: { token } }) => axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  const signInAsync = Async.fromPromise(axios.post)('/auth/user_correspondents/sign_in', credentials, {
    baseURL: baseUrl,
  }).map(createAxiosInstance);

  return signInAsync;
};

const SimpleApi = ({
  config: {
    simple: { baseUrl, credentials },
  },
}) => {
  const axiosInstanceAsync = signIn(baseUrl, credentials);

  const reduceResult = (acc, curr, index) => {
    const key = Object.keys(acc)[index];
    return setProp(key, curr, acc);
  };

  return Async.all([
    SimpleExchangeService.ap(axiosInstanceAsync),
  ]).map((result) => result.reduce(reduceResult, {
    exchange: {},
  }));
};

module.exports = SimpleApi;

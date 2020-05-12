const { fromPromise } = require('crocks/Async');
const axios = require('axios');
const SimpleExchangeService = require('./exchange/SimpleExchangeService');


const signIn = (baseUrl, credentials) => {
  const createAxiosInstance = ({ token }) => axios.create({
    baseUrl,
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  const signInAsync = fromPromise(axios.post({
    baseUrl,
    body: credentials,
  })).map(createAxiosInstance);

  return signInAsync;
};

const SimpleApi = ({
  config: {
    simple: { baseUrl, credentials },
  },
}) => {
  const axiosInstanceAsync = signIn(baseUrl, credentials);

  return {
    exchange: SimpleExchangeService.ap(axiosInstanceAsync),
  };
};

module.exports = SimpleApi;

const { fromPromise, Async } = require('crocks/Async');

const SimpleExchangeService = (axiosInstance) => ({
  getQuotations(merchantId, currency, reverse) {
    return fromPromise(axiosInstance.get({
      baseUrl: `exchanges/paper-money/quotations/${merchantId}`,
      params: {
        currency,
        reverse,
      },
    }));
  },
});

module.exports = Async.of(SimpleExchangeService);

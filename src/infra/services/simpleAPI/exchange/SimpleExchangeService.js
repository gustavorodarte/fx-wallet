const Async = require('crocks/Async');

const SimpleExchangeService = (axiosInstance) => ({
  getQuotations(merchantId, currency, reverse = false) {
    return Async.fromPromise(axiosInstance.get)(`exchanges/paper-money/quotations/${merchantId}`, {
      params: {
        currency,
        reverse,
      },
    });
  },
});

module.exports = Async.of(SimpleExchangeService);

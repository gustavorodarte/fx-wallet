module.exports = ({
  getQuotation,
  apolloErrorHandler,
}) => ({
  quotation: (_, { merchantId, currency }) => getQuotation(merchantId, currency).toPromise()
    .catch(apolloErrorHandler)
    .then(({ result }) => result),
});

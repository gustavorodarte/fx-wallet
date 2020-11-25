const { struct } = require('superstruct');

const TourismQuotation = struct({
  id: 'string',
  reverse: 'boolean',
  purposeCode: 'string',
  currency: Currency,
  tax: Tax,
  price: Price,
  createdAt: 'date',
  merchantId: 'string',
  timeToLive: 'number',
});

const Price = struct({
  id: 'string',
  withoutTax: {

  },
  withTax: {

  },
});

module.exports = TourismQuotation;

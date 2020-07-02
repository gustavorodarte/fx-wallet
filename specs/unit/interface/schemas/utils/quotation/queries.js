const {
  expectedQuotation,
} = require('./data');


module.exports = [
  {
    id: 'quotation',
    query: `
    query {
      quotation {
        id
        purposeCode
        merchantId
        createdAt
        expiresAt
        timeToLive
        currency {
          countryFlagUrl
          code
          name
          coverageRatePercentage
          offer
          offerUSD {
            value
            divisor
          }
          spreadPercentage
          maxToSell
          minToSell
          multiples
          commercialExchangeRate {
            value
            divisor
          }
        }
        tax {
          iof {
            percentage
            total {
              value
              divisor
            }
          }
        }
        price {
          withoutTax {
            value
            divisor
          }
        }
        total {
          withoutTax {
            value
            divisor
          }
          withTax {
            value
            divisor
          }
        }
      }
    }
    `,
    variables: {},
    context: {},
    expected: {
      data: {
        quotation: {
          ...expectedQuotation,
        },
      },
    },
  },
];

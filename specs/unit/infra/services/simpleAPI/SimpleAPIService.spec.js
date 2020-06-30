/* eslint-disable fp/no-unused-expression */
/* eslint-disable no-undef */
/* eslint-disable fp/no-nil */
const SimpleAPIService = require('src/infra/services/simpleAPI/SimpleAPIService');
const config = require('config');
const nock = require('nock');
const exchangeQuotationResponse = require('./support/getQuotationsResponse.json');

describe('Unit :: Infra :: Services :: SimpleAPIService', () => {
  describe('#exchange', () => {
    beforeEach(() => {
      nock(`${config.simple.baseUrl}`)
        .post('/auth/user_correspondents/sign_in')
        .reply(200, {
          token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlcl9jb3JyZXNwb25kZW50IiwiYXVkIjpudWxsLCJpYXQiOjE1NjUwNDI3NzcsImV4cCI6MTU2NTA0NjM3NywianRpIjoiYWZmNGM5NWMtNzk5Ny00ZjgwLTlmNGYtYTllNWUzOWVkNWQ4In0.sDPBUNEscNLWv-7T15FojbDUbne3bp79dFHx8ink0-8',
          expires_at: 1565046377,
        });
      nock(`${config.simple.baseUrl}`)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/exchanges/paper-money/quotations/123?currency=USD&reverse=false')
        .reply(200, exchangeQuotationResponse);
    });
    test('should fetch exchange service', async () => {
      const result = await SimpleAPIService({ config }).toPromise();
      const { data } = await result.exchange.getQuotations(123, 'USD').toPromise();
      expect(data).toEqual(exchangeQuotationResponse);
    });
  });
});

const expect = require('chai').expect;

const bing = require('../server/api_controllers/bing');

const sinon = require('sinon');


describe('Bing API', () => {
  let server;
  beforeEach(() => {
    server = sinon.fakeServer.create();
  });

  afterEach(() => {
    server.restore();
  });

  xit('should add a properly formatted response to the db', () => {
        // ##TODO## write test
  });
  describe('getStories', () => {
    it('should make a request to the Bing API', () => {
      bing.search('Hello world!');
      console.log(server);
      const req = server.requests[0];
      expect(req.url).to.eql('https://api.cognitive.microsoft.com/bing/v5.0/news/search?q="Hello+world!');
      expect(req.headers['Ocp-Apim-Subscription-Key']).to.exist();
    });
  });
});

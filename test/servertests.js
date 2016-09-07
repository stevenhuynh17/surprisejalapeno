import {describe, xdescribe, it} from 'chai';

const bing = require('../server/api_controllers/bing');

const request = require('supertest');

const sinon = require('sinon');


xdescribe('Bing API', () => {
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
        // ##TODO## write test
        bing.getStories('Hello world!');
        let req = server.requests[0];
        //##FIGURETHISOUT##
        expect(req.url).to.eql('');
        expect(req.headers['Ocp-Apim-Subscription-Key']).to.exist();
    });
  });
});

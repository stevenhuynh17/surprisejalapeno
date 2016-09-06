const describe = require('chai').describe;

const it = require('chai').it;

const expect = require('chai').expect;

describe('Tooling', function() {
  describe('Tests', function() {
    it('should pass truthy tests', () => {
      expect(true).to.be.true;
    });

    it('should fail failing tests', () => {
      expect(false).to.not.be.true;
    });
  });

});


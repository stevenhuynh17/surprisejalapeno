var expect = require('chai').expect;
var path = require('path');

describe('Tooling', function() {

  describe('Tests', function () {
    it('should pass truthy tests', function () {
        expect(true).to.be.true;
    });

    it('should fail failing tests', function () {
        expect(false).to.not.be.true;
    });
  });

});


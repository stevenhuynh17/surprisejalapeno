var expect = require('chai').expect;
var path = require('path');
var supertest = require('supertest');

describe('Tooling', function() {

  describe('Tests', function () {
    it('should pass truthy tests', function () {
        .expect(true).to.be.truthy();
    });

    it('should fail failing tests', function (done) {
        .expect(false).to.not.be.truthy();
    });
  });

});


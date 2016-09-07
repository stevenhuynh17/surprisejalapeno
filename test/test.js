const expect = require('chai').expect;

describe('Tooling', () => {
  describe('Tests', () => {
    it('should pass truthy tests', () => {
      expect(true).to.be.true;
    });

    it('should fail failing tests', () => {
      expect(false).to.not.be.true;
    });
  });
});

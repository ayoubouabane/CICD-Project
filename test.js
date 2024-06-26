const sum = require('./app');
const assert = require('assert');

describe('Sum function', () => {
  it('should return the sum of two numbers', () => {
    assert.equal(sum(1, 2), 3);
  });
});
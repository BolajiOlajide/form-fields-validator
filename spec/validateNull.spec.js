const chai = require('chai');

const validator = require('../');

const assert = chai.assert;

const stateOne = {
  name: 'Bolaji',
  age: 23,
  gender: 'male',
  tags: ['Bolaji']
};

const stateTwo = {
  name: 'Bolaji',
  age: 23,
  gender: '',
  tags: []
};

describe("Test that validateNull function", function() {

  it(" returns a boolean as an output when only one argument is passed", function() {
    assert.isBoolean(validator.validateNull(stateOne));
  });

  it(" returns a boolean as an output when only one argument is passed", function() {
    assert.isBoolean(validator.validateNull(stateTwo));
  });

  it(" should return an object when a second argument is passed", function() {
    assert.isObject(validator.validateNull(stateTwo, true));
  });

  it(" should return an object when a second argument is passed", function() {
    assert.isObject(validator.validateNull(stateOne, true));
  });

  it(" returns false for a form that has null values", function() {
    assert.equal(validator.validateNull(stateTwo), false);
  });

  it(" returns true for a form that has non-null values", function() {
    assert.equal(validator.validateNull(stateOne), true);
  });

  it(" returns an object with isValid key there", function() {
    assert.include(validator.validateNull(stateOne, true), {isValid: true});
  });
});

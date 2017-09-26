const validator = require('./');

const a = {
  name: 'Bolaji',
  age: 23,
  gender: 'male',
  tags: []
};

console.log(validator.validateNull(a));

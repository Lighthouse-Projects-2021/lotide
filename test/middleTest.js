const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

let result = [3,4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), result);
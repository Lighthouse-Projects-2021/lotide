const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [3, 2, 1]);
// eqArrays(["1", "2", "3"], ["1", "2", "3"]);
// eqArrays(["1", "2", "3"], ["1", "2", 3]);


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
module.exports = eqArrays;
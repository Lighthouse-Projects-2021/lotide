const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = ('./without');
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');

// ES6 shorthand property values
module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  eqObjects,
  findKey,
  findKeyByValue,
  countLetters,
  countOnly,
  letterPositions,
  map,
  takeUntil,
  without
};

// module.exports = {
//     head:   head,
//     tail:   tail,
//     middle: middle,
//     eqArrays: eqArrays,
//     assertEqual: assertEqual,
//     assertArraysEqual: assertArraysEqual,
//     assertObjectsEqual: assertObjectsEqual,
//     eqObjects: eqObjects,
//     findKey: findKey,
//     findKeyByValue: findKeyByValue,
//     countLetters: countLetters,
//     countOnly: countOnly,
//     letterPositions: letterPositions,
//     map: map,
//     takeUntil: takeUntil,
//     without: without
//   };
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};
const eqObjects = function(object1, object2) {
  let ObjKeys1 = Object.keys(object1);
  let ObjKeys2 = Object.keys(object2);

  if (ObjKeys1.length !== ObjKeys2.length) {
    return false;
  } else {
    for (let key of ObjKeys1) {
      if (Array.isArray(object1[key])) {  //verificar se eh array e se for array
        if (!eqArrays(object1[key], object2[key])) { //comparar com eqarray
          return false
        }
      } else if (object1[key] !== object2[key]) {// compara todos os primitivos
        return false;
      }
    }
  }
  return true; //The value for each key in one object is the same as the value for that same key in the other object
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const xy = { x: "1", y: ["2", 3] };
const yx = { y: ["2", 3], x: "1" };
console.log(assertObjectsEqual(xy, yx)); // => true

const qw = { q: "1", w: [1, 2, 3] };
const as = { q: "1", w: [1, 3, 3] };
console.log(assertObjectsEqual(qw, as));
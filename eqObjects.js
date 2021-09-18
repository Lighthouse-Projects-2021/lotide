const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  let ObjKeys1 = Object.keys(object1);
  let ObjKeys2 = Object.keys(object2);

  //compare objects length "They have the same number of keys"

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
let test1 = eqObjects(ab, ba)
assertEqual(test1, true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const qw = { q: "1", w: [1, 2, 3] };
const as = { q: "1", w: [1, 2, 3] };
assertEqual(eqObjects(qw, as), true); // => true


const kb = { q: "1", w: [1, 2, 3] };
const xy = { q: "1", w: [1, 3, 3] };
assertEqual(eqObjects(kb, xy), false); // => true
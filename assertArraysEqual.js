const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1) !== Array.isArray(arr2))
      return false;
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

console.log(assertArraysEqual(["dice", "dice"], ["dice", "dice"]));
console.log(assertArraysEqual(["dice", "dice"], ["banana", 3]));


/*const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};*/
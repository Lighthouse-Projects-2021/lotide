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

const letterPositions = function(text) {
  const results = {};
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    if (' ' !== letter) {

      let newArray = [];
      if (results[letter]) {
        newArray = results[letter];
      }
      newArray.push(i);

      results[letter] = newArray;
    }
  }
  return results;
};
console.log(assertArraysEqual(letterPositions("lighthouse in the house").g, [2]));






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

const without = function(source, itemsToRemove) {
  let goodItems = []; //create array with good Items
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (itemsToRemove[i] === source[j]) {
        goodItems = source.slice(0, j).concat(source.slice(j + 1, source.length));
      }
    }
  } return goodItems;
};
without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
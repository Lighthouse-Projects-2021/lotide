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



const middle = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length <= 2) {
      return [];
    } if (arr.length % 2 !== 0) {
      return [arr[(arr.length - 1) / 2]];
    } if (arr.length % 2 === 0 && arr.length >= 4) {
      let middle1 = arr[(arr.length / 2) - 1];
      let middle2 = arr[arr.length / 2];
      return [middle1, middle2];
    }
  }
  //For arrays with one or two elements, there is no middle. Return an empty array.
  //For arrays with odd number of elements, an array containing a single middle element should be returned.
  //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
};
let result = [3,4]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), result));
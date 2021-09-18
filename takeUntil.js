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
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const takeUntil = function(arrayToCheck, callback) {
  let newArr = [];
  for (let item of arrayToCheck) {
    if (!callback(item)) { // se o callback for true
      return newArr.push(item); //push na newArr
    } else {
      return newArr;  //retorna oq eu já acumulei
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


const funcaoCheca = x => x > 6;
const expectedResult = [1, 2, 5];
const isEqualsResult = assertArraysEqual(takeUntil(data1, funcaoCheca), expectedResult);
console.log(isEqualsResult);



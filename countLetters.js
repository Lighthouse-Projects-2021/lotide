const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(allLetters) {
  let result = {};
  for (let letter of allLetters) {
    if (' ' !== letter) {
    
      let currentValue = 0;
      if (result[letter]) {
        currentValue = result[letter];
      }
      result[letter] = currentValue + 1;
    }
  }
  return result;
};
console.log(countLetters("lighthouse in the house"));
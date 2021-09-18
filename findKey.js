const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(someObject, callback) {
  for (let key in someObject) {
    if (callback(someObject[key])) {
      return key;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2));



const bestSaladReview = {
  "Greek Salad": { review: 3 },
  "Guacamole": { review: 5 },
  "Chiken Salada": { review: 4 },
  "Coleslaw": { review: 1 }
};
assertEqual(findKey(bestSaladReview, x => x.review === 5), "Guacamole");
assertEqual(findKey(bestSaladReview, x => x.review === 4), "Guacamole");
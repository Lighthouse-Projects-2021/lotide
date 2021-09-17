const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(someObject, someValue) {
  for (let key of Object.keys(someObject)) {
    if (someObject[key] === someValue) {
      return key;
    }
  }
};



const bestSaladbyIngredient = {
  feta: "Greek Salad",
  avocado: "Guacamole",
  chicken: "Chiken Salada",
  cabbage: "Coleslaw",
};
assertEqual(findKeyByValue(bestSaladbyIngredient, "Greek Salad"), "feta");
assertEqual(findKeyByValue(bestSaladbyIngredient, "Greek Salad"), "avocado");
assertEqual(findKeyByValue(bestSaladbyIngredient, "Coleslaw"), "cabbage");
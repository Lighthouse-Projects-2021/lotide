// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Asssertion Passed :" + [actual] + "===" + [expected]);
  } else {
    console.log("🛑🛑🛑Assertion Failed:" + [actual] + "!==" + [expected]);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("dice", "dice");
assertEqual("banana", "apple");
assertEqual(3.14, 3.14);
assertEqual(2021, 20212);

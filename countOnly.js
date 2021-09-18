const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let result = {};
  for (item of allItems) { // para cada item em allItems (for)
    if (itemsToCount[item] && itemsToCount[item] === true) {
      let current_value = 0;
      if (result[item]) {
        current_value=result[item]
      }
      result[item] = current_value + 1;
    } 
  }
  //verificar se o item esta na minha lista de itemsToCount (if)
  // se estiver, verificar se o valor em itemstocount e true (mesmo if)
  //se tudo estive ok, conta + 1 para esse nome (adicionar no result)

  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
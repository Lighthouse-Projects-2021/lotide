const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('returns ["Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"]; 
    assert.deepEqual(tail(words), ["Labs"]);
    
  });

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(result), ["Lighthouse", "Labs"]); // => will always fail!
  });
});



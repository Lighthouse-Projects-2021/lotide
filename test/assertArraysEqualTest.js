const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(["dice", "dice"], ["dice", "dice"]);
assertArraysEqual(["dice", "dice"], ["banana", 3]);

# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @keniabalestra/lotide`

**Require it:**

`const _ = require('@keniabalestra/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Logs a message if two arrays are equals
* `assertEqual(actual, expected)`: Logs a message if the two passed arguments are equals
* `assertObjectEqual(object1, object2)`: Logs a message if two passed objects are equals
* `countLetters(allLetters)`: Counts the number of letters in a given word
* `countOnly(allItems, itemsToCount)`: Counts the frequency of an item in an array
* `eqArrays(arr1, arr2)`: Checks if two array are equals
* `eqObjects(object1, object2)`: Checks if the passed objects are equals
* `findKey (someObject, callback)`: Checks if a key exists in the passed object
* `findKeyByValue(someObject, someValue)`: Checks if a value exists within the passed object
* `head(arrayList)`: Returns the item at index 0 of an array
* `letterPositions(text)`: Returns the index of an given letter in a string
* `map(array, callback)`: Returns the letter at index 0 of all the words in an array
* `middle(arr)`: Returns the item at the middle position of an array. 
* `tail(arrayList)`: Returns the items of an array excluding the head(index 0)
* `takeUntil(arrayToCheck, callback)`: Return the original array up until the callback
* `without(source, itemsToRemove)`: Returns the original array without item to remove
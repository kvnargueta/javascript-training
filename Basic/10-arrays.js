/* 
  Arrays
  List or Data Structure
  Is an object, is enabled to storing a collection of multiple items under a single variable name.
  Syntax: 
    array []
*/

// List of fruit
var fruits = ["Apple", "Almond","Cherry","Strawberry"]

// How to access...
// Console log return the total of objects and the complete list
console.log(fruits)

// Return the total of objects
console.log(fruits.length)

// Access to the array. This start with 0
console.log(fruits[0])


// ::::: Methods
// Mutators
// "push()" add one or more elements at the end of the array
var moreFruits = fruits.push("Grapes")
console.log(fruits)


// "pop()" remove the last element from an array
var last = fruits.pop("Grapes")
console.log(fruits)


// unshift() Add one or more element in the beginning of an array
var newLenght = fruits.unshift("Grapes")
console.log(fruits)

// shift() Remove the first element of an array
var deleteFruit = fruits.shift("Grapes")
console.log(fruits)

// indexOf() This method return the first index or position of an element in array
// Return -1 if the element isn't present 
var position = fruits.indexOf("Cherry")
console.log(position)
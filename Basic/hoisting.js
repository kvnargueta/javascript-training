/* Hosting = Only in old versions of Javascriots 
    With the new Keywords in ES6 Hoisting doesn't work
*/

// Two steps for var
var myName; 
myName = "Kevin";

// Check This...
console.log(newName);
var newName = "Kevin";
/*
    This return: undefined
    We call first a variable before to Init
    In the engine, before the Console Log, generate a variable with undefined
*/
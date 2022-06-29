/* 
  Expressions and Operators.
  This uses in assignment, comparison, arithmetic, logical. 
*/

// Math / Binary Operations
console.log(3 + 2) // Addition. Return 5
console.log(50 - 10) // Substraction. Return 40
console.log(10 * 20) // Multiplication. Return 200
console.log(20 / 2) // Division. Return 10

// Concatenation
console.log("Kevin " + "Argueta") // Return "Kevin Argueta" (+) = Concatenation

// Negation / Unity Operators
console.log(!true) // Return "False" 

// Assignment Operator 
let a = 1 // Assign 1 to variable "a"
console.log(a)

// Comparison Operator
console.log(3 == "3") // Return True (Is equal)
console.log(3 === "3") // Return False. More strict, consider the type of

// Less or equal | greater or equal
console.log(3 < 5) // Return True because 3 is less that 5
console.log(8 > 5) // Return True because 8 is greater that 5
console.log(5 <= 6) // Return True because 5 is less that 6
console.log(5 >= 6) // Return False because 5 is greater that 6

// Logical Operators
var c = 1;
var d = 2;
/* 
  (c && d) // AND (If C is true and d is true. Return True)
  (c || d) // AND (If C is true or d is true. Return True)
*/ 
// Add Value (Arithmetic)
var f = 40
f++ // Add 1 to 40 
console.log(f) // Return 41

f+= 5 // Add 5 to "F" number
console.log(f) // Return 46
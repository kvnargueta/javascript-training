/* 
    Coercion = Turns one value type to another type
    We hace 2 cohercion. Implicit and explicit
    Implicit = The language change automatically
    Explicit = We force it to change
*/

4 + "7" // 47  Concatenation
4 * "7" // 28  Arithmetic Operation
2 + true // 3  (2 + 1) Arithmetic Operation
false - 3 // -3 (0 - 3) Arithmetic Operation

var a = "20"  // We init a number value
var c = String(a) // We convert to string
console.log(typeof(c)) // Print String

var d = Number(c) // Convert to Number
console.log(typeof(d)) // Show Type of
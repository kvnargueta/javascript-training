/* 
    Booleans = Return "True" or "False"
    We will uses this in Comparison and Conditions Functions
    Use "Boolean()" function to check if a variable or function is true or false.
*/

// False Values
console.log(Boolean(0)) // (Only with zero) Return False
console.log(Boolean(null)) // Return False
console.log(Boolean(NaN)) // (Not a Number) Return False
console.log(Boolean(undefined)) //  Return False
console.log(Boolean(false)) //  Return False
console.log(Boolean("")) //  Empty string. Return False

// True Values
console.log(Boolean(" ")) // Apply with only have a space. String. Return True
console.log(Boolean("a")) // With one or more characters. String. Return True
console.log(Boolean(1)) // Number One or more. Return True
console.log(Boolean([])) // Arrays and Empty Arrays. Return True
console.log(Boolean({})) // Objects. Return True
console.log(Boolean(function() {})) // Functions. Return True
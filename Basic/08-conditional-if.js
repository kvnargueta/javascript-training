/* 
  Conditional IF.. ELSE
  Execute the statement if a conditional return true. If return false another statement can be executed. 
  Structure:
    if (condition) {
      // statement
    }
*/

// If and Else
if (true) {
  console.log("Return true. Executing the statement")
}
if (false) {
  console.log("Return false. No executing")
} else { // Default step
  console.log("Return false. Executing statement. I'm False :3")
}


/* 
  Excersice:
  If the user is under 18, they cannot vote.
  If the user is 18 years old. Show "First time voation"
  If the user is over 18, they can vote. 
*/

var userAge = 22;
if (userAge < 18) {
  console.log("No puedes votar. Necesitas ser mayor de edad")
} else if (userAge === 18) {
  console.log("¡Que bien! Es tu primera vez votando. ¡Bienvenido!")
} else {
  console.log("¡Bienvenido! Emite tu voto.")
}

// Ternary Operator  |  Condition ? true : false 
var number = 1
var result = number === 1 ? "I'm one" : "I'm not one"
console.log(result)

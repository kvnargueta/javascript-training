/* 
  Switch
  Make matching the expression value to a case and execute statements associated with that case. 
  Sintax:
    switch (expression) {
      case value1:
        // Statement
      Break
      case value 2:
        // Statement
      Break
      default: 
       // Statement
      Break
    }
*/

var number = 30;

switch (number) {
  case 1:
    console.log("I'm One!")
  break
  case 10:
    console.log("I'm ten!")
  break
  case 100:
    console.log("Yes, I'm One Hundred")
  break
  default:
    console.log("I'm nothing")
}
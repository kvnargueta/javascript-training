/*
  Loops offer a quick way to do something repeteadly 
  Loops: For, Do... While, While
*/

var students = ["Maria","Sergio","Rosa","Daniel"]

function greetStudents (student) {
  console.log(`Hola, ${student}`)
}

/*
  Init a var at 0, after, repeat until reach the same lengh in the variable students
  i++ add value. If I did not add the i++ that make a infinite loop
*/
for(var i = 0; i < students.length; i++) {
  greetStudents(students[i])
}

// Singular of a group
for(var student of students) {
  greetStudents(student)
}
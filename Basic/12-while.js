/*
  Loop While create a loop for executed determined statements as long. 
*/

var students = ["Maria","Sergio","Rosa","Daniela"]

function greetStudents(student) {
  console.log(`Hola, ${student}`)
}

// While the condition is true, repeat
while(students.length > 0) {
  console.log(students)
  var  student = students.shift()
  greetStudents(student)
}
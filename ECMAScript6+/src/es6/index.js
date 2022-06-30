/*
  First we init NPM (Node Package Manager)
  $ npm init 
  We introduce, name, description, entry-point 

  >>> :::: Install "Code Runner" @ VS Complements
*/

/* ::: Default Params ::: */
// Deprectad Default Parans
function newFunction (name, age, country) {
  var name = name || 'Oscar'
  var name = age || '32'
  var country = country || 'MX';
  console.log(name, age, country)
}

// ES6
// Default params
function newFunction2(name = 'Oscar', age = 32, country="MX") {
  console.log(name, age, country)
}

// If I execute, this uses the default params
newFunction2();
newFunction2("Ricardo", 23,'CO');


/* ::: Template Literals ::: */
// This is the first version. Deprecated
let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)
// ES6. Add Inverted Commas and use $ symbol and braces, inside we put the variable
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)


/* ::: Multiline ::: */
// This is old or deprecated version. We uses back slash and "n" 
let lorem = "Epic lorem ipsum because I don't have one near of me \n"
+ "This is another phrase"
// ES6 Templates Literales. 
let lorem2 = `Another epic phrase that we need
Now this is another epic phrase with epic line
`
console.log(lorem)
console.log(lorem2)


/* ::: Destructuring ::: */
let person = {
  'name': 'Oscar',
  'age': 32,
  'country': 'MX'
}
// How to call - Traditional
console.log(person.name, person.age)

// New version:
let { name, age, country} = person
console.log(name,age)


/* ::: Spread Operator (Propagation) ::: */
// Expand an array, add (...)
let team1 = ["Oscar","Julian","Ricardo"]
let team2 = ["Valeria","Jessica","Camila"]
let education = ['David', ...team1, ...team2]
console.log(education)


/* ::: Let and Const */
// Traditional
var  hola = "Hola"
// Let. Only available in the scope 
{
  // globalVar can be used in this scope and global scope
  var globalVar = "Global var"
}

{
  // globalLet only can use in this scope
  let globalLet = "Global Let"
}

console.log(globalVar)
console.log(globalLet)

// This is a new data structure
// const can't be reasigned
const a = 'b'
// This don't work
a = 'a'
console.log(a)


/* ::: Best Object Option :::*/
let myName = 'Kevin';
let myAge = 27;
// This is the traditional
obj = {myName: myName, myAge: myAge}
// With ES6
obj2 = {myName, myAge}
console.log(obj2)

/* ::: Arrow Function ::: */
const names = [
  {name: 'Oscar', age: 32},
  {name: 'Yessica', age: 27}
]
// We uses the method map with a anon function
// This is traditional...
let listOfNames = names.map(function(item){
  console.log(item.name) // This return the names
})

// This is ES6
let listOfNames2 = names.map(item => console.log(item.name))
const listOfNames3 = (name, age, country) => {
  console.log(item.name)
}
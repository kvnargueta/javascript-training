/*
  Construct Statement for Objects
*/

function makeAuto(brand, model, year) {
  this.brand = brand,
  this.model = model,
  this.year = year
}

var newCar = new makeAuto("Tesla","Model 3","2020")  // New instance. Generate an object

// Return
console.log(newCar)

var newCar2 = new makeAuto("Tesla","Model X","2022")
var newCar3 = new makeAuto("Toyota","Corolla","2020")

// Return
console.log(newCar2)
console.log(newCar3)
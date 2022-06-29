/* Objects Javascript
  In real life a car can be an object. Properties: color, size, weight.
  Methods can be: start, stop, mmove
*/

var myCar = { // Object or Data Container
  brand: "Toyota", // Properties
  model: "Corolla",
  year: 2022,
  carDetail: function(){ // Function = Method
    console.log(`Auto ${this.model} ${this.year}`) // The keyword "This" reffer to the same object
  }
}

console.log(myCar)

// How to access to an object?
console.log(myCar.brand)
console.log(myCar.carDetail())

var articles = [
  { name: "Bicycle", cost: 3000 },
  { name: "TV", cost: 2500 },
  { name: "Book", cost: 320 },
  { name: "Cellphone", cost: 10000 },
  { name: "Laptop", cost: 20000 },
  { name: "Keyboard", cost: 500 },
  { name: "Headphones", cost: 1700 },
]

// ::: filter() Add from another array to a new array the filter output
// Generate a new array
var articlesFiltered = articles.filter( function(article){
  return article.cost <= 500
})
// Return with Console Log
console.log(articlesFiltered)


// ::: map() Show a map from some articles. 
// Generate a new array 
var nameArticle = articles.map( function(article){
  return article.name
})
// Return with Console
console.log(nameArticle)
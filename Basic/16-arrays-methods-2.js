
var articles = [
  { name: "Bicycle", cost: 3000 },
  { name: "TV", cost: 2500 },
  { name: "Book", cost: 320 },
  { name: "Cellphone", cost: 10000 },
  { name: "Laptop", cost: 20000 },
  { name: "Keyboard", cost: 500 },
  { name: "Headphones", cost: 1700 },
]

// ::: find() Help us to find someone in the array
// Return True or False. Make a new array
var findArticle = articles.find(function(article){
  return article.name === "Laptop" // Strict Equal
})
console.log(findArticle)


// ::: forEach() 
// This not make a new array
articles.forEach(function(article){
  console.log(article.name)
})


// ::: some()
// Return true or false, not a list. Make a new variable
var cheapArticles = articles.some(function(article){
  return article.cost <= 700
})
console.log(cheapArticles)
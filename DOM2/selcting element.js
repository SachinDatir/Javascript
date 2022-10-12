//<h1 class = "one" id ="two" name ="nm">Heading1</h1>
// id  
let byId = document.querySelector('#two')
// className 
let byClassName = document.querySelector('.one')
// tagName 
let headOne = document.querySelector('h1')
// commonF  // tagName[attibute="value"]
let comF = document.querySelector('h1[name ="nm"]')
console.log(byId)
console.log(byClassName)
console.log(headOne)
console.log(comF)
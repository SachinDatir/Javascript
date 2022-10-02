// // element create
// // element update 
// // element delete 
// // element retrive

// // javascript 
// // element attrtibute -- retrive
// // element attribute -- add
// // element attribute -- update 
// // element attribute --- delete
// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.documentElement)

// <h1 id="One" class="Two" name="Name">HeadingOne</h1>

// MEthod one for select element
let tagName = document.querySelector('h1')
let ById = document.querySelector('#One')
let ByClass = document.querySelector('.Two')
let attribute = document.querySelector('h1[name="Name"]')
let liList = document.querySelectorAll('li')

/// second method for select element
let a1 = document.getElementById('skd')
let a2 = document.getElementsByClassName('datir')
let a3 = document.getElementsByTagName('h1')
// console.log(a1,a2,a3)

// program2
// Difference between nodeList and htmlCollection

let q1 = document.querySelectorAll('li')   // node list
console.log(q1.length)
let q2 = document.getElementsByTagName('li')  // Html collection
console.log(q2.length)
//An HTMLCollection is a collection of document elements.
// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes

let C = document.querySelector('ul')
let newElement = document.createElement('li')
newElement.textContent ='sanket'
C.appendChild(newElement)
console.log(q2.length)
// console.log(newElement)
let C1 = document.querySelectorAll('li')
//   ADDing CLASS

newElement.className = 'friendsName'
console.log(newElement.className)

newElement.classList = ['more','gunjal','pangare']
console.log(newElement.classList)

newElement.classList.add('Datir')
console.log(newElement.classList)

newElement.classList.forEach((el)=>{
    console.log(el)
})
console.log(newElement)

//  <h1 class="more,gunjal,pangare Datir"></h1>
document.querySelector('.more')
document.querySelector('h1[class="more,gunjal,pangare Datir"]')
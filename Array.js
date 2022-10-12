// //ARRAY node Array.js
let cities2 = ["pune", "akole", "mumbai", "nashik"]
let a = cities2.unshift("sangamner")
let b = cities2.push("ganore")
let c = cities2.pop()
let d = cities2.shift()
console.log(cities2)

// let marks = [11, 22, 33, 44, 55, 66, 77]
// // let e = marks.map(function(el){
// //     return el *2
// // })
// // console.log(e)
// // let f = marks.filter(function(el){
// //     return el >=32
// // })
// // console.log(f)

// // let g = marks.reduce(function(acc,el){
// //     return acc + el
// // },0)
// // console.log(g)


// // let h = marks.forEach(function(el){
// //    // console.log(el*200)
// // })
// // let i = marks.find(function(el,index){
// //     return el>40
// // })
// // console.log(i)

// // let j = marks.findIndex(function(el){
// //     return el > 100
// // })
// // console.log(j)

// // let k = marks.some(function(el){
// //     return el > 10
// // })
// // console.log(k)

// // let l = marks.every(function(el){
// //     return el > 55
// // })
// // console.log(l)

// //ARRAY node Array.js

// //The splice() method adds new items to an array.
// //the slice() method slices out a piece of an array.


// // let  fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(1,2);
// // console.log(fruits)

// let fruitsA = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let ac = fruitsA.slice(-3)
// //console.log(ac)
// //  console.log(fruitsA)


//reverse()
let names1 = ['sachin', 'pankaj', 'sanket', 'rahul']
console.log(names1.reverse())

//flat()
num = [[11, 22, 33], [44, 55, 66], [77, 88, 99]]
console.log(num.flat())

//join()
let names3 = ['sachin', 'datir', 9146753015]
console.log(names3.join('-'))

// concat()

let cities = ['sangamner', 'akole']
let cities1 = ['pune', 'mumbai']
console.log(cities.concat(cities1))
console.log(cities1.concat(cities))

// at()
let citie2 = ['kolhapur', 'satara', 'junner', 'akole']
console.log(citie2.at(3))

//splice()
var names4 = ['pankaj', 'sanket', 'rahul', 'sachin', 'pranamya']
console.log(names4.splice(1, 2), ('shivaji', 'gaurav'))
//ARRAY node Array.js

// let names = new Array(4)
// names[0] = "sachin"
// names[1] = "pankaj"
// names[2] = "sanket"
// names[3] = "rahul"
// console.log(names)

// names.unshift("skd")
// names.push('pranamya')
// console.log(names)
// let B = names.includes('skd')
// console.log(B)
console.log('*****************')
let arr = ['sachin', 'pranamya', 'pankaj', 'rahul', 'sanket']
let a1 = arr.length
for (let i = 0, j = a1 - 1; i < a1 / 2, j > a1 / 2; i++, j--) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
console.log(arr)
//ARRAY node Array.js
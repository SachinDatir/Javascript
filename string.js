//STRING
// convert string to the number
let str = '6'
console.log(typeof (+str))
let num = 45
// convert number to string
let t = num.toString()
console.log(typeof (t))

let name = "sacHin"
let a = name.toUpperCase()
console.log(a)

let b = name.toLowerCase()
console.log(b)
// node day1.js
let c = name.includes("sach")
console.log(c)

let d = name.indexOf("i")
console.log(d)

//trim,trimstart,,trimend

let city = " sangamner  "
console.log(city)
let e = city.trim()
let f = city.trimStart()
let g = city.trimEnd()
console.log(e)
console.log(f.length)
console.log(g.length)

// //toUpperCase()
// toLowerCase()
// includes
// indexOf
// //trim,
// trimstart,
// ,trimend4

// reverse a string 
// 1)==>split('')
// 2)==>reverse()
//3)==>join('')
let str2 = 'Today is Sunday'
let A1 = str2.split('')
A1.reverse()
// console.log(A1)
let B1 = A1.join('')
console.log(B1)
// let str = 'My name is sachin'
// let A = str.split('')
//  A.reverse()
// // console.log(A)
// let C = A.join('')
// console.log(C)




// node string.js
//prime no===>(mul sankhya)


let A = "Sachin"
let rev = ""
for (let i = 0; i < A.length; i++) {

    rev = A[i] + rev

}
console.log(rev)

let arr = [1,2,3,4]


let arr4 = ['sachin', 'interview', 'javascript', 'python']
let a5 = arr4.reduce((acc, el) => {
    if (el.length > acc.length) {
        return el
    }
    else {
        return acc
    }
})
console.log(a5)


let str8 = 'abc,dfer,ghy,njk'
let input = 'fer'
if (str8.includes(input)) {
    console.log(input, 'is available')
}
else {
    console.log(input, 'not available')
}

 // string to Int
let z ="10"
let no10=+z
console.log(no10)

//  string to float
let gr = "9.81"
let G = +gr
console.log(G)

//  float to int
let gra = "9.81"
let Gr = parseInt(gra)
console.log(Gr)



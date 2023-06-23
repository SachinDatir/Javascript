


// short circuting in js
// truthy  -  2,-3,44, true , {} , [] , 8 === 8 , 'sachin' , 'c' , "true"
// falsy value  - 0 , null , undefined , false , 6 !== 6 , '' , NaN

// AND OR NOT

//AND operator need both value true ,,,,,,And operator check both value
// True && True==>True
// False && True ==> False
// True && False ==> false
// False && False ==> false

// OR operator
// true || true ==> true
// false || True ==> true
// true || false ==>  true
// false || false ==> false

//NOT operator
//   false==>true
//   true==> false

let OR = 0 || 0 || 'pranamya'
console.log(OR)


//And operator

let And = 'sach' && 'akole' && 0 && 'sangamner'
console.log(And)


// nullish coalesing operator  ??
//  undefined or null

let obj = {
    firstName: NaN,
    lastName: 'datir',
    age: 23
}
let a3 = obj.firstName ?? 'sachin'
console.log(a3)


// optional operator
// program 7
let info = {
    fullName: {
        firstName: "sachin",
        lastName: "datir"
    },
    parent: {
        mother: {
            firstName: "kanta",
            lastName: "datir"
        }
    }
}
console.log(info.fullName?.firstName)
console.log(info.parent?.mother?.firstName)

console.log('*********************optional******************')


// Es6 
// program1

// rest operator
function rest(...arr) {
    //console.log(arr)
    let sum = arr.reduce((acc, el) => {
        return acc + el
    })
    return sum
}
console.log(rest(12, 33434, 625233, 44))

function add(a, ...arr) {
    let aa = arr.filter((el) => {
        return el > a
    })
    return aa
}
console.log(add(40, 24, 3, 34, 33, 5, 45, 43, 21,88))
console.log('*********************rest************')
// spread operators
let marks = [1, 35, 5, 52, 55, 534, 535, 3]

function addFive(a, b, c, d, e) {
    console.log(a + b + c + d + e)
}
//addFive(marks[0], marks[1], marks[2], marks[3], marks[4])
addFive(...marks)


let a1 = [11,22,33]
let a2 = [44,55,66]
console.log(a1.concat(a2))

console.log(...a1,...a2)

console.log(...a2,...a1)

let aa3 =[12,14,34,33]
let A = [1,...aa3]
console.log(A)
console.log(2,...aa3)

let obj1 = {
    firstName:'sachin',
    lastName:'datir'
}
let obj2={
    mother:'kanta',
    father:'vitthal'
}
let a6 ={...obj1,...obj2}
console.log(a6)

let vehical={
    Name:'fortuner',
    company:'toyota'
}

let vehical2 = vehical
vehical2.Name = 'nexa'
vehical2.company= 'TATA'
console.log(vehical)
console.log(vehical2)

//Array
console.log('^^^^^^^^^^^^^^^^')
let arr = [11,33,55]
let arr2 = [...arr]
let arr3 = arr

arr2[2] = 100
arr3[2] = 56

console.log(arr)
console.log(arr2)
console.log(arr3)


let animal ={
    fullName:'cow',
    legs:4
}
console.log(animal)

let animal2 = {...animal}
animal2.legs = 5
console.log(animal2)



let student = {
    transaction:[1,2],
    transaction2:[1,4]

}
let q1 = [...student.transaction , ...student.transaction2]
console.log(q1)


// Spread operator (…): Although the syntax of the spread operator is exactly the same as the rest parameter, 
// the spread operator is used to spreading an array, and object literals. 
//We also use spread operators where one or more arguments are expected in a function call.
function addFourNumbers(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}

let fourNumbers = [5, 6, 7, 8];

console.log(addFourNumbers(...fourNumbers));

let array1 = [3, 4, 5, 6];
let clonedArray1 = [...array1];
// Spreads the array into 3,4,5,6
console.log(clonedArray1); // Outputs [3,4,5,6]



let obj11 = {x:'Hello', y:'Bye'};
let obj21 = {z:'Yes', a:'No'};
let mergedObj = {...obj11, ...obj21}; // Spreads both the objects and merges it
console.log(mergedObj);
//   node operators.js
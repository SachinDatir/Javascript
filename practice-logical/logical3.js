// //Program 5
// //Print first 10 even numbers

for (let i = 0; i <= 40; i += 2) {
    //console.log(i)
}

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        //  console.log(i)
    }
}

//Print even numbers
let arr = [11, 22, 33, 44, 55, 66, 77]
let even = arr.filter(function (el) {
    return el % 2 == 0
})
console.log(even)

//Print odd numbers
let arr1 = [11, 22, 33, 44, 55, 66, 77]
let odd1 = arr1.filter(function (el) {
    return el % 2 !== 0
})
console.log(odd1)

console.log("----string logical------")

//problem6
let cities = "mumbai,pune,nashik,nagpur"
let userinput = "nashik"
if (cities.includes(userinput)) {
    console.log(userinput + " " + 'is included')
} else {
    console.log(userinput + 'is not included')
}

let cities1 = "mumbai,pune,nashik,nagpur"
let userinput1 = "sangamner"
if (cities.includes(userinput1)) {
    console.log(userinput1 + " " + 'is included')
} else {
    console.log(userinput1 + " " + 'is not included')
}

let names = "sachin rahul pankaj sanket"
let userInput = "sachin"
if (names.includes(userInput)) {
    console.log(userInput + ' ' + 'is included')
} else {
    console.log(userInput + " " + 'is not included')
}

let states = "maha karnataka tamilnadu kerala"
let S = states.includes('maha')
console.log(S)

let states1 = "maharashtra karnataka tamilnadu kerala"
let userInput1 = "maharashtra"
if (states1.indexOf(userInput1) >= 0) {
    console.log(userInput1 + ' ' + 'is available')
} else {
    console.log(userInput1 + " " + 'is not available')
}

let villages = "Ganore akole virgaon talegaon"
let userInput2 = "Ganore"
if (villages.includes(userInput2)) {
    console.log(userInput2 + " " + 'is found')
} else {
    console.log(userInput2 + " " + 'is not found')
}


//Print even numbers

let even1 = [19, 38, 67, 76, 95, 114]
let Ev = even1.filter(function (el) {
    return el % 2 == 0
})
console.log(Ev)

let odd = [23, 46, 69, 92, 115, 138, 161, 184, 207, 230]
let Od = odd.filter(function (el) {
    return el % 2 !== 0
})
console.log(Od)

console.log('next problem')

//Problem 7
//remove spaces in between..

let space = "SAC HIN"
let removespace = ""
for (let i = 0; i < space.length; i++) {
    if (space[i] !== " ") {
        removespace = removespace + space[i]
    }
}
console.log(removespace)

//remove spaces in between..and print reverse

let space1 = "Swarajy a"
let removespace1 = " "
for (let i = 0; i < space1.length; i++) {
    if (space1[i] !== " ") {
        removespace1 = space1[i] + removespace1
    }
}
console.log(removespace1)




for (let i = 0; i <= 18; i += 2) {
    // console.log(i)
}

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// //Program 9
// //Calculate vowels in the string

let vowels = "My name is Sachin Datir"
let count = 0
for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] == 'a' || vowels[i] == 'e' || vowels[i] == 'i' || vowels[i] == 'o' || vowels[i] == 'u') {
        count = count + 1
    }
}
console.log(count)

let vowels1 = "sachin panakaj rahulya"
let count1 = 0
for (let i = 0; i < vowels1.length; i++) {
    if (vowels1[i] == 'a' || vowels1[i] == 'e' || vowels1[i] == 'i' || vowels1[i] == 'o' || vowels1[i] == 'u') {
        count1 = count1 + 1
    }
}
console.log(count1)

//  //Program 11
//  //Take one no and return addition of factors of that no
console.log("--add of factors of number--")

let no = 15
let sum = 0
for (let i = 0; i < no; i++) {
    if (no % i == 0) {
        sum = sum + i
    }
}
console.log(sum)

let num = 3555252
let sum3 = 0
for (let i = 0; i < num; i++) {
    if (num % i == 0) {
        sum3 = sum3 + 1
    }
}
console.log(sum3)
let nu1 = 2323
let factor = 0
for (let i = 0; i < nu1; i++) {
    if (nu1 % i == 0) {
        factor = factor + 1
    }
}
console.log(factor)

let Number = 30
let sum1 = 0
for (let i = 0; i < Number; i++) {
    if (Number % i == 0) {
        sum1 = sum + i
    }
}
console.log("addition of all factors" + " " + sum1)

// for (let i = 30; i >= 0; i -= 3) {
//     //if (i % 2 == 0) {
//     console.log(i)
//     // }
// }
// node logical3.js

// let arr11= [1,2,3,4,5,6,7,8,9,10,11,12]

// let odds = arr11.filter(n => n%2)

// console.log(odds)

// let jk = [67, 897, 787, 78789]
// let A = jk.join('')
// console.log(A)
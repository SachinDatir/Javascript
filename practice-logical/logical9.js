// removing dulpicates from array

let arr = [12, 21, 12, 32, 12, 45, 56, 21, 32]
let a1 = arr.filter((el, index) => {
    return arr.indexOf(el) == index
})
console.log(a1)

//  by Set method

let setA = new Set(arr)
console.log(setA)

//Find the max  from the given array

let arr1 = [12, 34, 54, 34, 57, 8, 76]
let a2 = arr1.reduce((acc, el) => {
    if (el > acc) {
        return el
    } else return acc
})
console.log(a2)

//Find the minimum from the given array

let arr3 = [123, 1234, 123, 45, 123, 134]
let a3 = arr3.reduce((el, acc) => {
    if (acc < el) {
        return acc
    }
    else return el
})
console.log(a3)

// reverse the string(word)

let str = 'today is good day'

let a4 = str.split(' ').reverse().join(' ')
console.log(a4)

// reverse the string (line)

function rev(str) {
    let rev = ''
    for (let i = 0; i < str.length; i++) {
        rev = str[i] + rev
    }
    return rev
}
console.log(rev('today is wednesday'))

//find the largest word in the string

let str3 = 'find the largest word in the string'
let a5 = str3.split(' ').reduce((acc, el) => {
    if (acc.length < el.length) {
        return el
    } else {
        return acc
    }
})
console.log(a5)


// //find the smallest word in the string

let str4 = 'Iam learning logical question'
let a6 = str4.split(' ').reduce((acc, el) => {
    if (el.length > acc.length) {
        return acc
    } else {
        return el
    }
})
console.log(a6)


//Print first 10 odd numbers
for (let i = 1; i <= 20; i += 2) {
    //console.log(i)
}

//Print first 10 odd numbers
for (let i = 0; i <= 20; i += 2) {
    // console.log(i)
}

//  find user input available or not in string
let cities = 'pune mumbai nashik nagpur'
let userInput = 'Mumbai'
if (cities.includes(userInput)) {
    // console.log(`${userInput} is available in the string`)
} else {
    // console.log(`${userInput} is not available in the string`)
}

//remove spaces in between
let name = 'Min sk ole'
let removeSpace = ' '
for (let i = 0; i < name.length; i++) {
    if (name[i] != " ") {
        removeSpace = removeSpace + name[i]
    }
}
// console.log(removeSpace)

//remove spaces in between and print out in a reverse way or also in uppercase
let name1 = 'Min sk ole'
let removeSpace1 = ' '
for (let i = 0; i < name1.length; i++) {
    if (name1[i] != " ") {
        removeSpace1 = name1[i].toUpperCase() + removeSpace1
    }
}
console.log(removeSpace1)

//Calculate vowels in the string
let str5 = 'My nAme is sachin datIr And yOUr NamE?'
let count = 0
for (let i = 0; i < str5.length; i++) {
    if (str5[i] == 'a' || str5[i] == 'e' || str5[i] == 'i' || str5[i] == 'o' || str5[i] == 'u') {
        count = count + 1
    }
    else if (str5[i] == 'A' || str5[i] == 'E' || str5[i] == 'I' || str5[i] == 'O' || str5[i] == 'U') {
        count = count + 1
    }
}
console.log(count)

//Take one no and return addition of factors of that no
let Nu = 15
let c = 0
for (let i = 0; i < Nu; i++) {
    if (Nu % i == 0) {
        c = c + i
    }
}
console.log(c)

//Check no whether that no is perfect no or not

function perfect(n) {
    let sum = 0
    for (let i = 0; i < n; i++) {
        if (n % i == 0) {
            sum = sum + i
        }
    }
    if (sum == n) {
        console.log(n + ' is a perfect number')
    }
    else {
        console.log(n + ' is not a perfect number')
    }
}
perfect(28)


//
//         node logical9.js
//        cd practice-logical
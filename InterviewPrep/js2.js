//  remove Duplicate elements from array
let arr = [12, 31, 14, 41, 12, 15, 51, 15]
let a1 = arr.filter((el, index) => {
    return arr.indexOf(el) == index
})
console.log(a1)

//  by set method
let set = new Set(arr)
console.log(set)

//Find the max and min from the given array

let arr1 = [12, 32, 11, 45, 65, 33]
let a2 = arr1.reduce((acc, el) => {
    if (el > acc) {
        return el
    }
    else {
        return acc
    }
})
console.log(a2)
let a3 = arr1.reduce((acc, el) => {
    if (el > acc) {
        return acc
    }
    else {
        return el
    }
})
console.log(a3)

//Reverse the string
let str = 'Today is sunday'
let rev = " "
for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev
}
console.log(rev)

//  find the largest word in the string
let str1 = "find the largest word in the string"
let a4 = str1.split(' ').reduce((acc, el) => {
    if (el.length > acc.length) {
        return el
    } else {
        return acc
    }
})
console.log(a4)

//  find the smallest word in the string
let a5 = str1.split(' ').reduce((acc, el) => {
    if (el.length > acc.length) {
        return acc
    } else {
        return el
    }
})
console.log(a5)

//Print first 10 even numbers
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//Print first 10 odd numbers
for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

//  user input available or not
let cities = 'Mumbai Pune nashik nagpur'
function User(input) {
    if (cities.includes(input)) {
        console.log(input, 'is available')
    }
    else {
        console.log('not available')
    }
}
User('nashik')
User('pune')

//remove spaces in between and print out in a reverse way
let str2 = "DatirS achin"
removeSpace = ''
for (let i = 0; i < str2.length; i++) {
    if (str[i] !== ' ') {
        removeSpace = str2[i] + removeSpace
    }
}
console.log(removeSpace)

//Calculate vowels in the string

let str3 = 'I Am learning JS with Cypress'
let count = 0
let count1 = 0
let Cap = []
let small = []
for (let i = 0; i < str3.length; i++) {
    if (str3[i] == 'a' || str3[i] == 'e' || str3[i] == 'i' || str3[i] == 'o' || str3[i] == 'u') {
        count++
        Cap.push(str3[i])
    }
    else if (str3[i] == 'A' || str3[i] == 'E' || str3[i] == 'I' || str3[i] == 'O' || str3[i] == 'U') {
        count1++
        small.push(str3[i])
    }
}
console.log(count, count1, Cap, small)

//  Factorial of any Number
function Factorial(N) {
    let count = 1
    for (let i = N; i >= 1; i--) {
        count = count * i
    }
    console.log(count)
}
Factorial(4)

//Take one no and return addition of factors of that no
let Num = 5
let sum = 1
for (let i = 0; i < Num; i++) {
    if (Num % 2 == 0) {
        sum = sum + i
    }

}
console.log(sum)

//Check no whether that no is perfect no or not
function perfect(N) {
    let sum = 0
    for (let i = 0; i < N; i++) {
        if (N % i == 0) {
            sum = sum + i
        }
    }
    if (N == sum) {
        console.log(N, 'is perfect Number')
    }
    else {
        console.log(N, 'is not perfect')
    }
}
perfect(28)


//Take one no and return the no of digit from that no
let n = 2431
let result = []
newN = n.toString()
for (let i = 0; i < newN.length; i++) {
    result.push(newN.charAt(i))
}
console.log(result)




//  cd interviewPrep
//  node js2.js
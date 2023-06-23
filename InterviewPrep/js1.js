//  reverse String by words
let str = "today is friday"
let a = str.split(' ').reverse().join(' ')
console.log(a)

let arr = ['today', 'is', 'good', 'day']
let a1 = arr.reverse()
console.log(typeof (a1))

let arr1 = ['sangamner', 'pune', 'banglore', 'chennai']
let a3 = arr1.length
for (let i = 0, j = a3 - 1; i <= a3 / 2, j >= a3 / 2; i++, j--) {
    let f = arr1[i]
    arr1[i] = arr1[j]
    arr1[j] = f
}
console.log(arr1)

let arr2 = ['sachin', 'pankaj', 'pranamya', 'sanket', 'rahul']
let a4 = arr2.length
for (let i = 0, j = a4 - 1; i <= a4 / 2, j > a4 / 2; i++, j--) {
    let b = arr2[i]
    arr2[i] = arr2[j]
    arr2[j] = b
}
console.log(arr2)

//  remove +ve or -ve
let arr3 = [12, 21, 23, 32, -32, -9, -8, -4]
let positive = []
let negetive = []
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] >= 0) {
        positive.push(arr3[i])
    }
    else if (arr3[i] <= 0) {
        negetive.push(arr3[i])
    }
}
console.log(negetive, positive)

//  input is available or not
let str3 = 'sachin datir 2fjajakdlhlj'
let input = 'jaja'
if (str3.includes(input)) {
    console.log(input, 'is available')
}
else {
    console.log(input, 'not available')
}

function facto(N) {
    let C = 1
    for (let i = N; i >= 1; i--) {
        C = C * i
    }
    console.log(C)
}
facto(3)


function facto2(N) {
    let C = 1
    for (let i = N; i >= 1; i--) {
        C = C * i
    }
    console.log(C)
}
facto2(4)

// Prime Number
function Prime(N) {
    let count = 0
    for (let i = 2; i < N; i++) {
        if (N % 2 == 0) {
            count = 1
        }
    }
    if (count == 1) {
        console.log(N, 'is not prime No')
    }
    else if (count == 0) {
        console.log(N, 'is prime no')
    }
}
Prime(12)
Prime(13)



function Prime1(N) {
    let count = 0
    for (let i = 2; i <= N; i++) {
        if (N % 2 == 0) {
            count = 1
            break
        }
    }
    if (count == 1) {
        console.log(N, 'is not prime no')
    }
    else if (count == 0) {
        console.log(N, 'is prime no')
    }
}
Prime1(80)

function Facto3(N) {
    let C = 1
    for (let i = N; i >= 1; i--) {
        C = C * i
    }
    console.log(C)
}
Facto3(5)


//  fibonacci series
function Fibo(N) {
    let a = 0, b = 1
    let sum = a + b
    for (let i = 3; i <= N; i++) {
        let c = a + b
        console.log(c)
        a = b
        b = c
        sum++
    }
    console.log(sum)
}
Fibo(9)


function FIBO(N) {
    let a = 0, b = 1
    for (let i = 3; i <= N; i++) {
         c = a + b
        console.log(c)
        a = b
        b = c
    }
}
FIBO(7)
//  Star pattern
for (let i = 0; i <= 5; i++) {
    let s = ' '
    for (let j = 0; j < i; j++) {
        s += '*'
    }
    // console.log(s)
}
//  2nd star pattern
for (let i = 5; i >= 1; i--) {
    let s = ''
    for (let j = 0; j <= 5; j++) {
        if (j >= i) {
            s += '*'
        }
        else if (i > j) {
            s += ' '
        }
    }
    // console.log(s)
}

console.log('************************')
for (let i = 5; i >= 1; i--) {
    let s = ' '
    for (let j = 5; j >= 1; j--) {
        if (j >= i) {
            s += ' '
        }
        else if (j <= i) {
            s += '*'
        }
    }
    // console.log(s)
}

function Matrix(N) {
    let
}
// cd interviewPrep
//  node js1.js

let date = new Date()
// console.log(typeof (date))
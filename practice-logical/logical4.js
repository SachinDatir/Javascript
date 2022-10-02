let info = "i am learning js"
let small = info.split(" ").reduce(function (acc, el) {
    if (el.length > acc.length) {
        return acc
    }
    else {
        return acc
    }
})
console.log(small)

let info2 = ["sachin", "manoj", "rahul1", "pankaj"]
let small1 = info2.reduce(function (acc, el) {
    if (el.length > acc.length) {
        return acc
    }
    else {
        return el
    }
})
console.log(small1)

// //Program 12
// //Check no whether that no is perfect no or not

let number = 28
let sum = 0
for (let i = 0; i < number; i++) {
    if (number % i == 0) {
        sum = sum + i
    }
}
if (sum == number) {
    console.log(number + " " + 'no is perfect no')
}
else {
    console.log(number + " " + 'no is not perfect no')
}


let A = 496
let sum1 = 0
for (let i = 0; i < A; i++) {
    if (A % i == 0) {
        sum1 = sum1 + i
    }
}
if (sum1 == A) {
    console.log(A + " " + 'is perfect number')
} else {
    console.log(A + " " + "is not perfect number")
}

let B = 28
sum2 = 0
for (let i = 0; i < B; i++) {
    if (B % i == 0) {
        sum2 = sum2 + i
    }
}
if (sum2 == B) {
    console.log(B + " " + 'is perfect no')
} else {
    console.log(B + " " + 'is not perfect no')
}

let C = 496
let sum3 = 0
for (let i = 0; i < C; i++) {
    if (C % i == 0) {
        sum3 = sum3 + i
    }
}
if (sum3 == C) {
    console.log(C + " " + 'is perfect number')
} else {
    console.log(C + " " + 'is not perfect number')
}


// //Program 13
// //Take one no and return the no of digit from that no

let Z = 4323
let result = []
newN = Z.toString()
for (let i = 0; i < newN.length; i++) {
    result.push(newN.charAt(i))
}
console.log(result)

let X = 4554
let result1 = []
newN = X.toString()
for (let i = 0; i < newN.length; i++) {
    result1.push(newN.charAt(i))
}
console.log(result1)
//  node logical4.js 

let W = 234556
let result4 = []
newE = W.toString()
for (let i = 0; i < newE.length; i++) {
    result4.push(newE.charAt(i))
}
console.log(result4)

let S = "Sachin"
let result5 = []
newN = S.toString
for (let i = 0; i < newN.length; i++) {
    result5.push(newN.charAt(i))
}
console.log(result5)

let F = "maharashtra"
let result6 = []
newN = F.toString()
for (let i = 0; i < newN.length; i++) {
    result6.push(newN.charAt(i))
}
console.log(result6)

function returnDigit(r) {
    let result8 = []
    newN = r.toString()
    for (let i = 0; i < newN.length; i++) {
        result8.push(newN.charAt(i))
    }
    return result8
}
console.log(returnDigit(33553))
//  node logical4.js 

let G = "india Is my country"
let result7 = []
newN = toString()
for (let i = 0; i < newN.length; i++) {
    result7.push(newN.charAt(i))
}
console.log(result7)

let str = "india"
let rev = " "
for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev
}
//console.log(rev)
rev1 = " "
for (let i = str.length - 1; i >= 0; i--) {
    rev1 = rev1 + str[i]
}
console.log(rev1)

let str2 = 'maharashtra'
rev2 = ' '
for (let i = 0; i < str2.length - 1; i++) {
    rev2 = str2[i].toLocaleUpperCase() + rev2
}
console.log(rev2)

let str3 = 'Sachin'
rev3 = ' '
for (let i = str3.length - 1; i >= 0; i--) {
    rev3 = rev3 + str3[i].toLocaleUpperCase()
}
console.log(rev3)
//  node logical4.js

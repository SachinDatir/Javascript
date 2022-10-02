/// remove duplicate element  by filter

let arr = [22, , 22, 43, 23, 2, 1, 6, 2, 5, 6]
let A = arr.filter(function (el, index) {
    return arr.indexOf(el) == index
})
console.log(A)

//   remove duplicate element  by Set method
let A1 = new Set(A)
console.log(A1)


let arr2 = [11, 22, 33, 44, 89, 98, 22, 33, 11]
let removeD = []
for (let i = 0; i < arr2.length; i++) {
    if (!removeD.includes(arr2[i])) {
        removeD.push(arr2[i])
    }

}
console.log(removeD)

let A3 = arr2.filter(function (el, i) {
    return arr2.indexOf(el) == i
})
console.log(A3)


//Calculate count of capitals and small letters in the string
let name1 = 'My Name Is Sachin Datir'
let capital = ''
let small = ''
for (let i = 0; i < name1.length; i++) {
    if (name1[i] >= 'A' && name1[i] <= 'Z') {
        // capital += name1[i]
        capital++
    }
    if (name1[i] >= 'a' && name1[i] <= 'z') {
        // small += name1[i]
        small++
    }
}
console.log(capital)
console.log(small)


let row = 3
let col = 3
for (i = 0; i < row.length; i++) {
    for (j = 0; j < col.length; j++) {
        if (row[i] == col[j]) {
            console.log("*")
        }
    }
}

// factorial of any no 
let fac1 = 5
let c = 1
for (let i = fac1; i >= 1; i--) {
    c = c * i
}
console.log(c)


let a = 4
let f = 1
for (let i = a; i >= 1; i--) {
    f = f * i
}
console.log(f)
console.log('factor of any number')
let b = 3
let fac = 1
for (let i = b; i >= 1; i--) {
    fac = fac * i
}
console.log(fac)
//Take one no and return addition of factors of that no
console.log("--add of factors of number--")
function addFactor(N) {
    let sum = 0
    for (let i = 0; i < N; i++) {
        if (N % i == 0) {
            sum = sum + i
        }
    }
    console.log(sum)
}
console.log(addFactor(12))
addFactor(11)

let x = 16
let sum = 0
for (let i = 0; i < x; i++) {
    if (x % i == 0) {
        sum = sum + i
    }
}
console.log(sum)

console.log("--add of factors of number--")

function AddOfFactors(n) {
    let sum = 0
    for (let i = 0; i < n; i++) {
        if (n % i == 0) {
            sum = sum + i
        }
    }
    console.log(sum)
}
AddOfFactors(5)
// prime no

let no = 11
let count1 = 0
for (let i = 2; i < no; i++) {
    if (no % i == 0) {
        count1 = 1
    }
}
if (count1 == 0) {
    console.log(`${no} is prime Number`)
}
else if (count1 == 1) {
    console.log(`${no} is not prime Number`)
}

function prime(N) {
    count2 = 0
    for (let i = 2; i < N; i++) {
        if (N % i == 0) {
            count2 = 1
        }
    }
    if (count2 == 0) {
        console.log(`${N} is prime Nu`)
    }
    else if (count2 == 0) {
        console.log(`${N} is not prime Nu`)
    }
}
console.log(prime(53))

function PRIME(n) {
    let prime = 0
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = 1
        }
    }
    if(prime==0){
        console.log(n, 'is prime no')
    }
    else if(prime==1){
        console.log(n,'is not prime n')
    }
}
PRIME(8)
///  node logical6.js
/// cd practice-logical
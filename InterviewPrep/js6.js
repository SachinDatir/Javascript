//  compare to obj 
let obj1 = {
    Name: "Sachin",
    lastName: "datir",
    skills: ["js", "cypress", "python"]
}

let obj2 = {
    Name: "Skd",
    lastName: "datir",
    skills: ["js", "cypress", "python"]
}

function compare(obj1, obj2) {
    let a1 = JSON.stringify(obj1)
    let a2 = JSON.stringify(obj2)
    return a1 == a2
}
console.log(compare(obj1, obj2))

//  get all properties of obj in array
let Info = {
    Name: "Sachin",
    lastName: "Datir",
    Skills: ['js', 'python', 'cypress']
}

let a3 = Object.keys(Info)
console.log(a3)

let a4 = Object.values(Info)
console.log(a4)


//  swap number 
let a = 2;
let b = 3;
[b, a] = [a, b]
console.log(a)
console.log(b)


let arr = [33, 44, 55, -23, 66, 77, 88]
let az = arr.reduce((acc, el) => {
    if (el > acc) {
        return acc
    }
    else {
        return el
    }
})

console.log(az)

let promi = new Promise((resolve, reject) => {
    let a = 10
    let b = 12
    if (a == b) {
        console.log(resolve)
    }
})

let arr2 = [12, 23, 34, "sachin", 14]
let arr3 = []
let str = ""
for (let i = 0; i < arr2.length; i++) {
    if (typeof arr2[i] == "number") {
        arr3.push(arr2[i])
    }
    else if (typeof arr2[i] == "string") {
        str = str + arr2[i]
    }
}
console.log(arr3, str)


function Prime(N) {
    let c = 0
    for (let i = 2; i < N; i++) {
        if (N % i == 0) {
            c = 1
        }
        break
    }
    if (c == 0) {
        console.log(N, "is  prime number")
    }
    else if (c == 1) {
        console.log(N, "is not prime number")
    }
}
Prime(12)
Prime(3)
Prime(7)

function fibo(N) {
    let a = 0, b = 1
    for (let i = 3; i <= N; i++) {
        let c = a + b
        console.log(c)
        a = b
        b = c
    }
}
fibo(7)

function Factor(N) {
    let c = 1
    for (let i = N; i > 1; i--) {
        c = c * i
    }
    console.log(c)
}
Factor(4)

let arr4 = [12, 34, 56, 78, 67, 98]
arr4.forEach((el, index) => {
    if (index == 4) {
        console.log(el)
        return
    }
})


for (let i = 0; i < arr4.length; i++) {
    if (i == 3) {
        console.log(arr4[i])
    }
}


let arr5 = [12, 0, 34, 0, 12, 0]


//  remove duplicate el from array
let arr6 = [12, 56, 76, 12, 2, 6, 2, 9]
let rr = arr6.filter((el, index) => {
    return arr6.indexOf(el) == index
})
console.log(rr)

let str1 = "Sachin124323521786"
let z = str1.split(' ')
console.log(z)
var d = []
for (let i = 0; i < z.length; i++) {
    if (Number(z[i])) {
        d.push(z[i])
    }
}
console.log(d)

// 
let rrr = str1.split('').filter((el) => {
    return Number(el)
}).map((el) => {
    return Number(el)
})
console.log(rrr)

let r1 = rrr.filter((el, index) => {
    return rrr.indexOf(el) == index
})

console.log(r1)


//  add all element except the current index 
let input = [1, 2, 3, 4, 5]
let arr1 = []
for (let i = 0; i < input.length; i++) {
    let sum = 0
    for (let j = 0; j < input.length; j++) {
        if (j != i) {
            sum = sum + input[j]
        }
    }
    arr1.push(sum)
}
console.log(arr1)

// other way 
const output = input.map(num => 15 - num)
console.log(output)

//  covert num into array

let num = 1314

function converter(para) {
    return Number(para)
}
let Numarray = Array.from(String(num), converter)
console.log(Numarray)


let sum1 = [11, 22, 99, 66, 55, 77, 66, 55, 11, 45, 66, 55, 12]
let count = 0
for (let i = 0; i < sum1.length; i++) {
    if (sum1[i] === 55) {
        count = count + 1
    }
}
console.log(count)

let number = {
    a: 3,
    b: 4,
    c: 8,
    a: 7
}
for (let key in number) {
    number[key] = number[key] * number[key]
}
console.log(number)


for(let i =0;i<=5;i++){
    let s =""
    for(let j = 0;j<=i;j++){
        s+='*'
    }
    console.log(s)
}
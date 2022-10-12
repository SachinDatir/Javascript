//  //Program 4
//  //find the largest word in the string()
// let string = "i am learning javascript"
// let largest = string.split(' ').reduce(function (acc, el) {
//     if (el.length > acc.length) {
//         return el
//     } else {
//         return acc
//     }
// })
// console.log(largest)

// // node logical2.js

// let string2 = " i am learning javascript in visualstudio code "

// let large = string2.split(' ').reduce(function(acc,el){
//     if(el.length>acc.length){
//         return el
//     }else{
//         return acc
//     }
// })
// console.log(large)

// let string3 = " learning cypress in cypress@9.7"
// let large1 = string3.split(' ').reduce(function(acc,el){
//     if(el.length>acc.length){
//         return el
//     }else{
//       return acc
//     }
// })
// console.log(large1)

let skd = ["sangamner", "akolecity", "pune", "nashik"]
let SSS = skd.reduce(function (el, acc) {
    if (el.length > acc.length) {
        return acc
    } else {
        return el
    }

})
console.log(SSS)

let string22 = " i am learning javascript in visualstudio code"

let small = string22.split(" ").reduce(function (acc, el) {
    if (el.length > acc.length) {
        return acc
    } else {
        return el
    }
})
console.log(small)

//find the largest word in the string()

let str = "my name is sachin"
let lar = str.split(' ').reduce(function (acc, el) {
    if (el.length > acc.length) {
        return el
    } else {
        return acc
    }
})
console.log(lar)

// // node logical2.js

let str1 = "my name iss sachin"
let lar1 = str1.split(' ').reduce(function (acc, el) {
    if (el.length > acc.length) {
        return acc
    } else {
        return el
    }
})
console.log(lar1)



let arr = ["maharashtra", "karnataka", "hariyana", "tamilnadu"]
let larA = arr.reduce(function (acc, el) {
    if (el.length > acc.length) {
        return el
    } else {
        return acc
    }
})
console.log(larA)

let arr1 = ["maharashtra", "karnataka", "hariyana", "tamilnadu"]
let larA1 = arr1.reduce(function (acc, el) {
    if (el.length > acc.length) {
        return acc
    } else {
        return el
    }
})
console.log(larA1)


//find the largest number in the array()

let arr2 = [12211, 34414, 43444, 4444414, 4141141]
let larA2 = arr2.reduce(function (el, acc) {
    if (el > acc) {
        return el
    } else {
        return acc
    }
})
console.log(larA2)

// node logical2.js

//find the smallest number in the array()
let arr3 = [12211, 34414, 43444, 4444414, 4141141]
let larA3 = arr3.reduce(function (el, acc) {
    if (el > acc) {
        return acc
    } else {
        return el
    }
})
console.log(larA3)

//  removing dulpicates from array Using set()

let set = [1, 2, 31, 33, 1, 2, 55, 66, 31]
let A = new Set(set)
console.log(A)

let dup = [12, 23, 4234, 12, 333, 23, 4234, 32, 43, 4]
let removedup = []
for (let i = 0; i < dup.length; i++) {
    if (!removedup.includes(dup[i])) {
        removedup.push(dup[i])
    }
}
console.log(removedup)


let duplicate = [21, 312, 421, 21, 23, 43, 23, 312]
let B = duplicate.filter(function (el, index) {
    return duplicate.indexOf(el) == index
})
console.log(B)


let dupli = [2323,32424,4441414,2323,12,43,12]
let out = dupli.filter(function(el,index){
    return dupli.indexOf(el)==index
})
console.log(out)
// node logical2.js


let str4 = "i am learning javascript"
let S = str4.split(' ').reduce(function(acc,el){
    if(el.length>acc.length){
        return el 
    }else{
        return acc
    }
})
console.log(S)
// node logical2.js

let strS = "javascript python encapsulation Dom"
let R = strS.split(' ').reduce(function(acc,el){
    if(el.length>acc.length){
        return el
    }else{
        return acc
    }
})
console.log(R)

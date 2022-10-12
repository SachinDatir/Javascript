//INTERVIEW Logical Questions
// Program 1
// removing dulpicates from array using includes

// let A = [12, 1, 23, 12, 18, 23, 12, 13, 12, 14, 12, 1, 18]
// let removeDouble = []
// for (let i = 0; i < A.length; i++) {
//     if (!removeDouble.includes(A[i])) {
//         removeDouble.push(A[i])
//     }
// }
// //console.log(removeDouble)

// //  node logical.js  

// // removing dulpicates from array Using indexOf()
// let B = [12, 23, 24, 21, 12, 12, 1, 21, 12]
// let removeDuplicate = []
// for (let i = 0; i < B.length; i++) {
//     if (!removeDuplicate.indexOf(B[i]) < 0) {
//         removeDuplicate.push(B[i])
//     }
// }

// //console.log(removeDuplicate)
// console.log('====')

// //  removing dulpicates from array Using filter()
// let C = [12, 23, 24, 21, 12, 12, 1, 21, 12]
// let filterr = C.filter(function (el, index) {
//     return C.indexOf(el) == index
// })
// console.log(filterr)

// //  node logical.js
// console.log('====')

// //  removing dulpicates from array Using set()
// //Set()==>A JavaScript Set is a collection of unique values. Each value can only occur once in a Set
// let D = [12, 23, 24, 21, 12, 12, 1, 21, 12]
// let S = new Set(D)
// //console.log(S)


// // removing dulpicates from array using includes()
// let aa = [11, 22, 33, 44, 89, 98, 22, 33, 11]
// let removeD = []
// for (let i = 0; i < aa.length; i++) {
//     if (!removeD.includes(aa[i])) {
//         removeD.push(aa[i])
//     }
// }
// //console.log(removeD)

// let cc = [23, 25, 56, 71, 23, 2, 35, 25]
// let F = cc.filter(function (el, index) {
//     return cc.indexOf(el) == index
// })
// console.log(cc)
// let DA = [21,23,25,65,1,4,21,35]
// let SA = new Set(DA)
// console.log(SA)



//Find the max from the given array
let arr1 = [100, -100, 199, 7998, 65, 7890, 776, -9000]
let skd = arr1.reduce(function (acc, el) {
    if (el > acc) {
        return el
    }
    else {
        return acc
    }
}, 0)
console.log(skd)
//  node logical.js


let arr2 = [123, 445, , 5666, 666, 666, , 555, 443332]
let skd1 = arr2.reduce(function (acc, el) {
    if (el > acc) {
        return el
    }
    else {
        return acc
    }
}, 0)
console.log(skd1)

let arr3 = [123, 333, 44455, 6666, 4535356464234, 645635244, 43443535241]
skd2 = arr3.reduce(function (acc, el) {
    if (el > acc) {
        return el
    }
    else {
        return acc
    }
}, 0)
console.log(skd2)

//  node logical.js

//Find the minimum from the given array

let arr4 = [123, -44544, 633633, 636757557, 46477, 65355, 534677, 757775]
skd4 = arr4.reduce(function (acc, el) {
    if (el > acc) {
        return acc
    }
    else {
        return el
    }
})
console.log(skd4)


let arr5 = [11, 222, 3325364, 6464663, 366366, 3563, 3353, 3666, 6555554666646, 66746464666, 6, 6, 65645333535, 6, 6646, 366, 6, , 6666355, 5, 5, 5, 555]
let skd3 = arr5.reduce(function (acc, el) {
    if (el > acc) {
        return el
    }
    else {
        return acc
    }

})
console.log(skd3)

let arr6 = [119, 324, 343, 32555, -444444, -3443434, 44344, -434445]
let skd5 = arr6.reduce(function (acc, el) {
    if (el > acc) {
        return acc
    } else {
        return el
    }
})
console.log(skd5)

//Program 3
// //Reverse the string from the array
console.log('reverse string')
//  node logical.js

let str = "sachin"
let rev = ""
for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev
}
console.log(rev)

let string = "akole"
let rev1 = ""
for (let i = 0; i < string.length; i++) {
    rev1 = string[i] + rev1
}
console.log(rev1)
console.log('OR')

let rev2 = " "
for (let i = string.length - 1; i >= 0; i--) {
    rev2 = rev2 + string[i]
}
console.log(rev2)

// method(1)
let city = "sangamner"
let rev3 = ""
for (let i = city.length - 1; i >= 0; i--) {
    rev3 = rev3 + city[i]
}
console.log(rev3)

// method(2)
rev4 = ""
for (let i = 0; i < city.length; i++) {
    rev4 = city[i] + rev4
}
console.log(rev4)

//find the maximum number form array

let max = [111, 3535, , 5355, -45542525, 252331244, 23434442, 54444]
let A = max.reduce(function (acc, el) {
    if (el > acc) {
        return el
    } else {
        return acc
    }
})
console.log(A)
//  node logical.js

let B = max.reduce(function (acc, el) {
    if (el > acc) {
        return acc
    } else {
        return el
    }
})
console.log(B)

// removing dulpicates from array using includes

let dup = [123, 55, 532, 55, 123, 43434, 532]
let removeDuplicate = []
for (let i = 0; i < dup.length; i++) {
    if (!removeDuplicate.includes(dup[i])) {
        removeDuplicate.push(dup[i])
    }
}
console.log(removeDuplicate)

let duplicate = [34, 55, 66, 777, 88, 55, 66, 56, 88]
let removedouble1 = []
for (let i = 0; i < duplicate.length; i++) {
    if (!removedouble1.includes(duplicate[i])) {
        removedouble1.push(duplicate[i])
    }
}
console.log(removedouble1)


//  node logical.js
//  removing dulpicates from array Using filter()
let dup1 = [413, 34, 55, 66, 777, 413, 34, 55]
let removeDouble = []
let rrr = dup1.filter(function (el, index) {
    return dup1.indexOf(el) == index
})
console.log(rrr)

let dup2 = [321, 34324, 3423, 321, 344, 43, 445, 34324]
let removeD = []
let aaa = dup2.filter(function (el, index) {
    return dup2.indexOf(el) == index
})
console.log(aaa)

//  removing dulpicates from array Using set()
//set()return collection of unique value
let dup3 = [1212, 34, 54, 56, 76, 54, 34, 23, 76]
let set = new Set(dup3)
console.log(set)
//  node logical.js


let village = 'ganore'
let revv = ' '
for (let i = 0; i < village.length; i++) {
    revv = village[i].toLocaleUpperCase() + revv
}
console.log(revv)

let vill = 'GANORE'
let revvv = ''
for (let i = vill.length - 1; i >= 0; i--) {
    revvv = revvv + vill[i].toLowerCase()
}
console.log(revvv)



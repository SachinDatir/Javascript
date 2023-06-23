// find max and min element of array 
let arr = [13, 343, 534553223, 53455, 5535]
let A = arr.reduce(function (acc, el) {
    if (el > acc) {
        return el
    }
    else if (acc > el) {
        return acc
    }
})
// console.log(A)

let arr2 = [13, 343, 534553223, 53455, 5535]
let B = arr2.reduce(function (acc, el) {
    if (el > acc) {
        return acc
    }
    else {
        return el
    }
})
// console.log(B)

//  7pm batch prathamesh=====>find max and min element of array 
let arr3 = [322, 5325, 75477, 75, 564, 63535, 998833]
let max = arr3[0]
let min = arr3[0]
for (let i = 0; i < arr3.length; i++) {
    if (max <= arr3[i]) {
        max = arr3[i]
    }
    if (min >= arr3[i]) {
        min = arr3[i]
    }
}
console.log(max, min)


let arr4 = [434, 56, 75335, 5474, 75666, 5456446, 46666, 46646]
let max2 = arr4[0]
let min2 = arr4[0]
for (let i = 0; i < arr4.length; i++) {
    if (max2 <= arr4[i]) {
        max2 = arr4[i]
    }
    if (min2 >= arr4[i]) {
        min2 = arr4[i]
    }
}
console.log(max2, min2)

// find max and min element of array using function

function MaxMin(a) {
    let max3 = a[0]
    let min3 = a[0]
    let n = a.length
    for (let i = 0; i < n; i++) {
        if (max3 <= a[i]) {
            max3 = a[i]
        }
        if (min >= a[i]) {
            min3 = a[i]
        }
    }
    console.log(max3, min3)
}
//console.log(MaxMin([11246, , 556365, 53535, 555353, 53533, 333333, 333545, 64653, 7546]))

// Find pair of elements in array with sum is equal to given number
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
let arr9 = [3,2,4,5,1,3]
let k2 = 6
for(let i = 0 ; i<arr9.length;i++){
    for(let j = 0;j!=i,j<arr9.length;j++){
        if(arr9[i]+arr9[j]==k2){
            console.log(i,j)
            break;
        }
    }
}
console.log('>>>>>>>>>>>>>>>>>')
let arr5 = [3, 2, 5, 6, 2, 6, 4, 1]
let k = 7
let ii = undefined
let jj = undefined
for (let i = 0; i < arr5.length; i++) {
    for (let j = 0; j != i, j < arr5.length; j++) {
        if (arr5[i] + arr5[j] == k) {
            ii = i
            jj = j
            break
        }
    }
}
console.log(ii)
console.log(jj)

let z = [3, 2, 6, 3, 7, 0]
let k1 = 9
for (let i = 0; i < z.length; i++) {
    for (let j = 0; j != i, j < z.length; j++) {
        if (z[i] + z[j] == k1) {
            console.log(i, j)
            break;
        }
    }
}

//Can a given array be made strictly increasing or not(based on current elements)
// let arr6 = [11, 9, 13, 14, 15, 16, 17]
// let d = new Set(arr6)
// if (d.size == arr6.length) {
//     console.log('Yes')
// }
// else {
//     console.log('no')
// }

// let arr7 = [21, 22, 3, 7, 9, 11]
// let e = new Set(arr7)
// if (e.size == arr7.length) {
//     console.log('yes')
// }
// else {
//     console.log('no')
// }
// let d1 = [11, 9, 13, 14, 15, 16, 17]
// let s = new Set(d1)
// if (s.size == d1.length) {
//     console.log('Yes')
// }
// else {
//     console.log('No')
// }
// //  node day8.js
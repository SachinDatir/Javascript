
// let arr = [34, 11, 23, 43]

// function Max(arr) {
//     m = [0]
//     for (let i = 0; i < arr.length; i++) {
//         if (m < arr[i])
//             m = arr[i]
//     }
//     return m
// }
// console.log(Max([34, 11, 23, 43]))

// function sum(arr){
//    let a=0;
//    a = arr.reduce(function(acc,el){
//       return  acc+el
//     })
//      return a

// }
// sum([34, 11, 23, 43])

// let Max_mum = Max(arr)
// let total_sum = sum(arr)
// console.log(Max_mum)
// console.log(total_sum)

// let average = (total_sum-Max_mum)/(arr.length-1)
// console.log(average)
// let ans = average+Max_mum
// console.log(ans)


let arr2 = [34, 5, 6, 7]
console.log(`this is ${arr2.length - 1}`)

function MAX(arr2) {
    let a = [0]
    for (let i = 0; i < arr2.length; i++) {
        if (a < arr2[i])
            a = arr2[i]
    }
    return a
}

function SUM(arr2) {
    let b = arr2.reduce((acc, el) => {
        return acc + el
    })
    return b
}

let total_sum1 = SUM(arr2)
let Max_mum1 = MAX(arr2)
// console.log(total_sum1)
// console.log(Max_mum1)

let average1 = (total_sum1 - Max_mum1) / (arr2.length - 1)
console.log(average1)

let ans = average1 + Max_mum1
// console.log(ans)



let arr3 = [124,34,32,3,23,2]

function Maximum(arr3){
    let a = []
    for(let i =0;i<arr3.length;i++){
        if(a<arr3[i]){
            a=arr3[i]
        }
    }
    return a
}
// console.log(Maximum(arr3))

function Sum(arr3){
    let p=arr3.reduce((acc,el)=>{
        return acc+el
    })
    return p
}
console.log(Sum(arr3))

let Total = Sum(arr3)
let MAXIMUM = Maximum(arr3)
// console.log(Total,MAXIMUM)

let totalAverage = (Total-MAXIMUM)/(arr3.length-1)
// console.log(totalAverage)

let answer = totalAverage+MAXIMUM
console.log(answer)
//   cd prathamesh-7pm
//   node day16.js
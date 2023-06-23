//  transfer all no into right side
let input = [1, 3, 0, 5, 0, 1, 0, 3]
let Zoutput = []
let Noutput = []
for (let i = 0; i < input.length; i++) {
    if (input[i] == 0) {
        Zoutput.push(input[i])
    }
    else {
        Noutput.push(input[i])
    }
}
console.log(Noutput.concat(Zoutput))

//  count repeated num 
let statement = ' i am learning javascript and javascript with cypress automation tool'
let a1 = statement.split(' ')
let count = 0
for (let i = 0; i < a1.length; i++) {
    if (a1[i].includes('javascript')) {
        count++
    }
}
console.log(count)

/*
extract all number from string and 
display only unique no from that
*/
let str = 'Sachin123#brainvision12345'
let num = str.split('').filter((el) => {
    return Number(el)
}).map((el) => {
    return Number(el)

})
//  set method
let set = new Set(num)
console.log(set)

// filter way 
let num2 = num.filter((el, index) => {
    return num.indexOf(el) == index
})
console.log(num2)


//  swap number
let w = 10
let x = 11
w = w ^ x
x = w ^ x
w = w ^ x
console.log(w)
console.log(x)


let arr = [12, 43, 12, 56, 76, 43]
let a = arr.filter((el, i) => {
    return arr.indexOf(el) == i
})
console.log(a)

let set1 = new Set(arr)
console.log(set1)

let arr1 = [12, 32, 45, 65, 54, 34, 7]

let r = arr1.lastIndexOf(55)
console.log(r)
console.log(arr1[6])

//  find the nth number of element
Myarray = [12, 23, 34, 45, 56, 67, 78, 89, 65, 54, 34, 55, 53, 4, 33, 65, 54, 32, 10]
Myarray.forEach((el, i) => {
    if (i == 15) {
        console.log(el)
    }
})

//  second way
for (let i = 0; i < Myarray.length; i++) {
    if (i == 7) {
        console.log(Myarray[i]);
        break
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
for (let i = 0; i < array.length; i++) {
    if (i == 12) {
        console.log(array[i])
    }
}

//  second way 
array.forEach((el, i) => {
    if (i == 6) {
        console.log(el)
    }
})


//  find the second max number from array
function secMax(arr) {
    let m = [0]
    for (let i = 0; i < arr.length; i++) {
        if (m < arr[i]) {
            m = arr[i]
        }
    }
    console.log(m)
}
secMax([23, 43, 21, 334, 24, 34, 267, 24, 97, 432])
//  cd interviewPrep
//  node js4.js
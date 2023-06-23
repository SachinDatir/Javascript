//  substring is available or not
let str = 'MinskoleInstitute'
let input = 'nsk'
if (str.includes(input)) {
    console.log(input, 'is available in', str)
} else {
    console.log(input, 'is not available')
}

//  transfer all zero into right side of array
let inp = [0, 2, 0, 0, 4, 5]
let arr = []
let count = []
for (let i = 0; i < inp.length; i++) {
    if (inp[i] != 0) {
        arr.push(inp[i])
    } else {
        count.push(inp[i])
    }
}
console.log(arr.concat(count))

// //Problem 1//reverse the String 
let str1 = "i tried so hard and got so far but in the end it doesn't even matter"
let rev = ""
for (let i = 0; i < str1.length; i++) {
    rev = str1[i] + rev
}
console.log(rev)

//  reverse by words
let a = str1.split(' ').reverse().join(' ')
console.log(a)

// Fetcing highest and lowest no from array
let arr1 = [23, 32, 14, 54, 66, 76, -89]
let highest = 0
let lowest = arr1[0]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > highest) {
        highest = arr1[i]
    } else if (arr1[i] < lowest) {
        lowest = arr1[i]
    }
}
console.log(highest, lowest)

function HighAndLow(N) {
    let highest = 0
    let lowest = N[0]
    for (let i = 0; i < N.length; i++) {
        if (N[i] > highest) {
            highest = N[i]
        }
        else if (N[i] < lowest) {
            lowest = N[i]
        }
    }
    console.log(highest, lowest)
}
HighAndLow([12, 34, 56, 78, 65])

// second method to get highest and lowest value from array
let arr2 = [23, 32, 14, 54, 66, 76, 89]
let a2 = arr2.reduce((acc, el) => {
    if (el > acc) {
        return el
    } else {
        return acc
    }
})
console.log(a2)

// python.py extract py
let lang = 'python.py'
let sep = lang.split('.')
console.log(sep[1])
// console.log(sep[sep.length-1])

//  extracting the 1st and last element from the string
let actor = "NnanaPatekarR"
let newstr = ""
for (let i = 0; i < actor.length; i++) {
    if (i != 0 && i != actor.length - 1) {
        newstr = newstr + actor[i]
    }
}
console.log(newstr)
//  using function
function removeLastandfirst(str) {
    let newstr = ""
    for (let i = 0; i < str.length; i++) {
        if (i != 0 && i != str.length - 1) {
            newstr = newstr + str[i]
        }
    }
    console.log(newstr)
}
removeLastandfirst("SsachinDatirR")


function remove(str) {
    let newstr = ""
    for (let i = 0; i < str.length; i++) {
        if (i != 0 && i != str.length - 1) {
            newstr = newstr + str[i]
        }
    }
    console.log(newstr)
}
remove('mMinskolee')

let arr3 = [12, 0, 0, 9, 4, 5]
let zero = []
let other = []
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] != 0) {
        zero.push(arr3[i])
    } else {
        other.push(arr3[i])
    }
}
console.log(zero.concat(other))

function HighLow(Num) {
    let high = 0
    let low = Num[0]
    for (let i = 0; i < Num.length; i++) {
        if (Num[i] > high) {
            high = Num[i]
        }
        else if (Num[i] < low) {
            low = Num[i]
        }
    }
    console.log(high, low)
}
HighLow([12, 34, 56, 78, 98, -199])

// find the count of perticular word in given string 

let statement = "I am new to javascript and wish to learn a every concept of javascript. javascript is great"
let Wcount = 0
let seprate = statement.split(' ')
for (let i = 0; i < seprate.length; i++) {
    if (seprate[i].includes('javascript')) {
        Wcount++
    }
}
console.log(Wcount)


// separate the uppercase character
let str2 = "QFGZHhghFdghfhjgjgj"
let uppercase = []
let lowercase = []
let up = 0
let low = 0
for (let i = 0; i < str2.length; i++) {
    if (str2[i] >= 'A' && str2[i] <= 'Z') {
        uppercase.push(str2[i])
        up++
    }
    else if (str2[i] >= 'a' && str2[i] <= 'z') {
        lowercase.push(str2[i])
        low++
    }
}
console.log(uppercase, lowercase, up, low)
//  cd interviewPrep
//  node js3.js
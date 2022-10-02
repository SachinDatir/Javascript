// //INTERVIEW Logical Questions
//removing duplicates from array()
let arr = [13, 211, 13, 43, 45, 43, 43, 45]
let A = new Set(arr)
console.log(A)


//using includes method
let arr1 = [11, 22, 333, 44, 55, 11, 333]
let removeduplicate = []
for (let i = 0; i < arr1.length; i++) {
    if (!removeduplicate.includes(arr1[i])) {
        removeduplicate.push(arr1[i])
    }
}
console.log(removeduplicate)

//using filter method()
let arr2 = [111, 22, 33, 44, 55, 111, 33, 76, 55]
let B = arr2.filter(function (el, index) {
    return arr2.indexOf(el) == index
})
console.log(B)

// let C = arr2.filter(function(el,index){
//     return arr2.indexOf(el)==index
// })
// console.log(C)

// let D = arr2.filter(function(el,index){
//     return arr2.indexOf(el)==index
// })
// console.log(D)

//Find the max and min from the given array
let arr3 = [121, 133, 43333, 323233, 33333789]
let max = arr3.reduce(function (acc, el) {
    if (el > acc) {
        return el
    } else {
        return acc
    }
})
console.log(max)

let min = arr3.reduce(function (acc, el) {
    if (el > acc) {
        return acc
    } else {
        return el
    }
})
console.log(min)


//find the largest word in the string

let str2 = "My name sachin datir"
let largest = str2.split(' ').reduce(function (acc, el) {
    if (el.length > acc.length) {
        return el
    } else {
        return acc
    }
})
console.log(largest)

// find the largest word in the Array
let arr4 = ["sachindgsdfh", "grreyegsgs", "rgtewtaadgergraa", "gggafffffdhdhdh"]
let large = arr4.reduce(function (acc, el) {
    if (el.length > acc.length) {
        return el
    } else {
        return acc
    }
})
console.log(large)

//find the smallest word in the array
let arr5 = ["sachindgsdfh", "grreyegsgs", "rgtewtaadgergraa", "gggafffffdhdhdh"]
let smallest = arr5.reduce(function (acc, el) {
    if (el.length > acc.length) {
        return acc
    } else {
        return el
    }
})
console.log(smallest)

//Print first 10 even numbers
for (let i = 0; i <= 30; i += 3) {
    //console.log(i)
}
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        //console.log(i)
    }
}



//element icluded or not
let names = ['sachin', 'pankaj', 'rahul', 'sanket']
let userInput = "sachin"
if (names.includes(userInput)) {
    console.log(userInput + ' ' + 'is included')
} else {
    console.log(userInput + " " + 'is not included')
}
let userInput2 = "rahul"
if (names.includes(userInput)) {
    console.log(userInput2 + " " + 'is included')
} else {
    console.log(userInput2 + " " + 'is not included')
}

//Problem 7
//remove spaces in between
let states = "Maha rashtra"
let removeSpace = ""
for (let i = 0; i < states.length; i++) {
    if (states[i] !== " ") {
        removeSpace = removeSpace + states[i]
    }
}
console.log(removeSpace)

let city = "kol kat ta"
let removespace1 = " "
for (let i = 0; i < city.length; i++) {
    if (city[i] !== " ") {
        removespace1 = removespace1 + city[i].toUpperCase()
    }
}
console.log(removespace1)
//remove space in between and reverse the string
let song = "Despaci to"
let removeSpace2 = " "
for (let i = 0; i < song.length; i++) {
    if (song[i] !== " ") {
        removeSpace2 = song[i] + removeSpace2.toUpperCase()
    }
}
console.log(removeSpace2)

//Calculate vowels in the string
let vowels = " i want good job as early as possible"
let count = 0
for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] == "a" || vowels[i] == "e" || vowels[i] == "i" || vowels[i] == "o" || vowels[i] == "u") {
        count = count + 1
    }
}
console.log(count)
//  node logical5.js
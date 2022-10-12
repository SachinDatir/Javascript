// // removing dulpicates from array
let arr = [33, 44, 55, 666, 33, 11, 22, 44]
console.log(arr.filter((el, i) => {
    return arr.indexOf(el) == i
}))
// by using set method
let a2 = new Set(arr)
console.log(a2)

//Find the max and min from the given array


let arr2 = [141, 35, 15541, -24, -411, 212, 24, -141]
let a3 = arr2.reduce(function (acc, el) {
    if (acc < el) {
        return el
    }
    else if (acc > el) {
        return acc
    }
})
console.log(a3)

let greater = []
let smaller = []
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] >= 0) {
        greater.push(arr2[i])
    }
    if (arr2[i] < 0) {
        smaller.push(arr2[i])
    }
}
console.log(greater, smaller)

//  Q3  Reverse the string

let str = 'SACHIN'
let rev = ''
for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev
}
console.log(rev)

let str1 = 'Hindustan'
let rev1 = ''
for (let i = str1.length - 1; i >= 0; i--) {
    rev1 = rev1 + str1[i]
}
console.log(rev1)


//Program 4
//find the largest word in the string

let str2 = 'today is friday'
let a1 = str2.split(' ').reduce((acc, el) => {
    if (el.length > acc.length) {
        return el
    }
    else {
        return acc
    }
})
console.log(a1)
//Program 5
//find the smallest word in the string
let str3 = 'cd practice-logical node logical7-js'
let a4 = str3.split(' ').reduce((acc, el) => {
    if (str3.length > acc.length) {
        return acc
    }
    else {
        return el
    }
})
console.log(a4)

//programme 6
//Print first 10 even numbers

for (let i = 0; i < 20; i += 2) {
    // console.log(i)
}
for (let i = 1; i < 20; i++) {
    if (i % 2 == 0) {
        //console.log(i)
    }
}

//programme 7
//Print first 10 odd numbers

for (let i = 1; i < 20; i++) {
     if(i % 2 !== 0) {
        // console.log(i)
    }
}

function printOdd(num) {
     for (let i=1; i<num; i++)
      { if(i % 2 !== 0) 
        { console.log(i); } 
    } }

    // printOdd(10)

    console.log("----string logical------")

    let cities = "sangamner akole nashik pune mumbai"
    let input = 'pune'
    if(cities.includes(input)){
        console.log(`${input} is available`)
    }
    else{
        console.log(`${input} not available`)
    }


    //remove spaces in between 

    let city = "Eachal karanji"
    let removeSpace = ""
    for(let i =0;i<city.length;i++){
        if(city[i]!==" "){
       removeSpace =removeSpace + city[i].toLocaleUpperCase()
        }
    }
    console.log(removeSpace)

    //remove spaces in between and print out in a reverse way

    let city1 = 'sangam ner'
    let rSpace = ' ' 
    for(let i =0;i<city1.length;i++){
        if(city1[i]!==' '){
            rSpace = city1[i]+rSpace.toUpperCase()
        }
    }
    console.log(rSpace)
//         node logical7.js
//        cd practice-logical
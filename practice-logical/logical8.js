// programme 1
//  removing duplicates from aray 

let arr = [1, 2, 3, 4, 2, 3, 6, 5, 7, 6]
let dupli = arr.filter((el, i) => {
    return arr.indexOf(el) == i
})
// console.log(dupli)

// by using set method
let set = new Set(arr)
// console.log(set)

// programme 2
//Find the max  from the given array
let arr2 = [121, 34, 66433, 636, 635, 55353, 535, 5335, 325, 446, 4324, 3]
let max = arr2.reduce((acc, el) => {
    if (el > acc) {
        return el
    }
    else {
        return acc
    }
})
// console.log(max)

// programme 3
//Find the minimum  from the given array
let arr3 = [12251, 3434, 66433, 636, 6353, 55353, 535, 5335, 3525, 4416, 4324, 33694]
let mini = arr3.reduce((acc, el) => {
    if (el > acc) {
        return acc
    }
    else {
        return el
    }
})
// console.log(mini)

//Program 3
// Reverse the string
let str = 'Minskole'
let rev = ''
for (let i = 0; i < str.length; i++) {
    rev = str[i].toLocaleUpperCase() + rev

}
// console.log(rev)

// other programme on string

// Access the string characters using a random number.
let str1 = 'javascript'
let a = str1[Math.floor(Math.random() * str1.length)]
// console.log(a)

//Program 4
//find the largest word in the string
let str2 = 'learn coding with minskole'
let a1 = str2.split(' ').reduce((acc, el) => {
    if (el.length > acc.length) {
        return el
    } else {
        return acc
    }
})
console.log(a1)

//Program 5
//find the smallest word in the string
let str3 = 'learn coding with minskole'
let a2 = str3.split(' ').reduce((acc, el) => {
    if (el.length > acc.length) {
        return acc
    } else {
        return el
    }
})
console.log(a2)

//Print first 10 even numbers
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        // console.log(i)
    }
}
// other way
for (let i = 0; i <= 18; i += 2) {
    // console.log(i)
}

// programme 6
// input included or not
let arr4 = ['sangamner', 'akole', 'pune', 'nashik']
let input = 'nashika'
if (arr4.includes(input)) {
    console.log(input`is included`)
} else {
    console.log(input, 'is not included')
}

//Problem 7
//remove spaces in between
let str4 = 'Mins kole'
let removespace = ' '
for (let i = 0; i < str4.length; i++) {
    if (str4[i] != ' ') {
        removespace = removespace + str4[i]
    }
}
console.log(removespace)

// programme 8
// reverse word of string
let str5 = 'reverse word of string'
let a4 = str5.split(' ').reverse().join(' ')
console.log(a4)


//Program 9
//Calculate vowels in the string
let str6 = 'I want A good job as early as possible u U'
let count = 0
for (let i = 0; i < str6.length; i++) {
    if (str6[i] == 'a' || str6[i] == 'e' || str6[i] == 'i' || str6[i] == 'o' || str6[i] == 'u') {
        count = count + 1
    }
}
// console.log(count)

///    Factor of any Number
let Nu = 5
let fact = 1
for (let i = Nu; i >= 1; i--) {
    fact = fact * i  //5,20,60,120
}
// console.log(fact)

//Take one no and return addition of factors of that no

let N = 15
let sum = 0
for (let i = 0; i < N; i++) {
    if (N % i == 0) {
        sum = sum + i
    }
}
// console.log(sum)

//Program 13
//Take one no and return the no of digit from that no
let z = 5463
newN = z.toString()
let result = []
for (let i = 0; i < newN.length; i++) {
    result.push(newN.charAt(i))
}
// console.log(result)


//Program 14
//Calculate count of capitals and smaller in the string

let str7 = 'I love Maharashtrachi Hasya Jatra'
let capital = ' '
let small = ' '
count = 0
count1 = 0
for (let i = 0; i < str7.length; i++) {
    if (str7[i] >= 'a' && str7[i] <= 'z') {
        small += str7[i]
        count++
    }
    else if (str7[i] >= 'A' && str7[i] <= 'Z') {
        capital += str7[i]
        count1++

    }
}
console.log(capital)
console.log(small)
console.log(count, count1)


//Problem 16
//input-"you are great"  output-"uoy era taerg"

function RevStr(str) {
    let reverse = ''
    for (let i = 0; i < str.length; i++) {
        reverse = str[i].split(' ').reverse().join(' ') + reverse
    }
    console.log(reverse)
}
RevStr('you are great')

// problem 17 
// input =>today is monday   output=>monday is today

let str8 = 'today is good monday'
let a5 = str8.split(' ').reverse().join(' ')
console.log(a5)

//         node logical8.js
//        cd practice-logical
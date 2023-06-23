//   Reverse String
let str = "sachin"
let rev = ""
for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev
}
console.log(rev)

let strz="appt"
let revZ=""
for(let i=0;i<strz.length;i++){
    revZ=strz[i]+revZ
}
console.log(revZ)
console.log('3333333333333333333333333333333333333333333333')


let str1 = "nihcas"
let rev1 = ""
for (let i = 0; i < str1.length; i++) {
    rev1 = str1[i] + rev1
}
console.log(rev1)

//  reverse by words
let str2 = ' today is good day'
let a = str2.split(' ').reverse().join(' ')
console.log(a)


// 1)write array of 1 to 5 numbers and perform addition of all values,
// after that perform addition of only even numbers from this array.
let arr = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sum = sum + arr[i]
    }

}
console.log(sum)

sum1 = 0
for (let i = 0; i < arr.length; i++) {
    sum1 = arr[i] + sum1
}
console.log(sum1)


//  remove duplicates from arr
let arr2 = [12, 32, 14, 32, 12, 45, 65, 14]
let a2 = arr2.filter((el, index) => {
    return arr2.indexOf(el) == index
})
console.log(a2)

let set = new Set(arr2)
console.log(set)


//  find the maximun
let arr3 = [12, 43, 25, 77, 88]
let a1 = arr3.reduce((acc, el) => {
    if (el > acc) {
        return el
    }
    else {
        return acc
    }
})
console.log(a1)

//  find the largest word in the string 
let str3 = "i am learning python or javascript"
let a3 = str3.split(' ').reduce((acc, el) => {
    if (el.length > acc.length) {
        return el
    }
    else {
        return acc
    }
})
console.log(a3)

//  find the largest word in the arr

let arr4 = ['sachin', 'interview', 'javascript', 'python']
let a5 = arr4.reduce((acc, el) => {
    if (el.length > acc.length) {
        return el
    }
    else {
        return acc
    }
})
//  find the first 10 even no
let even = []
count = 0

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even.push(i)
    }

}
let even2=[]
for(let i =0 ;i<=50;i++){
    if(i%2==0){
        even2.push(i)
    }
}
console.log(even2,'*******************************************************************')
console.log(even.reduce((acc, el) => {
    return acc + el
}))

//  remove space in beetween and print out reverse
let str6 = 'Mins kole'
removeSpace = ""
removeSpace1 = ""
for (let i = 0; i < str6.length; i++) {

    if (str6[i] !== " ") {
        removeSpace = str6[i] + removeSpace
    }
}
console.log(removeSpace)

let appt = 'appt software'
 removeSpaceOfAppt=''
 for (let i = 0; i < appt.length; i++) {

    if (appt[i] !== " ") {
        
        removeSpaceOfAppt = removeSpaceOfAppt+appt[i] 
    }
}
console.log(removeSpaceOfAppt,'&&&&&&&&&&&&&&&&&&&&&&&&&&')
let str7 = 'i want to get job as early as possible'
let c = 0
for (let i = 0; i < str7.length; i++) {
    if (str7[i] == 'a' || str7[i] == 'e' || str7[i] == 'i' || str7[i] == 'o' || str7[i] == 'u') {
        c = c + 1
    }
}
console.log(c)


function prime(N) {
    let count = 0
    for (let i = 2; i < N; i++) {
        if (N % 2 == 0) {
            count = 1
            break

        }
    }
    if (count == 1) {
        console.log(N, 'is not a prime')
    }
    else if (count == 0) {
        console.log(N, 'is prime no')
    }

}
prime(11)


function fibo(N) {
    let a = 0, b = 1
    sum = a + b
    for (let i = 3; i <= N; i++) {
        let c = a + b
        console.log(c)
        a = b
        b = c
        sum += c
    }
}
fibo(8)
console.log(sum)

// let fibo = function (N) {
//     let a = 0, b = 1
//     for (let i = 3; i <= N; i++) {
//         let c = a + b
//         console.log(c)
//         a = b
//         b = c
//     }
// }
// fibo(8)


let str8 = 'abc,dfer,ghy,njk'
let input = 'fer'
if (str8.includes(input)) {
    console.log(input, 'is available')
}
else {
    console.log(input, 'not available')
}



//let string ='nagpurnagpur' count the  repetetive character occrance in string program ?


// console.log(char+ 'occurs', count2, 'times')

// sort out +ve or -ve
let arr5 = [1, 4, 6, 8, -2, -9, -7]
let ptve = []
let ntve = []
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] >= 0) {
        ptve.push(arr[i])
    }
    else if (arr5[i] < 0) {
        ntve.push(arr5[i])
    }
}
console.log(ptve)
console.log(ntve)

//  factorial of any no
function facto(N) {
    let c = 1
    for (let i = N; i >= 1; i--) {
        c = c * i
    }
    console.log(c)
}
facto(3)

for (let i = 0; i < 5; i++) {
    let s = ''
    for (let j = 0; j < i; j++) {
        s += '*'
    }
    console.log(s)
}


for (let i = 5; i >= 0; i--) {
    let s = ' '
    for (let j = 0; j <= 5; j++) {
        if (j >= i) {
            s += '*'
        }
        else if (j <= i) {
            s += ' '
        }
    }
    console.log(s)
}
let num =10
console.log(10++)
// cd interviewPrep
//  node js.js





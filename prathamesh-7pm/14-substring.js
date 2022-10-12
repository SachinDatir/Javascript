// 2.check if given substring is present in other string

let str = 'asdfghjkl'
let sub = 'dfg'
let ans = 0
let n1 = str.length  //9
let n2 = sub.length  //3
// console.log(n1,n2)

for (let i = 0; i < n1 - n2; i++) {
    let s = ''
    for (let j = 0; j < n2; j++) {
        s += str[i + j]
    }
    if (sub == s) {
        ans = 1
        break
    }
}
// if(ans==1){
//     console.log(`${sub} is included in ${str}`)
// }
// else if(ans==0){
//     console.log(`${sub} is Not included in ${str}`)
// }

// 2.check if given substring is present in other string by using function

function substring(str1, sub1) {
    let n1 = str1.length
    let n2 = sub1.length
    let ans = 0
    for (let i = 0; i < n1 - n2; i++) {
        let s = ''
        for (let j = 0; j < n2; j++) {
            s += str1[i + j]
        }
        if (sub1 == s) {
            ans = 1
            break
        }
    }
    if (ans == 1) {
        console.log(`${sub1} is included in ${str1}`)
    }
    else if (ans == 0) {
        console.log(`${sub1} is Not included in ${str1}`)
    }
}
substring('fdeegjxsgshrt', 'egj')


function string(str3, sub3) {
    let n1 = str3.length
    let n2 = sub3.length
    let ans = 0
    for (let i = 0; i < n1 - n2; i++) {
        let s = ''
        for (let j = 0; j < n2; j++) {
            s += str3[i + j]
        }
        if (sub3 == s) {
            ans = 1
            break
        }
    }
    if (ans == 1) {
        console.log(`${sub3} is included in ${str3}`)
    }
    else if (ans == 0) {
        console.log(`${sub3} is not included in ${str3}`)
    }
}
string('687iokuhuuhiu9u', 'kuh')

let substring1 = function (str4, sub4) {
    let ans = 0
    let n1 = str4.length
    let n2 = sub4.length
    for (let i = 0; i < n1 - n2; i++) {
        let s = ''
        for (let j = 0; j < n2; j++) {
            s += str4[i + j]
        }
        if (sub4 == s) {
            ans = 1
            break
        }
    }
    if (ans == 1) {
        console.log('substring present in string')
    }
    else if (ans == 0) {
        console.log('substring not present in string')
    }
}
substring1('ii339jpjejfnfdgdsszxb','jf')
//    cd prathamesh-7pm
//    node 14-substring.js
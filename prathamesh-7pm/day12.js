// Reverse a string()
let str = 'Today is Sunday'
let A = str.split('')
A.reverse()
let B = A.join('')
console.log(B)


console.log('******************')
function reverse(str) {
    let A = str.split('')
    A.reverse()
    let B = A.join('')
    console.log(B)
}
reverse('My name is sachin')
reverse('i  love playing cricket')
reverse('i love watching film')

console.log('#######################')

function reverse2(str3) {
    let rev2 = ''
    for (let i = 0; i < str3.length; i++) {
        rev2 = str3[i] + rev2
    }
    console.log(rev2)
}
reverse2('My name is skd')
reverse2('5525 256 7 4636')

//  reverse by word
let str1 = 'Welcome to javascript'
let rev = str1.split(' ').reverse().join(' ')
console.log(rev)

function add(a,b){
    
    return a+b
}
console.log(add(10,30))


//  cd prathamesh-7pm
//   node day12.js
//  fibonacci series

let Nu = 12
let a = 0, b = 1
for (let i = 3; i <= Nu; i++) {
    let c = a + b
    //console.log(c)
    a = b
    b = c
}

// fibonacci sieries by using function
let fibo = function (N) {
    let a = 0, b = 1
    for (let i = 3; i <= N; i++) {
        let c = a + b
        console.log(c)
        a = b
        b = c
    }
}
// fibo(6)
let sum = 0
let N = 9
let a1 = 0, b1 = 1
sum = a1 + b1
for (let i = 3; i <= N; i++) {
    let c = a1 + b1
    // console.log(c)
    a1 = b1
    b1 = c
    sum += c
}
console.log('-----------------')
// console.log(sum)


let Num = 8
let a2 = 0, b2 = 1
let Sum = 0
Sum = a2 + b2
for (let i = 2; i < Num; i++) {
    let c = a2 + b2
    console.log(c)
    a2 = b2
    b2 = c
    Sum += c
}
console.log('----------------')
console.log(Sum)

// fibonacci sieries

function fibo(n) {
    let a = 0, b = 1
    for (let i = 3; i <= n; i++) {
        let c = a + b
        console.log(c)
        a = b
        b = c
    }
}
// fibo(10)

let n = 5
function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2)
}
// let x = fib(n)
// console.log(x)


//  cd rivision-logical
//  node rev.js
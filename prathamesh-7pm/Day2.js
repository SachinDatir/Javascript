// fibonacii series....
//the Fibonacci sequence, in which each number is the sum of the two preceding ones.
// The sequence commonly starts from 0 and 1
//0 1 1 2 3 4 5 

// let N = 10
// let a = 0, b = 1
// for (let i = 3; i <= N; i++) {
//     c = a + b
//     console.log(c)
//     a = b
//     b = c
// }

// let n = 13
// let a1 = 0, b1 = 1
// for (let i = 3; i <= n; i++) {
//     c1 = a1 + b1
//     console.log(c1)
//     a1 = b1
//     b1 = c1
// }
//fibonacci series by function
function fibo(m) {
    let a = 0, b = 1
    for (let i = 3; i <= m; i++) {
        c = a + b
        console.log(c)
        a = b
        b = c
    }
}
// fibo(11)
function fubo1(n) {
    let a = 0, b = 1

    for (let i = 3; i <= n; i++) {
        c = a + b
        console.log(c)
        a = b
        b = c
    }
}
fubo1(8)

console.log('fibonacii****')

function fubo2(n) {
    let a = 0, b = 1
    for (let i = 3; i <= n; i++) {
        c = a + b
        console.log(c)
        a = b
        b = c
    }
}
fubo2(12)

//star pattern

/*


*
* *
* * *
* * * *
* * * * *

*/
// for (let i = 1; i <= 5; i++) {
//     console.log('*'.repeat(i))
// }

// // for(let i = 0;i<=5;i++){
// //     console.log("1".repeat(i))
// // }
for (let i = 0; i <= 6; i++) {
    let s = " "
    for (let h = 1; h <= i; h++) {
        s += h + " "
    }
    console.log(s)
}

for (let i = 0; i <= 8; i++) {
    let D = " "
    for (let F = 1; F <= i; F++) {
        D += F + ' '
    }
    console.log(D)
}




// node day2.js
//LOOP()
//PRIME numbers (to check the no is prime or not)
// let N = 7
// let count = 0
// for (let i = 2; i < N; i++) {
//     if (N % i == 0) {
//         count = 1
//     }
// }
// if (count == 1) {
//     console.log('No')
// } else if (count == 0) {
//     console.log('yes')
// }

let N2 = 7
count = 0
for (let i = 2; i < N2; i++) {
    if (N2 % i == 0) {
        count = 1
        break
    }
    if (count == 1) {
        console.log(N2 + " " + 'is not prime no')
    } else if (count == 0) {
        console.log(N2 + " " + 'is  prime no')
    }
}

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')


function Prime(N3) {
    let count2 = 0
    for (let i = 2; i < N3; i++) {
        if (N3 % i == 0) {
            count2 = 1
            break
        }
        if (count2 == 1) {
            console.log(N3 + " " + 'is not prime no')
            //return false
        } else if (count2 == 0) {
            console.log(N3 + " " + 'is prime no')
            //return true
        }
    }
}
Prime(5)
Prime(11)
Prime(19)
Prime(4)
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
// let S = 47
// for(let i = 2;i<S;i++){

// }
// let N1 = 9
// let count1 = 0
// for (let i = 2; i < N1; i++) {
//     if (N1 % i == 0) {
//         count = 1
//     }
// }
// if (count1 == 1) {
//     console.log(N1 + " " + 'is Not prime no')
// } else if (count1 == 0) {
//     console.log(N1 + " " + 'is prime no')
// }

// //check any no is prime or not by using function
console.log('///////////////////////////////////////////')
function Prime(N) {
    let count1 = 0
    for (let i = 2; i < N; i++) {
        if (N % i == 0) {
            count1 = 1
        }
    }
    if (count1 == 1) {
        console.log(N + " " + 'is Not prime no')
    } else if (count1 == 0) {
        console.log(N + " " + 'is prime no')
    }
}
Prime(10)
Prime(46)
Prime(47)
Prime(50)

console.log('============================================')
function PrimeN(N) {
    let C = 0
    for (let i = 2; i < N; i++) {
        if (N % i == 0) {
            C = 1
            break
        }
    }
    if (C == 1) {
        //console.log(N + " " + 'is not Prime No')
        return false
    }
    else if (C == 0) {
        // console.log(N + " " + 'is  Prime No')
        return true
    }
}
// PrimeN(67)
// PrimeN(10)
// PrimeN(55)
// PrimeN(87)
// PrimeN(31)

// let a = 40
// let sum = 0
// let count = 0

// for (let i = 2; i <= a; i++) {
//     if (PrimeN(i)) {
//         console.log(i)
//         count++
//         sum += i
//     }

// }
// // let count = 0

// console.log(count)
// console.log(sum)



//factorial of any No by using function

// function Fact(N) {
//     let C = 1
//     for (let i = N; i >= 1; i--) {
//         C = C * i
//     }
//     console.log(C)
// }
// Fact(5)
// Fact(6)


function factorial(N) {
    let count = 1

    for (let i = N; i >= 1; i--) {
        count = count * i
    }
    console.log(count)
}
factorial(4)


// let N = 7
// count = 1
// for(let i = N;i>=1;i--){
//  count = count*i
// }
// console.log(count)

// second method to get factorial
// function recur(N) {
//     if (N <= 1) {
//         return N
//     }
//     return N * recur(N - 1)
// }
// let A = recur(7)
// console.log(A)

function sachin(N) {
    if (N <= 1) {
        return N
    }
    return N * sachin(N - 1)
}
let B = sachin(3)
console.log(B)



function fac(n) {
    if (n <= 1) {
        return n
    }
    return n * fac(n - 1)
}
// let A = fac(7)
// console.log(A)

// function facto(n) {
//     let count = 1
//     for (let i = n; i >= 1; i--) {
//         count = count * i
//     }
//     console.log(count)
// }
// facto(7)

function fac(n) {
    count = 1
    for (let i = n; i >= 1; i--) {
        count = count * i
    }
    console.log(count)
}
fac(12)


function factoo(n) {
    count = 1
    for (let i = n; i >= 1; i--) {
        count = count * i
    }
    console.log(count)

}
factoo(8)

function facto1(n) {
    if (n <= 1) {
        return n
    }
    return n * facto1(n - 1)
}
let D = facto1(55)
console.log(D)

function fac(s) {
    count = 1
    for (i = s; i >= 1; i--) {
        count = count * i
    }
    console.log(count)
}
fac(22)

function PrimeNO(Nu) {
    let count = 0
    for (let i = 2; i <= Nu; i++) {

        if (Nu % i == 0) {
            count = 1
            break
        }
        if (count == 1) {
            console.log(Nu + " " + 'is not prime no')
        }
        else if (count == 0) {
            console.log(Nu + " " + 'is prime no')
        }
    }
}
PrimeNO(7)

function primeee(a) {
    let c = 0
    for (let i = 2; i <= a; i++) {
        if (a % i == 0) {
            c = 1
            break
        }
        if (c == 1) {
            console.log(a + ' ' + 'is not prime no')
        } else if (c == 0) {
            console.log(a + ' ' + 'is prime no')
        }
    }
}
// primeee(87)
// primeee(67)
// primeee(65)
primeee(6)
//  node day1.js

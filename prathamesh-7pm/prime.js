// function prime(n) {
//     let count = 0
//     for (let i = 2; i <= n; i++) {
//         if (n % i == 0) {
//             count = 1
//             break
//         }
//         if (count == 1) {
//             //console.log(n + ' ' + 'is not prime no')
//             return false
//         } else if (count == 0) {
//             //console.log(n + ' ' + 'is prime no')
//             return true
//         }
//     }
// }
// // prime(9)
// let a = 100
// let sum = 0
// let count = 0
// for (let i = 2; i <= a; i++) {
//     if (prime(i)) {
//         console.log(i)
//         count++
//         sum += i
//     }
// }
// console.log(count)
// console.log(sum)

// let b = 40
// let count1 = 0
// let sum1 = 0
// for (let i = 2; i <= b; i++) {
//     if (prime(i)) {
//         console.log(i)
//         count1++
//         sum1 += i

//     }
// }
// console.log(count1)
// console.log(sum1)

// let n = 24
// let count2 = 0
// for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         count = 1
//         break
//     }
//     if (count2 == 1) {
//         console.log(`${n} is not prime`)
//     }
//     else if (count2 == 0) {
//         console.log(`${n} is prime number`)
//     }
// }

function prime2(n) {
    let count = 0
    for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
            count = 1
            break
        }
        if (count == 1) {
            return false
            // console.log(`${n} is not prime no`)
        } else if (count == 0) {
            return true
            //console.log(`${n} is prime no`)
        }
    }
}
// prime2(17)

// let b1= 60 
// count3 = 0
// let sum2 =  0

// for(let i =0 ;i<=b1;i++){
//     if(prime2(i)){
//         console.log(i)
//          count3++
//          sum2+= i
//     }
// }
//  console.log(sum2)
//  console.log(count3)

function PrimeN(N) {
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
// PrimeN(11)
// PrimeN(19)
// PrimeN(4)

function PrimeNO(N){
    let count2 = 0
    for (let i = 2; i < N; i++) {
        if (N % i == 0) {
            count2 = 1
        }
    }
    if (count2 == 1) {
        console.log(`${N} is not prime number`)
    } else if (count2 == 0) {
        console.log(`${N} is prime no`)
    }
}
PrimeNO(6)
PrimeNO(7)
PrimeNO(37)
  

function PrimeNumber(n){
    let count = 0
    for(let i =2;i<n.length;i++){
        if(n%i==0){
            count = 1
        }
    }
    if(count==1){
        console.log(`${n} is not prime no`)
    }
    if(count==0){
        console.log(`${n} is prime no`)
    }
}
PrimeNumber(19)
//  node prime.js
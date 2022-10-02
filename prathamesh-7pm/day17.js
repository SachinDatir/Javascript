// Let's define 𝑆(𝑥) to be the sum of digits of number 𝑥 written in decimal system. 
//For example, 𝑆(5)=5, 𝑆(10)=1, 𝑆(322)=7.
// We will call an integer 𝑥 interesting if 𝑆(𝑥+1)<𝑆(𝑥). In each test you will be given one integer 𝑛.
// Your task is to calculate the number of integers 𝑥 such that 1≤𝑥≤𝑛 and 𝑥 is interesting.
// 323 =8 322=7
// 46.https://codeforces.com/problemset/problem/1557/A


// let n = 10
// let m= n 
// let sum = 0
// while(m>0){
//     let r = m%10
//     sum+=r
//     m/=10
//     m=Math.floor(m)
// }
// console.log(sum)

function alpha(n) {
    let m = n
    let sum = 0
    while (m > 0) {
        let r = m % 10
        sum += r
        m /= 10
        m = Math.floor(m)
    }
    return sum
}

let x = 20
let ans = 0
for (let i = 1; i < x; i++) {
    let a = alpha(i)
    let b = alpha(i + 1)
    if (a > b) {
        ans++
        console.log(i, i + 1)
    }
}
// console.log(ans)


function alphaA(n){
    let m = n
    let sum = 0
    while(m>0){
        let r = m%10
        sum+=r
        m = m/=10
    }
    return sum
}

let a = 100
let anss = 0
for(let i =0 ;i<a;i++){
    let p = alphaA(i)
    let q = alphaA(i+1)

    if(p>q){
        anss++
        console.log(i,i+1)
    }
}
console.log(anss)
//   cd prathamesh-7pm
//   node day17.js
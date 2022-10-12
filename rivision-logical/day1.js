//  PRIME Number

function Prime(n) {
    let c = 0
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            c = 1
            break
        }
    }
    if (c == 0) {
        // console.log(`${n} is prime number`)
        return true
    }
    else if (c == 1) {
        // console.log(`${n} is not prime number`)
        return false
    }
}
Prime(5)
Prime(6)
Prime(37)

let Nu = 20
let sum = 0
let count = 0
for (let j = 2; j <= Nu; j++) {
    if (Prime(j)) {
        console.log(j)
        count++
        sum += j
    }
}
console.log(count)
console.log('----------------------')
console.log(sum)


console.log('**********FACTO**********')
// FActorial
function facto(N) {
    let ans = 1
    for (let i = N; i > 1; i--) {
        ans = ans * i
    }
    console.log(ans)
}
facto(6)
facto(7)

function factorial(n) {
    let ans = 1
    for (let i = n; i > 1; i--) {
        ans = ans * i //5,20,60,120
    }
    console.log(ans)
}
factorial(5)



// reverse an array

let arr = ['sachin', 'rahul', 'sanket', 'pankaj', 'pranamya']
let m = arr.length
for (let i = 0, j = m - 1; i < m, j > m / 2; i++, j--) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
console.log(arr)


function RevA(arr) {
    let l = arr.length
    for (let i = 0, j = l - 1; i < l, j > l / 2; i++, j--) {
        let t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
    }
    console.log(arr)
}
RevA(['sangamner','akole','pune','shirdi','mumbai','nagpur','ganore'])

///   rev string 
function rev(str) {
    let r = ''
    for (let i = 0; i < str.length; i++) {
        r = str[i] + r
    }
    console.log(r)
}
rev('welcome to javascript')

//  rev word of string 

let str = 'welcome to javascript'
// first convert string into array then reverse the array and then join array
let rev1 = str.split(' ').reverse().join(' ')
console.log(rev1)


//  cd rivision-logical
//  node day1.js
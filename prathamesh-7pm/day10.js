// check if string is palindrome or not
let str = 'sachin'
let n = str.length
let k = 0
for (let i = 0; i < n / 2; i++) {
    if (str[i] != str[n - i - 1]) {
        k = 1
    }
    // console.log(str[n-i-1])
    // console.log(str[i])
}
if (k == 1) {
    console.log(`not palindrome`)
} else if (k == 0) {
    console.log(`palindrome`)
}


// palidrome with function 

function Palindrome(N) {
    let o = N.length
    let k = 0
    for (let i = 0; i < o / 2; i++) {
        if (N[i] != N[o - i - 1]) {
            k = 1
        }
    }
    if (k == 1) {
        console.log(`not palindrome`)
    } else if (k == 0) {
        console.log(`palindrome`)
    }
}
// Palindrome(12321)
// Palindrome('sachin')
// Palindrome('absbsba')
// Palindrome('civic')
// Palindrome('racecar')

//***********************************************************************/

// reverse a number 

let Nu = 2345
let s = ''//5,4,
while (Nu > 0) {
    let r = Nu % 10  //234.5 ,23.4,
    s += r //234.5,23.4 ,  
    let x = Math.floor(Nu / 10)   //234, 2.34,
    Nu = x
}
console.log(s)

// reverse a number by using function
function revNumber(N) {
    let s = ''
    while (N > 0) {
        let r = N % 10
        s += r
        let x = Math.floor(N / 10)
        N = x
    }
    s = Number(s)
    console.log(s)
    console.log(typeof s)
}
// revNumber(67463663)
// revNumber(85775877746)


// find square root of a number

let Num = 81
for (let i = 1; i ** 2 <= Num; i++) {
    if (i ** 2 == Num) {
        console.log(i)
    }
}
// find square root of a number by using function

function SquareRoot(n) {
    for (let i = 1; i ** 2 <= n; i++) {
        if (i ** 2 == n) {
            console.log(i)
        }
    }
}
SquareRoot(225)
SquareRoot(144)
SquareRoot(169)
SquareRoot(196)

function SquareRoot1(n) {
    for (let i = 0; i ** 2 <= n; i++) {
        if (i ** 2 == n) {
            console.log(i)
        }

    }
}
SquareRoot1(625)
console.log('========================================')



// find cube root of a number 

console.log('******cubeRoot******')
let c = 343
for (let i = 1; i ** 3 <= c; i++) {
    if (i ** 3 == c) {
        console.log(i)
    }
}

// find cube root of a number by using function

function cubeRoot(r) {
    let k = -1
    for (let i = 1; i ** 3 <= r; i++) {
        if (i ** 3 == r) {
            // console.log(i)
            k = i
            break;
        }
    }
    if (k != -1) {
        console.log(k)
    }
    else if (k == -1) {
        console.log('Note a cube Number')
    }
}
cubeRoot(4096)
cubeRoot(24389)
cubeRoot(13824)
cubeRoot(67746)

function cubeRoot1(n) {
    let k = -1
    for (let i = 1; i ** 3 <= n; i++) {
        if (i ** 3 == n) {
            k = i
            break;
        }
    }
    if (k != -1) {
        console.log(k)
    }
    else if (k == -1) {
        console.log('not cube of any Number')
    }
}
cubeRoot1(10648)
cubeRoot1(7443463)


console.log('$$$$$$$$$$$$square$$$$$$$$$$$')


/// find square of any no by using for loop
function square(n) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1
        }
    }
    console.log(result)
}

square(2)
square(3)
square(7)
square(8)
square(9)
square(10)
square(11)
square(12)
square(66)

// cd prathamesh-7pm
// node day10.js

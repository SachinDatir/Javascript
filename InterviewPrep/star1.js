/*
1 
2 3 
4 5 6
7 8 9 10
*/
let k = 1
for (let i = 1; i <= 5; i++) {
    let s = ''
    for (let j = 1; j <= i; j++) {
        s += k + ' '
        k++
    }
    console.log(s)
}

console.log('**********************')

/*
1
1 2
1 2 3
1 2 3 4
*/
for (let i = 1; i <= 4; i++) {
    let s = ''
    for (let j = 1; j <= i; j++) {
        s += j + ' '
    }
    console.log(s)
}

function Matrix(n) {
    for (let i = n; i >= 1; i--) {
        let s = ''
        for (let j = 1; j <= n; j++) {
            if (j >= i) {
                s += '* '
            } else if (j <= i) {
                s += ' '
            }
        }
        console.log(s)
    }
}
Matrix(4)

let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let b = 0
for (let i = 1; i <= 6; i++) {
    let s = ''
    for (let j = 1; j <= i; j++) {
        s += a[b] + ' '
        b++
    }
    console.log(s)
}
//  cd interviewPrep
//  node star1.js
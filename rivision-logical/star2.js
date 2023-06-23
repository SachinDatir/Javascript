/*
1
2 3
4 5 6
7 8 9 10
*/
let k = 1
for (let i = 1; i <= 5; i++) {
    let s = ''
    for (let j = 1; j < i; j++) {
        s += k + ' '
        k++
    }
    // console.log(s)
}

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5 
*/
for (let i = 1; i <= 5; i++) {
    let s = ' '
    for (let j = 1; j < i; j++) {
        s += j + ' '
    }
    // console.log(s)
}

function MATRIX(n) {
    for (let i = n; i >= 0; i--) {
        let s = ' '
        for (let j = 0; j <= n; j++) {
            if (j >= i) {
                s += '* '
            } else if (j <= i) {
                s += ' '
            }
        }
        console.log(s)
    }
}
MATRIX(5)

// function matrix1(m) {
//     for (let i = m; i >= 0; i--) {
//         let s = ' '
//         for (let j = 0; j <= m; j++) {
//             if (j >= i) {
//                 s = s + '* '
//             }
//             else {
//                 s += ' '
//             }
//         }
//         console.log(s)
//     }
// }
// matrix1(10)

//  cd rivision-logical
//  node star2.js
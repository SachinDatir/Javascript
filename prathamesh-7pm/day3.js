// for (let i = 4; i >= 1; i--) {
//     let s = ' '
//     for (let j = i; j >= 1; j--) {
//         s += j + " "
//     }
//     console.group(s)
// }
// for (let i = 5; i >= 1; i--) {
//     let s = ' '
//     for (let j = i; j >= 1; j--) {
//         s += j + ' '
//     }
//     console.group(s)
// }

// for (let i = 1; i <= 5; i++) {
//     let s = ' '
//     for (let j = 1; j <= i; j++) {
//         s += j + ' '
//     }
//     console.log(s)
// }

// for (let i = 4; i >= 0; i--) {
//     let s = ' '
//     for (let j = 0; j <= 4; j++) {
//         if (j >= i) {
//             s = s + '*'
//         }
//         else {
//             s += ' '
//         }
//     }
//     console.log(s)
// }

function matrix(n) {
    for (let i = n; i >= 0; i--) {
        let s = ''
        for (let j = 0; j <= n; j++) {
            if (j >= i) {
                s = s + '* '
            }
            else {
                s += ' '
            }
        }
        console.log(s)
    }
}
// matrix(6)


function mat(n) {
    for (let i = n; i >= 0; i--) {
        let s = ' '
        for (let j = 0; j <= n; j++) {
            if (j >= i) {
                s = s + '* '
            }
            else {
                s += ' '
            }
        }
        console.log(s)
    }
}

mat(3)


function matrix1(m) {
    for (let i = m; i >= 0; i--) {
        let s = ' '
        for (let j = 0; j <= m; j++) {
            if (j >= i) {
                s = s + '* '
            }
            else {
                s += ' '
            }
        }
        console.log(s)
    }
}
matrix1(10)

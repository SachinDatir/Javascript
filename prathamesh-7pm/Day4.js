/*

1
2 3
4 5 6
7 8 9 10


      1
    2 3
  4 5 6
7 8 9 10

a
b b
c c c
d d d d

a
b c
d e f
g h i j

*/

// let k = 1
// for (let i = 1; i < 4; i++) {
//     let s = ''
//     for (let j = 0; j < 4; j++) {
//         s += k + ''
//         k++
//     }
//     console.log(s)
// }

/*
1
2 3
4 5 6
7 8 9 10
*/
function abc(n) {
    let k = 1
    for (let i = n; i >= 1; i--) {
        let s = " "
        for (let j = 0; j <= n; j++) {
            if (j >= i) {
                s += k
                k++
            }
            else if (i > j) {
                s + '  '
            }
        }
        console.log(s)
    }
}
abc(4)

/*   1
    2 3
  4 5 6
7 8 9 10
*/





/*
a
b c
d e f
g h i j
*/
let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let b = 0
for (let i = 1; i <= 6; i++) {
    let s = ''
    for (let j = 1; j <= i; j++) {
        s += a[b] + ' '
        b++
    }
    console.log(s)
}
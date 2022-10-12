//hashing 

let f = [1, 1, 1, 1, 3, 3, 3, 5, 6, 6, 6, 3, 2, 2]
let max = f[0]
for (let i = 0; i < f.length; i++) {
    if (max <= f[i]) {  // 
        max = f[i]
    }
}
let b = []
for (let i = 0; i <= max; i++) {
    b.push(0)
}
for (let i = 0; i < f.length; i++) {
    b[f[i]]++
}

for (let i = 0; i < b.length; i++) {
    if (b[i] != 0) {
        console.log(i, '->', b[i])
    }
}
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>')



function hashing(a) {
    let max1 = a[0]
    for (let i = 0; i < a.length; i++) {
        if (max1 <= a[i]) {
            max1 = a[i]
        }
    }
    let b = []
    for (let i = 0; i < max1; i++) {
        b.push(0)
    }
    for (let i = 0; i < a.length; i++) {
        b[a[i]]++
    }
    for (let i = 0; i < b.length; i++) {
        if (b[i] != 0) {
            console.log(i, '->', b[i])
        }
    }
}
console.log(hashing([4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 3, 3, 3,]))

//  node day9.js

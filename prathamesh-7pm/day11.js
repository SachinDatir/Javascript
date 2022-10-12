// return no from string 

let str = '135ad13WQT6HJ9If7.8!^9s$%*'
let result = ''
for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
        result += str[i]
    }
}
console.log(result)

// return letters from string
let str1 = '13WQT6HJ9I5adf7.8!^9s$%*DBYz'
let smallLetter = ''
let capital = ''
for (let i = 0; i < str1.length; i++) {
    if (str1[i] >= 'a' && str1[i] <= 'z') {
        smallLetter += str1[i]
    }
    else if (str1[i] >= 'A' && str1[i] <= 'Z') {
        capital += str1[i]
    }
}
console.log(smallLetter)
console.log(capital)

// return letters from string by using function

function capitalLower(string) {
    let small = ''
    let cap = ''
    let Num = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= 'a' && string[i] <= 'z') {
            small += string[i]
        }
        else if (string[i] >= 'A' && string[i] <= 'Z') {
            cap += string[i]
        }
        else if (Number(string[i])) {
            Num += string[i]
        }
    }
    console.log(small, cap, Num)
}
capitalLower('316sFfsVsgfaAdk898NbYU5I')
function Numbers(n) {
    //let a = 'aaj48444hpi355n5h5u5555u5u545h53532u244pu4opiuonh'
    let Num = ''
    let Letters
    for (let i = 0; i < n.length; i++) {
        if (Number(n[i])) {
            Num += n[i]
        }
        else if (n[i] >= 'a' || n[i] <= 'z') {
            Letters += n[i]
        }
    }
    console.log(Num)
    console.log(Letters)
}
Numbers('aaj48444hpi355n5h5u5555u5u545h53532u244pu4opiuonh')

console.log('******************HASHING******************')
//   *********************HASHING**************

let hash = [64, 5, 4, 2, 22, 22, 222, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 5, 5]
let m = new Map()
for (let i = 0; i < hash.length; i++) {
    m.set(hash[i], 0)
}
for (let i = 0; i < hash.length; i++) {
    let r = m.get(hash[i])
    r++
    m.set(hash[i], r)
    // console.log(r)
}
console.log(m)


function hashing(H) {
    let m = new Map()
    for (let i = 0; i < H.length; i++) {
        m.set(H[i], 0)
    }
    for (let i = 0; i < H.length; i++) {
        let r = m.get(H[i])
        r++
        m.set(H[i], r)
    }
    return m
}
console.log(hashing(['a', 'v', 'A', 'avcd', 'e', 'r', 'a', 'a', 'a']))

function HASHING(h) {
    let m = new Map()
    for (let i = 0; i < h.length; i++) {
        m.set(h[i], 0)
    }
    for (let i = 0; i < h.length; i++) {
        let r = m.get(h[i])
        r++
        m.set(h[i], r)
    }
    return m
}
console.log(HASHING([2, 34, 53, 6, 5, 4, 1, 1, 1, 1, 2, 3, 3, 4, 6, 5, 5, 5, 4, 33]))

function hash1(a) {
    let n = new Map()
    for (let i = 0; i < a.length; i++) {
        n.set(a[i], 0)
    }
    for (let i = 0; i < a.length; i++) {
        let r = n.get(a[i])
        r++
        n.set(a[i], r)
    }
    return n
}
console.log(hash1([23, 44, 42, 4, 4, 3, 2, 2, 1, 4, 3, 3, 33, 3, 3, 3, 3, 34, 4, 4, 4, 4, 4]))
console.log(hash1(['a', 'a', 'a', 'ab', 'c', 'c', 'd', 'd', 'd', 33, 3, 3, 3, 3, 34, 4, 4, 4, 4, 4]))

// cd prathamesh-7pm
//   node day11.js
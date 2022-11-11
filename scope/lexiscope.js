function scope() {
    a = 4
    return a * a
}

console.log(scope())

console.log(a)



function addC() {
    let x = 100
    let y = 50
    return function () {
        console.log(x + y)
    }
}
let lex = addC()
lex()




function add(x, y) {
    console.log(x + y)
    return x + y

}
let ab = add(11, 22)
console.log(ab)


//   node lexiscope.js

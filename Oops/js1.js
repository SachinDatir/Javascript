let arr = [0, 3, 10, 0, 4, 0]
console.log(arr.sort())
let a = []
let b = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        a.push(arr[i])
    } else {
        b.push(arr[i])
    }
}
console.log(a.concat(b))




let inp = [0, 3, 10, 0, 4, 0]

let array = []
let count = []

for (let i = 0; i < inp.length; i++) {
    if (inp[i] != 0) {
        array.push(inp[i])
    } else {
        count.push(inp[i])
    }
}
console.log(array.concat(count))

var c = b = 3
console.log(b)

b = 1
console.log(b)
console.log(c)

var x = 10
function add() {
    let y = 12
    return x + y
}

console.log(add())


// undefined==> it incate that variable has not been assigle or a value not declare at all
let str;
console.log(str)

let obj = {
    firstname: 'sachin',
    lastname: 'datir'
}
//  accessing a non existing property of an object return undefined
console.log(obj.city)
// typeof undefined is undefined
console.log(typeof (undefined))

let value = null
console.log(typeof (value))
// typeof null is==> object
console.log(typeof (null))
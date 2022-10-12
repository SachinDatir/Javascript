//node lexicalScope.js

function addition() {
    let a = 19
    let b = 30
    console.log(a + b)
    function additionB() {
        let c = 12
        let d = 23
        console.log(a + b)
        console.log(c + d)

        function additionC() {
            let e = 45
            let f = 43
            console.log(e + f)
            console.log(a + b + c + d + e + f)
        }
        //         additionC()
    }
    //     additionB()
}
// addition()

//closure 
function add(x, y) {
    console.log(x + y)
    return x + y

}
// let a = add(11, 22)
// console.log(a)


//node lexicalScope.js
function addC() {
    let x = 100
    let y = 50
    return function () {
        console.log(x + y)
    }
}
// let tt = addC()
// console.log(tt)
// tt()

// let and const are blocked scope
let x = 6 
//console.log(x)


let y = 300
{
    let y = 60 
    //console.log(y)
}
//console.log(y)

//node lexicalScope.js

let r = 300
{
    r = 60 
    console.log(r)
}
console.log(r)
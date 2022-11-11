//  node lexicalScope.js


// lexical scope ==> variable define in out side the function can be accsessible =>
// into another funtion define after the variable declaration

var c = 1
function lexi(){
    let d = 4
    return c+d
}
console.log(lexi())

console.log('closure******************************')
// closure
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
            additionC()
    }
       additionB()
}
 addition()

//closure 

function add(x, y) {
    console.log(x + y)
    //return x + y

}
let ab = add(11, 22)
console.log(ab)


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
// let x = 6 
//console.log(x)

// closure ===> js ka ye concept hai jo privacy maintain karne me help karega
//return should be the last statement of function
//closure ka meaning ye rehta hai ki return likhne ke baad bhi uske upar ke parent ke function accesible rehte hai
//hum wo parent ke function ko directly accesible nahi kar sakte...yeh bhi ek privacy maintain karne ka tarika hai


function add(){
    let a = 20
    let b = 50
    return function(){
        console.log(a)
        console.log(b)
    }
  
}
let a = add()
a()



// scope
// let y = 300
// {
//     let y = 600 
//     console.log(y)
// }
// console.log(y)

// //   node lexicalScope.js

// let r = 300
// {
//     r = 60        // r value update 
//     console.log(r)
// }

// console.log(r)
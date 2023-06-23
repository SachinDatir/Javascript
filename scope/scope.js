// "use strict";
// let x1 = this;
// console.log(x1)

console.log('.....................')
// LEXICAL scope
// function inside function ===> we can access the parent function properties and method 
// in child function but parent function can't access child property
function addition() {
    let a = 10
    let b = 10
    console.log(a + b)

    function additionB() {
        let x = 12
        let y = 13
        console.log(a * b + x + y)

        function additionC() {
            console.log(a + b + x + y)
        }
        // additionC()
    }
    // additionB()
}
// addition()


// CLOSURES

function multiplication() {
    let a = 10
    let b = 5
    return function () {
        console.log(a + b)
    }
}
// let a1 = multiplication()
// a1()    // function(){
//     console.log(a+b)
// }

// function close hone baad bhi hum uski property access kr sakte hai by return key word



function substactionA() {
    let a = 10
    let b = 20
    let display = function () {
        console.log(`substraction ${b / a}`)
    }

    let substraction = function () {
        console.log(a - b)
    }
    return [display, substraction]
}

// a2 = substactionA()
// a2[0]()
// a2[1]()

// Encapsulation



let info = {
    firstName: 'sachin',
    lastName: 'datir',

    display: function () {
        // this ka referense info
        console.log(this.firstName + " " + this.lastName)

        function display2() {
            // there is no referense of this keyword

            // this ka referense window object
            console.log(this.firstName + this.lastName)   // undefined + undefined = NaN
        }
        display2()
    }
}
// info.display()


//  SOLOTION
let info2 = {
    firstName: 'sachinA',
    lastName: 'datirA',

    display: function () {
        // this ka referense info
        console.log(this.firstName + " " + this.lastName)

        let display2 = () => {
            //   solution by arrow function ===> display2 is a emmidiate parent of display
            // and display  emmidiate parent is  info2>> so display info ki property inheriate karega
            console.log(this.firstName + " " + this.lastName)
        }
        display2()
    }
}
// info2.display()


var firstName = 'pranamya'
var lastName = 'pangare'

let info3 = {
    firstName: "sachin",
    lastName: "datir",
    display: () => {
        // this ======>  immediate parent this keyword
        console.log(this.firstName + this.lastName)
        let display2 = () => {
            // this =====> immediate parent this keyword
            console.log(this.firstName + this.lastName)
        }
        display2()
    }
}
info3.display()

function myFunction() {
    return this;
}

console.log(myFunction())

// refers global object
let x = this
console.log(x)

console.log('**********************************')

var variable1 = 23;

let variable2 = 89;

function catchValues() {
    console.log(variable1);
    console.log(variable2);

    // Both the variables can be accessed anywhere since they are declared in the global scope
}
// window.variable1; // Returns the value 23

// window.variable2;



//    cd scope
//    node scope.js

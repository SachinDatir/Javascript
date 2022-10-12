//object literal
// let Sachin = {
//     firstname: "sachin",
//     lastname: "datir",
//     age: 22,
//     rollno: 11,
//     display: function () {
//         console.log(this.firstname + " " + this.lastname)
//     }
// }
// console.log(Sachin)
// Sachin.display()

// let skd = {
//     firstName: "Sachin",
//     lastname: "datir",
//     skills: ["javascript", "java"],
//     age: 22,
//     display: function () {
//         console.log(this.skills + " " + this.firstName)
//     }
// }
// console.log(skd)
// skd.display()

// //function constructor
// let PersonA = function (fn, ln, age, rn) {
//     this.firstName = fn
//     this.lastName = ln
//     this.age = age
//     this.rollno = rn
//     this.display = function () {

//     }
// }

// let Sachin1 = new PersonA("sachin","datir",23,11)
// console.log(Sachin1)


// class PersonB {
//     setFirstname(fn){
//         this.firstname = fn
//     }
// }

// let A = new PersonB()
// A.setFirstname('sachin')
// console.log(A)


let skd = {
    firstName: 'sachin',
    lastName: 'datir',
    NikName: 'skd',
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
skd.display()

let pank = {
    firstName: 'pankaj',
    lastName: 'more',
    NikName: 'pankya'
}
let a = skd.display   // problem statement ==>there is no referense of this keyword 
a()  //a()==>value
//      a==>function(){
//     console.log(this.firstName+this.lastName)
// }


// Bind()  return a function
a1 = a.bind(pank)
a1()


// CALL METHOD
// call is a function  that you use to change the value of 'this' inside a function
//  and execute it with the arguments provided.
let obj = {
    firstName: 'sachin Datir',
    Address: 'Akole',
    hobby: 'exercise',
    display: function () {
        console.log(this.firstName + " " + this.Address)
    }
}
// obj.display()

let obj1 = {
    firstName: 'pranamya pangare',
    Address: 'akole',
    hobby: 'zythophile'
}
let obj2 = {
    firstName: 'pankaj more',
    Address: 'ganore',
    hobby: 'oenophile'
}

let A = obj.display

A.call(obj1)
A.call(obj2)
console.log('**********Apply************')
A.apply(obj2)
A.apply(obj1)
console.log('************Bind**********')

// The bind function creates a copy of a function with a new value to the this present inside the calling function.
let A3 = A.bind(obj2)
A3()



// let audi = {
//     model: 'Q6',
//     color: 'black'
// }

// let bmw = {
//     model: 'sedane',
//     color: 'white'
// }
// let tata = {
//     model: 'Nexa',
//     color: 'red'
// }

//  function PrintColor(msg) {
//     console.log(msg)
//     console.log(this.color)
// }
// function PrintModel(msg) {
//     console.log(msg)
//     console.log(this.model)
// }

// //CALL function
PrintColor.call(bmw,'Hello guys')
PrintColor.call(tata,'hello boyz')

console.log('APPLLYYYYYYYYY*************')
// In apply, arguments you can pass an argument as an array literal or a new array object.
// // APPLY function
PrintColor.apply(audi,['by by'])
PrintModel.apply(tata,['by by'])

console.log('******************')
//BIND function
A2.bind(tata)

//   node object.js

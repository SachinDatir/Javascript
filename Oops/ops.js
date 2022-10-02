// OOPS===> Object oriented programing 
// oops concept
// ====> encapsulation,inheritance,polymorphism,abstraction ===>for writing good class

// type of create Object
//  1} object literal
//  2} function cunsructor
//  3} ES6 class
//  4} object Create Method

//  object=====>data store====> object is more descriptive than array 


// 1}object literal======>repitation of code(property same ==>value change) ==>memory bloat

let sachin = {
    firstName: 'sachin',
    lastName: 'datir',
    age: 23,
    display: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}
// console.log(sachin)
// sachin.display()


// template for object creation (old way) =====>function cunstructor
function Person(fn, ln, ag) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.display = function () {
        console.log(this.firstName + " " + this.lastName)
    }
    this.run = function () {
        console.log('I am running')
    }
}
let obj = new Person('pankaj', 'more', 24)
let obj1 = new Person('pranamya', 'pangare', 23)
// obj.display()
// obj.run()
// obj1.display()

// ES6 class====>
class PersonA {
    constructor(fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.display = function () {
            console.log(this.firstName + " " + this.lastName)
        }
    }

}

let obj3 = new PersonA('sachin', 'datir', 23)
obj3.display()

let obj4 = [
    new PersonA('pankaj', 'more', 24),
    new PersonA('sanket', 'datir', 25),
    new PersonA('rahul', 'gunjal', 23),
    new PersonA('pranamya', 'pangare', 22)

]
obj4[0].display()
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
obj4.forEach((el) => {
    for (let key in el) {
        console.log(key, el[key])
    }
})
console.log('----------------------------------------')
let obj5 = {
    O1: new PersonA('prafull', 'bhalerao', 23),
    O2: new PersonA('rutik', 'borhade', 22),
    O3: new PersonA('pratik', 'jadhav', 25),
    O5: new PersonA('pratik', 'aher', 26)
}
for (let values of Object.values(obj5)) {
    for (let keys in values) {
        console.log(keys, values[keys])
    }
}
// cd Oops
// node ops.js

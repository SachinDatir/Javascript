// // in javascript everything is object
// // OBJECT >>>>property and method
// // 1) Object literal>>>>>>Direct object write method
// let obj = {
//     firstName: 'sachin',
//     lastName: 'datir',
//     age: 23,
//     nikname: 'SKD',
//     CalBirthYear: function () {
//         console.log(2022 - this.age)
//     }
// }
// // console.log(obj)
// // obj.CalBirthYear()

// // object element retirve delete,add,update by two method dot notation and bracket notation

// // dot notation==>>>>>>
// //retrive
// // console.log(obj.firstName)
// //Update
// obj.firstName = 'Skd'
// //add
// obj.city = 'akole'
// //delete
// delete obj.age
// // console.log(obj)

// //Bracket notation
// // retrive
// // console.log(obj['nikname'])
// //update
// obj['age'] = 22
// //add
// obj['villege'] = 'Ganore'
// //delete
// delete obj['firstName']
// // console.log(obj)


// //  when a function is attach to object is refer as a method

// //  literal method draback is to repeatation of code,memory bloat(increase memory cunsumption)


// //    Different ways to create object
// //1)  object literal
// //2)  Function constructor
// //3)  Es6 class
// //4)  Object.create()

// // 2}  cunstructor

// //  function constructor in javascript always starts with  Capital letter

// function Info(fn, ln) {
//     this.firstName = fn
//     this.lastName = ln
// }
// let obj2 = new Info('sachin', 'datir')

// obj2.firstName = 'Skd'
// obj2['lastName'] = 'DATIR'
// // console.log(obj2)

// // function constructor with many properties
// let Info2 = function (fn, ln, ag, skl) {
//     this.firstName = fn,
//         this.lastName = ln
//     this.age = ag
//     this.skills = skl
// }
// // this is a template  and it is a Rangoli type , we can create new rangoli from it
// // function cunstructor is template to create object
// let panu = new Info2('pranamya', 'pangare', 23, ['Winemaker', 'AlcoholTech'])
// let sachin = new Info2('sACHIN', 'dATIR', 23, ['JAVASscript', 'python'])
// sachin.age = 22  // if we change sachin age ,panu age will not be change beacause diff memory creation
// console.log(sachin)
// console.log(panu)
// // console.log(panu)

// // inserting method in function constructor

// Info3 = function(fn ,ln ,ag,rn,skl){
//     this.firstName = fn
//     this.lastName = ln
//     this.age = ag
//     this.RollNo = rn
//     this.skills = skl
//     this.numberOfSkills=function(){
//         console.log(this.skills.length)
//     }
// }

// let Pm = new Info3('Narendra','Modi',72,10,['politision','writer'])
// Pm.numberOfSkills()
// let Hm = new Info3('Amit','Shah',65,12,['gameChanger','Politision','HMO'])
// Hm.numberOfSkills()

// // every object have attach the numberOfSkills method===>>>method==it is a function 
// // numberOfSkills method is same for all object that we created 
// // object Pm and Hm are made up of function cunstructor then we call them as a instanse of function cunstructor
// console.log(Pm instanceof Info3)
// console.log(Hm instanceof Info3)

// //__proto__ ye object jisse bana hua hai uske prototype property se similar hai
// //object==__proto__==similar==>parent.prototype
// console.log(Pm.__proto__==Info3.prototype)
// console.log(Pm.__proto__==Info.prototype)



// // There are four methods by which object is made==>1)Object literal
// //                                                   2)Function constructor
// //                                                   3)Es6 class
// //                                                   4)object.create

// //  literal ===>repitation of code (memory Bloat)
// let obja = {
//     firstName:'sachin',
//     lastName:'datir'
// }
// let obj1 = {
//     firstName:'sachin1',
//     lastName:'datir1'
// }

/// function cunstructor ===> this is old method to create object

function Info4(fn, ln, ag, skl) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.skills = skl

}
let obj4 = new Info4('sachin', 'datir', 22, ['javascript', 'java'])



function Info5(fn, ln, ag, skl) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.skills = skl
    this.display = function () {
        console.log(this.firstName + " " + this.lastName)
    }
}
let obj5 = new Info5('sachin', 'datir', 22, ['java,js,python'])
let obj6 = new Info5('pranamya', 'pangare', 23, ['winemaker', 'beer'])

console.log(obj5)
console.log(obj6)
obj5.display()
obj6.display()
console.log(obj5.__proto__ == Info5.prototype)
//baki ke sab properties different hai donho objects me,but Display ye property ye attach hoke aa rahi hai object ko
// to hume is property ko separate out karna hai
// ye hamara problem statement tha
//hume isse solution nikalna hai

/// solution to this 
// display method parent prototype likna hai object me nahi

function Human(fn, ln, age, skl) {
    this.firstName = fn
    this.lastName = ln
    this.age = age
    this.skills = skl
}
Human.prototype.display = function () {
    console.log(this.firstName + ' ' + this.lastName)
}

Human.prototype.color = function () {   /// this is method
    console.log('blue')
}
Human.prototype.culture = 'Indian'

let obj7 = new Human('pankaj', 'more', '24', ['chem', 'java'])
console.log(obj7)
console.log(new Human('sanket', 'datir', 25, ['software eng', 'Mpsc aspirant']))

obj7.color()
console.log(obj7.culture)

//  culuture property inherit by obj7 ....it not its own property
console.log(obj7.hasOwnProperty('firstName'))   /// True because name pro has its own pro 
console.log(obj7.hasOwnProperty('culture'))     /// return false because it does not its own property
// 

//ARRAY
// let names =['sachin','pranamaya','pankaj','sanket']
// console.log(names.__proto__===Array.prototype)

//hum inbuilt datatype pe bhi methods daal sakte hai,
//lekin aisa karna nahi chahiye,aisa karne se problem create hoti hai



//ES6 CLASS >>>>>>>>>>>>>>>>>>>>>>>>>>

class Student {
    constructor(fn, ln, age, std) {
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.standard = std
    }
    // displayName(){
    //     console.log(this.firstName+" "+this.standard)
    // }
}
Student.prototype.displayName = function () {
    console.log(this.firstName + " " + this.lastName)
}

// let obj8 = new Student('sachin','datir',23,'Bsc')
// obj8.displayName()
// let obj9 = new Student('pranamya','pangare',22,'Alohol Tech')
// obj9.displayName()
// console.log(obj8)
// console.log(obj9)

class Bank {
    constructor(AccName, AccNo, city, Bal) {
        this.AccName = AccName
        this.AccNo = AccNo
        this.city = city
        this.Balance = Bal
        this.transaction = []
    }
    Deposits(amount) {
        this.Balance = this.Balance + amount
        this.transaction.push(amount)
        return this.Balance
    }
    withdrawl(amount) {
        if (this.Balance > amount) {
            this.Balance = this.Balance - amount
            this.transaction.push(amount)
            return this.Balance
        }
        else {
            console.log('insufficient balance')
        }

    }
    lastFourTransaction() {
        console.log(this.transaction.slice(-4))
    }
}

let sbi = new Bank('sachin Datir', 9376, 'sangamner', 5000)
console.log(sbi)
sbi.Deposits(5000)
sbi.withdrawl(1000)
sbi.Deposits(6000)
sbi.withdrawl(5345)
sbi.lastFourTransaction()
console.log(sbi.Balance)




//       cd OOPS-Concept
//       node class.js
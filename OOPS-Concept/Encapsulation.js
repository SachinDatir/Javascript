//Topic=>ENCAPSULATION==>matlab cheejo ko private kaisa rakha jayega yeh hai Encapsulation..aur isme js ke different methods hai
//means aap directly object ke properties directly update karke access nahi kar sakte
//hence you can update and call it by method only

// The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. 
//It allows us to control the data and validate it. To achieve an encapsulation in JavaScript: -


class Employee {
    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.salary = salary
    }
    updateName(nm) {
        this.name = nm
    }
    updateAge(age) {
        this.age = age
    }
    updatesalary(salary) {
        this.salary = salary
    }

    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getSalary() {
        return this.salary
    }
}

let skd = new Employee('sachin', 23, 50000)
console.log(skd.getAge())
console.log(skd.getName())
console.log(skd.getSalary())
skd.updateAge(24)
skd.updateName('Sachin Datir')
skd.updatesalary(60000)
console.log(skd.getAge())
console.log(skd.getName())
console.log(skd.getSalary())
console.log('+++++++++++++++++++++++++++++++++')
console.log(skd)


const printName = function () {
    let firstName = "sachin "
    let lastName = "datir"

    let printFullName = function () {
        console.log(firstName + " " + lastName)
    }

    return printFullName

}

printName()()

//yaha pe bahar function call kar sakte hai,lekin andar return aur function ka name hona chahiye
//to maintain privacy encapsulation is important


// closure ===> js ka ye concept hai jo privacy maintain karne me help karega
//return should be the last statement of function
//closure ka meaning ye rehta hai ki return likhne ke baad bhi uske upar ke parent ke function accesible rehte hai
//hum wo parent ke function ko directly accesible nahi kar sakte...yeh bhi ek privacy maintain karne ka tarika hai


function add(){
    let a = 10
    let b =20
    return function(){
        console.log(a)
        console.log(b)
    }
}

let a = add()
a()


class Student {
    constructor(){
        this.firstName='Pranamya'
        this.lastName='Pangare'
        this.printName=function(){
            console.log(this.firstName+" "+this.lastName)
        }
    }
}

let obj = new Student()
obj.printName()
console.log(obj.firstName)
console.log(obj.lastName)
//       cd OOPS-Concept
//       node Encapsulation.js
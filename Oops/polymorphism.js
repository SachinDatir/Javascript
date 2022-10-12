// POLYMORPHISM>>>>>

// Overloading>>>does not work in javascript or python 
// same cass ,same method ,diff argument

class addition {
    add(x, y) {
        console.log(x + y)
    }
    add(x, y, z) {
        console.log(x + y + z)
    }
    add(x, y, z, w) {
        console.log(x + y + z + w)
    }
}

let obj = new addition()
// obj.add(12, 13)  // NaN
// obj.add(12, 13, 14)  // NaN
// obj.add(12, 13, 14, 15)  
// because of the same class ,same method >>in js it considered only last method



// in js overloading acheive by this>>but this is not good
class Addition {
    add(a, b, c, d) {
        if (a !== undefined && b !== undefined && c !== undefined && d !== undefined) {
            console.log(a + b + c + d)
        }
        else if (a !== undefined && b !== undefined && c !== undefined) {
            console.log(a + b + c)
        }
        else if (a !== undefined && b !== undefined) {
            console.log(a + b)
        }
    }
}
let obj2 = new Addition()
// obj2.add(12,13,14,15)
// obj2.add(12,13,14)
// obj2.add(12,13)


//   OVERriding  =====>  diff class => same method => same signature

class RBI {
    loan(n) {
        console.log(`RBI loan rate is ${n} %`)
    }
    save(n) {
        console.log(`RBI save rate is ${n} %`)
    }
}

class SBI extends RBI {
    loan(n) {
        console.log(`SBI loan rate is ${n} %`)
    }
    save(n) {
        console.log(`SBI save rate is ${n} %`)
    }
}

class IOB extends RBI {
    loan(n) {
        console.log(`IOB loan rate is ${n} %`)
    }
    save(n) {
        console.log(`IOB save rate is ${n} %`)
    }
}
obj3 = new RBI()
obj3.loan(5)
obj3.save(6)

skd = new SBI()
skd.loan(7)
skd.save(6)

obj4 = new IOB()
obj4.loan(10)
obj4.save(8)
//  cd Oops
//  node polymorphism.js

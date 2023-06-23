//  sync ==> blocking in nature
// jisko pehele calll kroge o pehele chalega 
function addition() {
    console.log('A')
}
function additionB() {
    console.log('B')
}
// additionB()
// addition()

//  async ==> non blocking in nature === eke mek kay liye nahi rukta
function additionC() {
    setTimeout(() => {
        console.log('c')
    }, 3000);
}
function additionD() {
    console.log('D')
}
// additionC() 
// additionD()


// user creation 
// getId
// userInfo
//  this is async call we need to manage synchronously

function GetUser() {
    setTimeout(() => {
        console.log('CreateUser')
    }, 3000);
    setTimeout(() => {
        console.log('GetUserId')
    }, 2000);
    setTimeout(() => {
        console.log('GetUserInfo')
    }, 1000);
}
// GetUser()

// async to synnc   by using call back hell

// call back hell ===> also this is not good method  beacause of mixture of code
function Getinfo1() {
    setTimeout(() => {
        console.log('CreateUser')
        setTimeout(() => {
            console.log('getUserId')
            setTimeout(() => {
                console.log('GetuserInfo')
            }, 1000);
        }, 2000);
    }, 3000);
}
// Getinfo1()

//  Promises
// basic promise
let pro = new Promise((Resolve, reject) => {
    let a = 20
    let b = 20
    if (a == b) {
        Resolve('true')
    } else {
        reject('false')
    }
})
//  consuming the promise 
// pro.then((str)=>{
//     console.log(str)
//     return [0,'sachin',2]
// })
// .then((arr)=>{
//     console.log(arr)
//     return arr[1]
// })
// .then((arr)=>{
//      console.log(arr)
// })
// .catch((str)=>{
//     console.log(str)
// })
// .finally(()=>{
//     console.log('i always run')
// })

function CreateUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('CreateUsers')
        }, 3000);
    })
}
function GetID() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('GetID')
        }, 2000);
    })
}
function GetuserINFO() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('GETINFO')
        }, 1000);
    })
}
// CreateUsers()
//     .then((str) => {
//         console.log(str)
//         return GetID()
//     })
//     .then((str) => {
//         console.log(str)
//         return GetuserINFO()
//     })
//     .then((str) => {
//         console.log(str)
//     })

async function GetInformation() {
    let a = await CreateUsers()
    console.log(a)
    let b = await GetID()
    console.log(b)
    let c = await GetuserINFO()
    return c
}

let a1 = GetInformation()
a1.then((str)=>{
    console.log(str)
})
//   cd Oops
//   node day1.js
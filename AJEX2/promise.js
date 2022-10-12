//ASYNC call
// API -----------
// img
// fetch
// axios

// asynchronous exicution
function skd() {
    setTimeout(() => {
        console.log('hello')
    }, 2000);
}
// skd()

//synchronious exicution
function SKD1() {
    console.log('by')
}

function svd() {
    console.log('hii')
}
// SKD1()
// svd()

//async to sync

function sachin() {
    setTimeout(() => {
        console.log('userCreated')
    }, 4000);
    setTimeout(() => {
        console.log('Getuserid')
    }, 3000);
    setTimeout(() => {
        console.log('GetuserInfo')
    }, 1000);
}
// sachin()


//call back hell===>Async to sync

// function callBack() {
//     setTimeout(() => {
//         console.log('usercreated')
//         setTimeout(() => {
//             console.log('getUserId')
//             setTimeout(() => {
//                 console.log('getUserInfo')
//             }, 1000);
//         }, 2000);
//     }, 3000);
// }
// // callBack()
function callBackHell() {
    setTimeout(() => {
        console.log('userCreated')
        setTimeout(() => {
            console.log('user ID')
            setTimeout(() => {
                console.log('user INFO')
            }, 1000);
        }, 2000);
    }, 3000);
}
// callBackHell()

// //promises()==>year 015  async call===>synchro.... in better way by removing call back hell()

// let pro = new Promise((resolve, reject) => {
//     let a = 10
//     let b = 20
//     if (a == b) {
//         resolve('resolve')
//     } else {
//         reject('reject')
//     }
// })
// pro.then(function (s) {
//     console.log(s)
// }, function (d) {
//     console.log(d)
// })


function createUser() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('user Created')
        }, 3000)
    })
}
function GetId() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('getUserId')
        }, 2000)
    })
}

function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('get user Info')
        }, 1000)
    })
}
// createUser().then((res) => {
//     console.log(res)
//     return GetId()
// }).then((res) => {
//     console.log(res)
//     return getUserInfo()
// }).then((res) => {
//     console.log(res)
// })

function createUser1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('user Created')
        }, 3000);
    })
}
function getId1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('get user ID')
        }, 2000);
    })
}
function userInfo1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('get user Info')
        }, 1000);
    })
}
// createUser1().then((res)=>{
//     console.log(res)
//     return getId1()
// }).then((res)=>{
//     console.log(res)
//     return userInfo1()
// }).then((res)=>{
//     console.log(res)
// })

async function GetInfo() {
    let a = await createUser1()
    console.log(a)
    let b = await getId1()
    console.log(b)
    let c = await userInfo1()
    console.log(c)
}
// GetInfo()

// promise COMBINATORS()
//  Promise.all()
//  Promise.race()
//  Promise.allSettled()
//  Promise.any()

// parellel execution of promise()
async function GetData(one, two, three) {
    let data = await Promise.all([  // only pass call exicute (not gives fail)
        createUser1(one),
        getId1(two),
        userInfo1(three)
    ])
    console.log(data)
}
// GetData(1,2,3)

async function GetData1(one, two, three) {
    let data = await Promise.any([   //pass or fail first exicute will print
        createUser1(one),
        Promise.reject("hello2"),
        userInfo1(three)
    ])
    console.log(data)
}
GetData1()

async function GetData2(one, two, three) {
    let data = await Promise.race([    //first exicute will print
        createUser1(one),
        getId1(two),
        userInfo1(three)
    ])
    console.log(data)
}
// GetData2(2, 3)

async function GetData3(one, two, three) {
    let data = await Promise.allSettled([   ///gives all pass or fail
        createUser1(one),
        getId1(two),
        userInfo1(three)
    ])
    console.log(data)
}
// GetData3(2, 3)
//  node promise.js

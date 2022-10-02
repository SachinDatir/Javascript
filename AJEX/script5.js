function getUser(userid) {
    return fetch(`https://reqres.in/api/users/${userid}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            renderHtml(res.data)
            return res.data
        })
}

let renderHtml = function (el) {
    con = document.querySelector('#users')
    let html = `
    <div>
    <h1>${el.id}</h1>
    <p>${el.first_name}</p>
    <p>${el.last_name}</p>
    <p>${el.email}</p>
    <img src = "${el.avatar}">
    </div>
    `
    con.insertAdjacentHTML("beforeend", html)
}
async function ParallelE(userOne, userTwo, userThree) {
    let data = await Promise.all([
        getUser(userOne),
        getUser(userTwo),
        getUser(userThree)
    ])
    console.log(data)
}
ParallelE(2, 3, 4)

async function ParallelR(userOne, userTwo, userThree) {
    let data = await Promise.race([
        getUser(userOne),
        getUser(userTwo),
        getUser(userThree)
    ])
    console.log(data)
}
ParallelE(2, 3, 4)

async function ParallelEa() {
    let data = await Promise.all([
        Promise.resolve('hello'),
        Promise.resolve('bye'),
        Promise.resolve('hello')
    ])
    console.log(data)
}
ParallelEa()


let getinfo1 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('user created')
        }, 1000)
    })
}

let getinfo2 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('unable to connect')
        }, 2000)
    })
}


async function ParallelEab() {
    let data = await Promise.race([
        Promise.resolve('hii'),
        Promise.reject('hii'),
        Promise.resolve('hii')
    ])
    console.log(data)
}
ParallelEab()

async function ParallelEad() {
    let data = await Promise.race([
        getinfo1(),
        getinfo2(),
        Promise.reject('bye')
    ])
    console.log(data)
}
ParallelEad()

async function ParallelEade() {
    let data = await Promise.any([
        getinfo1(),
        getinfo2(),
        Promise.reject('bye'),
        Promise.resolve('hello')

    ])
    console.log(data)
}
ParallelEade()
function renderHtml(el) {
    let user = document.querySelector('#users')
    let html =
        `   <div>
    <p>${el.id}</p>
    <p>${el.first_name}</p>
    <p>${el.last_name}</p>
    <p>${el.email}</p>
    <img src = "${el.avatar}"> 
    </div>
    `
    user.insertAdjacentHTML('afterend', html)
}

function getSingleUser(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return res.json()
        }).then(function (res) {
            return res.data[0].id
        })
        .then(function (id) {
            return fetch(`https://reqres.in/api/users/${id}`)
        })
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            renderHtml(res.data)
        })
}
//getSingleUser(2)

// async function GetsingleUserInfo(pageNumber) {
//     let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//     let res = await response.json()
//     let id = res.data[0].id
//     let response2 = await fetch(`https://reqres.in/api/users/${id}`)
//     let res2 = await response2.json()
//     let user = res2.data
//     renderHtml(user)
// }
// GetsingleUserInfo(1)

// async function GetsingleUserInfo2(pageNumber) {
//     let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//     let res = await response.json()
//     let id = res.data[2].id
//     let response2 = await fetch(`https://reqres.in/api/users/${id}`)
//     let res2 = await response2.json()
//     let user = res2.data
//     renderHtml(user)
// }
// GetsingleUserInfo2(2)


function renderHtml(obj) {
    let con = document.querySelector('#users')
    let html = `
    <div>
    <a>${obj.id}</a>
    <p>${obj.first_name}</p>
    <p>${obj.last_name}</p>
    <p>${obj.email}</p>
    <img src ="${obj.avatar}">
    </div> 
    `
    con.insertAdjacentHTML('afterend', html)
}
function getSingleUser(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return res.json()
        }).then(function (res) {
            return res.data[1].id
        })
        .then(function (id) {
            return fetch(`https://reqres.in/api/users/${id}`)
        })
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            renderHtml(res.data)
        })
}
getSingleUser(4)

async function GetsingleUserInfo3(pageNumber) {
    let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    let res = await response.json()
    let id = res.data[2].id
    let response2 = await fetch(`https://reqres.in/api/users/${id}`)
    let res2 = await response2.json()
    let user = res2.data
    renderHtml(user)
}
 //GetsingleUserInfo3(3)

async function GetsingleUserInfo2(pageNumber) {
    let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    let res = await response.json()
    let id = res.data[5].id
    let response2 = await fetch(`https://reqres.in/api/users/${id}`)
    let res2 = await response2.json()
    let user = res2.data
    renderHtml(user)
}
//GetsingleUserInfo2(2)

async function ParallelE(){
    let data = await Promise.all([
        GetsingleUserInfo2(),
        GetsingleUserInfo3()
    ])
    console.log(data)
}
// ParallelE()
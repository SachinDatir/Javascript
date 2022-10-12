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
// getUser(1)
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

async function ParallelE(One, Two, Three) {
    let data = new Promise.all([getUser(One), getUser(Two), getUser(Three)])
    console.log(data)
}
//ParallelE(2, 1, 3)
async function ParallelR(four, five, six) {
    let data = new Promise.race
        ([
            getUser(four),
            getUser(five),
            getUser(six)
        ])
    console.log(data)
}
//ParallelR(4, 5, 6)

async function ParallelEB(One, Two, Three) {
    let data = new Promise.any([getUser(One), getUser(Two), getUser(Three)])
    console.log(data)
}
ParallelEB(1, 2, 3)
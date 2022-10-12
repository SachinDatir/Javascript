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
// getUser(5)
function renderHtml(el) {
    let con = document.querySelector('#containers')
    let html = `
    <div>
    <h1>${el.id}</h1>
    <p>${el.first_name}</p>
    <p>${el.last_name}</p>
    <p>${el.email}</p>
    <img src = "${el.avatar}">
    </div>
    `
    con.insertAdjacentHTML('beforeend', html)
}

//parrelel exicution.....when there is no dependense on each other

async function ParallelE(One, two, Three, four) {
    let data = await Promise.all([   // pass array in promise.all method
        getUser(One),
        getUser(two),
        getUser(Three),
        getUser(four)
    ])
    console.log(data)
}
ParallelE(4, 5, 6)

async function ParallelR(One, two, Three, four) {
    let data = await Promise.race([  // first execute print ===> time reduce
        getUser(One),
        getUser(two),
        getUser(Three),
        getUser(four)
    ])
    console.log(data)
}
// ParallelR(4, 7, 6)

async function ParallelR(One, two, Three, four) {
    let data = await Promise.any([
        getUser(One),
        getUser(two),
        getUser(Three),
        getUser(four)
    ])
    console.log(data)
}
// ParallelR(3,1,2)
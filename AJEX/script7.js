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
    con.insertAdjacentHTML('afterend', html)
}
async function ParallelE(One, Two, Three, four, Five) {
    let data = new Promise.all
        ([
            getUser(One),
            getUser(Two),
            getUser(Three),
            getUser(four),
            getUser(Five)
        ])
    console.log(data)
}
//ParallelE(2, 3, 4, 5, 6, 7)

async function ParallelR(Seven, Eigth, nine, Ten) {
    let Data = new Promise.race([
        getUser(Seven),
        getUser(Eigth),
        getUser(nine),
        getUser(Ten)
    ])
    console.log(Data)
}
ParallelR(7,8,9)
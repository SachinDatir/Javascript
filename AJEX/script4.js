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
    let con = document.querySelector('#users')
    let html = `
        <div>
            <h1>${el.id}</h1>
            <p>${el.first_name} 
            ${el.last_name}</p>  
            <p>${el.email}</p>
            <img src ="${el.avatar}">
        </div>
    `
    con.insertAdjacentHTML("beforeend", html)
}

//  async function ParallelE(userOne,userTwo,userThree){
//     let data = await Promise.all([
//         getUser(userOne),
//         getUser(userTwo),
//         getUser(userThree)
//     ])
//     console.log(data)
//  }
//  ParallelE(2,3,4)

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
ParallelR(2, 3, 4)
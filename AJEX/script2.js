function renderHtml(el) {
    let con = document.querySelector('#users')
    let html =
        `
    <div>
    <h1>${el.id}</h1>
    <p>${el.first_name}</p>
    <p>${el.last_name}</p>
    <p>${el.email}</p>
    <img src = "${el.avatar}">
    </div> 
    `
    con.insertAdjacentHTML('beforerend', html)
}
function getUsers(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            res.data.forEach(user => {
                renderHtml(user)
            });

        })
}
getUsers(3)


// function renderHtml(obj) {
//     let con = document.querySelector('#users')
//     let html = `
//   <div>
//   <h1>${obj.id}</h1>
//   <p>${obj.first_name}</p>
//   <p>${obj.last_name}</p>
//   <p>${obj.email}</p>
//   <img src = "${obj.avatar}"
//   </div>
// `
//     con.insertAdjacentHTML('afterend', html)
// }

// function getUsersPageWise(pageNumber) {
//     fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//         .then(function (res) {
//             res.json()
//         })
//         .then(function (res) {
//             //console.log(res.data)
//             res.data.forEach(user => {
//                 renderHtml(user)
//             });
//         })
// }
// getUsersPageWise(3)





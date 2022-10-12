function renderHtml(el) {
    let name = document.querySelector('#sachin')
    let html = `
    <div>
    <h1>${el.id}</h1>
    <p>${el.first_name}</p>
    <p>${el.last_name}</p>
    <p>${el.email}</p>
    <img src = "${el.avatar}">
    
    </div>
    `
    name.insertAdjacentHTML('afterend', html)
}

function getDataPageWise(pageNumber) {
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
getDataPageWise(2)

async function GetDataById(pageNumber) {
    let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    let res = await response.json()
    let id = res.data[1].id
    let response2 = await fetch(`https://reqres.in/api/users/${id}`)
    let res2 = await response2.json()
    let user = res2.data
    renderHtml(user)
}
// GetDataById(3)


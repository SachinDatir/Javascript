function getListUser(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res)
            return res
        })

}
function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            //  console.log(res)
            return res
        })
}

getListUser(3)
    .then(function (res) {
        let id = res.data[0]
        return getSingleUser(id)
    })
    .then(function (res) {
        console.log(res)
    })
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#One')
let liList = document.querySelectorAll('li')
// for (let i = 0; i < liList.length; i++) {
//     // console.log(liList)
//     CreateButton(liList[i])
// }

buttonA.addEventListener('click', function () {
    let text = inputText.value
    let newE = document.createElement('li')
    newE.textContent = text
    CreateButton(newE)
    ulList.appendChild(newE)
    inputText.value = ""
})

ulList.addEventListener('click', function (e) {
    if (e.target.tagName === "BUTTON") {

        if (e.target.className === "remove") {
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if (e.target.className === "up") {
            let li = e.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            if (prev) {
                ul.insertBefore(li, prev)
            }
        }
        else if (e.target.className === "down") {

            let li = e.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling


            if (next) {
                ul.insertBefore(next, li)
            }

        }


    }
})

function CreateButton(li){
    let up = document.createElement('Button')
    up.textContent = "up"
    up.className = "up"
    li.appendChild(up)

    let down = document.createElement('Button')
    down.textContent = "down"
    down.className = "down"
    li.appendChild(down)

    let remove = document.createElement('Button')
    remove.textContent = "remove"
    remove.className = "remove"
    li.appendChild(remove)
}
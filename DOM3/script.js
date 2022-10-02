let liList = document.querySelectorAll('li')
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#One')
let olList = document.querySelector('ol')
console.log(olList)
//console.log(buttonA)
// console.log(liList)
console.log(ulList)
for (let i = 0; i < liList.length; i++) {
    CreateButton(liList[i])
}




buttonA.addEventListener('click', () => {
    let text = inputText.value
    let newE = document.createElement('li')
    newE.textContent = text
    CreateButton(newE)
    olList.appendChild(newE)
    inputText.value = ""
})

olList.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {


        if (event.target.className == 'remove') {
            let li = event.target.parentElement
            let ol = li.parentElement
            ol.removeChild(li)
        }
        else if (event.target.className == 'up') {
            let li = event.target.parentElement
            let ol = li.parentElement
            let prev = li.previousElementSibling
            if (prev) {
                ol.insertBefore(li, prev)
            }
        }
        else if (event.target.className == 'down') {
            let li = event.target.parentElement
            let ol = li.parentElement
            let next = li.nextElementSibling
            if (next) {
                ol.insertBefore(next, li)

            }
        }
    }
})


function CreateButton(li) {
    let up = document.createElement('button')
    up.textContent = 'up'
    up.className = 'up'
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = 'down'
    down.className = 'down'
    li.appendChild(down)

    let remove = document.createElement('button')
    remove.textContent = 'remove'
    remove.className = 'remove'
    li.appendChild(remove)
}



// liList.forEach(function (el) {
//     el.addEventListener('mouseover', () => {
//         el.textContent = el.textContent.toLocaleUpperCase()
//     })
// })

// liList.forEach(function (el) {
//     el.addEventListener('mouseout', () => {
//         el.textContent = el.textContent.toLowerCase()
//     })
// })


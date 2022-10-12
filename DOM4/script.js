let liList = document.querySelectorAll('li')
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#One')

for(let i =0;i<liList.length;i++){
    CreateButton(liList[i])
}

buttonA.addEventListener('click', () => {
    let text = inputText.value
    let newE = document.createElement('li')
    newE.textContent = text
    CreateButton(newE)
    ulList.appendChild(newE)
    inputText.value = ''
})

ulList.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {

        if (e.target.className == 'remove') {
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        if (e.target.className == 'up') {
            let li = e.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            if (prev) {
                ul.insertBefore(li, prev)
            }
        }
        if (e.target.className == 'down') {
            let li = e.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            if (next) {
                ul.insertBefore(next, li)
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
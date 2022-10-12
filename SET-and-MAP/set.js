
//SET()==>set method does not store the value by index
// add() ,has() , clear(),delete(), forEach(), size()

let setH = new Set(['sachin', 'rahul', 'sachin', 'pankaj', 'sanket'])
console.log(setH)

//ADD()
setH.add('manoj')
console.log(setH)

//has()
let A = setH.has('rahul')
let B = setH.has('ramesh')
console.log(B)
console.log(A)

//Delete()
let C = setH.delete('sachin')
console.log(C)

console.log('nexttttt')
//forEach()
setH.forEach(function (val) {
    console.log(val)
})
//size()
console.log(setH.size)

//loop for set method
for (let val of setH) {
    console.log(val)
}
console.log('------------')

let info = {
    firstname: "sachin",
    lastname: "datir"
}
for (let val in info) {
    console.log(val, info[val])
}



//Map vs object
// in object literal keys are alwaysin string

let cities = {
    firstname: "pune",
    state: "maharashtra"
}
console.log(cities)

//in MAP method keys can be any datatype() like boolean ,number,string
// Map()===>set(),get(),has(),size()
let mapA = new Map()
mapA.set('firstname', 'sachin')
mapA.set(true, 'datir')
mapA.set(100, 'marks')
mapA.set('age', 23)
console.log(mapA)

//retrive()
console.log(mapA.get(true))
console.log(mapA.get('firstname'))
//has()
let SD = mapA.has(100)
console.log(SD)

//delete()
mapA.delete(true)
console.log(mapA)

//size()
console.log(mapA.size)


//loop in map
for (let prop of mapA) {
    console.log(prop, mapA[prop])
}


console.log('+++++++')

//forEach()
mapA.forEach(function (val) {
    console.log(val)
})

//clear()
mapA.clear()
console.log(mapA)
// node set.js

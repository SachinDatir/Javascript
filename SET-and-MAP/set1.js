//SET()==>set method does not store the value by index
// add() ,has() , clear(),delete(), forEach(), size()

let arr = ['akole', 'pune', 'mumbai', 'delhi', 'akole']
let A = new Set(arr)
console.log(A)

let B = new Set(['sachin', 'pankaj', 'rahul', 'sanket'])

//    Add()
B.add('gaurav')
console.log(B)

//has()method
let b1 = B.has('gaurav')
console.log(b1)

//  delete()method
let b2 = B.delete('sachin')
console.log(b2)

B.forEach(function (val) {
    console.log(val)
})
console.log(B.size)


// cd SET-and-MAP
//  node set1.js

//reverse an array

function swap(a) {
    let B = a.length - 1

    for (let i = 0, j = B; i <= B / 2, j >= B / 2; i++, j--) {
        let t = a[i]
        a[i] = a[j]
        a[j] = t
    }
    console.log(a)
}
let arr = ['akole', 'sangamner', 'pune', 'mumbai']
swap(arr)

let arr2 = [34, 32, 45, 64, 54, 33, 24, 22, 87]
swap(arr2)

let k = swap([23, 34, 553, 4, 3, 432])
console.log(k)


// let c = arr2.length - 1
// console.log(c)
// for (let i = 0, j = c; i <= c / 2, j >=c / 2; i++, j--) {
//     let t = arr2[i]
//     arr2[i] = arr2[j]
//     arr2[j] = t
// }
// console.log(arr2)


// function swap(x,y){
//   let w = x;
//   x= y ;
//   y = w;
// }


//sorting by +ve and -ve
let A = [3, 334, 65, 55, 456, 5, 535, 3, -45, 55, -567, -432, -59, -43, -43, -654, -43, -97, -64]
let pve = []
let Nve = []
for (let i = 0; i < A.length; i++) {
    if (A[i] >= 0) {
        pve.push(A[i])
    }
    else if (A[i] < 0) {
        Nve.push(A[i])
    }
}
console.log(pve, Nve)

if (pve.length > Nve.length) {
    console.log('+ve')
} else if (pve.length < Nve.length) {
    console.log('-ve')
}
else if (pve.length == Nve.length) {
    console.log('Equal')
}

//sorting array  by +ve and -ve  (by using function)

function PandN(a) {
    let pve = []
    let Nve = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= 0) {
            pve.push(a[i])
        }
        else if (a[i] < 0) {
            Nve.push(a[i])
        }
    }
    // console.log(pve, Nve)

    if (pve.length > Nve.length) {
        console.log('+ve')
    } else if (pve.length < Nve.length) {
        console.log('-ve')
    }
    else if (pve.length == Nve.length) {
        console.log('Equal')
    }
}
// console.log(PandN([3, 334, 65, 55, 55, -567, -432, -59, -43]))
// let arr1 = [3, 334, 65, 456, 535, 3, -432, -59, -43]
// PandN(arr1)


// sorting alphabetically 
let arr3 = ['sac', 'fw', 'w', 'bdn', 'zzdzs', 'kubd']
let arr4 = ['FFWF', 'ajjett', 'EE', 'bureh', 'LJMD']
console.log(arr4.sort())
console.log(arr3.sort())

let arr5 = ['aky', 'ary', 'hey', 'all', 'hello', 'hand']
console.log(arr5.sort())
let arr6 = [0, 01, 21, 02, 1, 12, 21, 25, 31, 48, 1]
console.log(arr6.sort())

// let x = [2, 3, 65, 21, 38, -21]
// for (let i = 0; i < x.length; i++) {
//     for (let j = 0; j < x.length; j++) {
//         if (x[i] < x[j]) {
//             let t = x[i]
//             x[i] = x[j]
//             x[j] = t
//         }
//     }
// }
// console.log(x)

let x1 = ['sachin', 'rahul', 'pankaj', 'datirEmpire']
for (let i = 0; i < x1.length; i++) {
    for (let j = 0; j < x1.length; j++) {
        if (x1[i] < x1[j]) {
            let t = x1[i]
            x1[i] = x1[j]
            x1[j] = t
        }
    }
}
console.log(x1)
//Sort out by using function()
function sortt(B) {
    for (let i = 0; i < B.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (B[i] < B[j]) {
                let t = B[i]
                B[i] = B[j]
                B[j] = t
            }
        }
    }
    return B
}
let arr7 = sortt(['sangamner', 'akole', 'pune', 'mumbai', 'nagpur'])
console.log(arr7)
//    node day6.js
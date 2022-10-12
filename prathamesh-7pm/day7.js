// check if the array is sorted or not
// let a=[1,3,3,4]
// let n=a.length
// let s=0;
// for(let i=0;i<n-1;i++){
//     if(a[i]>a[i+1]){
//         s=1
//         console.log('Not sorted')
//         break;
//     }
// }
// if(s==0){
//     console.log('sorted')
// }

function sortt(b) {
    let c = b.length
    let s = 0
    for (let i = 0; i < c - 1; i++) {
        if (b[i] > b[i + 1]) {
            s = 1
            break
        }
    }
    if (s == 0) {
        console.log('sorted')
    }
    else if (s == 1) {
        console.log('not sorted')
    }
}

console.log(sortt([3, 1, 2, 4, 5]))
console.log(sortt([4, 3, 9, 7, 1, 11]))

//without function 

let p = [4, 5, 9, 7, 8, 11]
let q = p.length
let r = 0
for (let i = 0; i < q - 1; i++) {
    if (p[i] > p[i + 1]) {
        r = 1
        break
    }

}
//console.log(p[i]+1)
if (r == 0) {
    console.log('sorted')
}
else if (r == 1) {
    console.log('not sorted')
}



console.log('***********decreasing order********')
function sort1(n) {
    let o = n.length
    let p = 0
    for (let i = 0; i < o - 1; i++) {
        if (n[i] < n[i + 1]) {
            p = 1
            break
        }
    }
    if (p == 0) {
        console.log('sorted')
    } else if (p == 1) {
        console.log('not sorted')
    }
}
sort1(5,6,7,3,4,3,9,7,8)

console.log('***************************************')
console.log(sort1([3, 2, 1, 4]))
console.log(sort1([3, 2, 1]))
console.log(sort1([3, 2, 1, 6, 8]))
console.log(sort1([6, 5, 4, 3, 2, 1]))

// increasing and decreasing order both in same function (check if array is sorted or not )

function both(f) {
    let g = f.length
    let x = 0, y = 0
    for (let i = 0; i < g - 1; i++) {
        if (f[i] > f[i + 1]) {
            x = 1
            break
        }
    }
    for (let i = 0; i < g - 1; i++) {
        if (f[i] < f[i + 1]) {
            y = 1
            break
        }
    }
    if (x == 0 || y == 0) {
        console.log('sorted')
    } else {
        console.log('not sorted')
    }
}
console.log('___________________________________')
console.log(both([3, 6, 78, 5, 6, 3]))
console.log(both([1, 2, 3, 4, 5]))
console.log(both([6, 5, 4, 3, 2, 1]))



// find count of a particular element in array
let skd = [1, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8]
let target = 5
let target2 = 4
let count = 0
let count1 = 0

for (let i = 0; i < skd.length; i++) {
    if (skd[i] == target) {
        count++

    }
    else if (skd[i] == target2) {
        count1++
    }
}
// console.log(count)
// console.log(count1)


// find count of a particular element in array using function()

function countElement(a) {
    let target = 3
    let target2 = 7
    let count3 = 0
    let count4 = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] == target) {
            count3++
        }
        else if (a[i] == target2) {
            count4++
        }
    }
    console.log(count3)
    console.log(count4)
}
console.log(countElement([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7, 7, 7, 7, 7]))




function check(a) {
    let target = 8
    let count5 = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] == target) {
            count5++
        }
    }
    return count5
}
console.log(check([3, 4, 6, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 8, 9]))
let particular = [1, 2, 3, 4, 5, 6, 7, 8, 88, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
console.log(check(particular))
// node day7.js

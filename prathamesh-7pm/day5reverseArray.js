//reverse array by loop(by changing index)
// let a = [34, 54, 56, 65, 7, 67]
// let n = a.length
// for (let i = 0; i < n / 2; i++) {
//     let temp = a[i]
//     a[i] = a[n - i - 1]
//     a[n - i - 1] = temp
// }
// console.log(a)

let a1 = [12, 34, 56, 76, 78, 89]
let n1 = a1.length
for (let i = n1 - 1; i >= n1 / 2; i--) {
    let temp = a1[i]
    a1[i] = a1[n1 - i - 1]
    a1[n1 - i - 1] = temp
}
console.log(a1)

function rev(a2) {
    let n2 = a2.length
    for (let i = n2 - 1; i >= n2 / 2; i--) {
        let temp = a2[i]
        a2[i] = a2[n2 - i - 1]
        a2[n2 - i - 1] = temp
    }
    console.log(a2)
}
// let s = [45, 67, 89, 76, 98]
// rev(s)



let m = [23, 4, 5, 67, 87, 89]
console.log(m.reverse())


let g = [12, 24, 36, 48, 60]
let n = g.length
for (let i = n - 1; i >= n / 2; i--) {
    let temp = g[i]
    g[i] = g[n - i - 1]
    g[n - i - 1] = temp
}
// console.log(g)

let f = [11, 33, 44, 66, 88]
let d1 = f.length
for (let i = d1 - 1; i >= d1 / 2; i--) {
    let t = f[i]
    f[i] = f[d1 - i - 1]
    f[d1 - i - 1] = t
}
console.log(f)


let c = ['sachin', 'pankaj', 'rahul', 'sanket', 'pranamya']
let d = c.length
for (let i = 0, j = d - 1; i <= d / 2, j >= d / 2; i++, j--) {
    let t = c[i]
    c[i] = c[j]
    c[j] = t
}
console.log(c)

let arr = ['india', 'pak', 'nepal', 'bhutan', 'maldives', 'esrael']
let A = arr.length
// console.log(A)  5
for (let i = 0, j = A - 1; i <= A / 2, j >= A / 2; i++, j--) {
    // console.log(arr[i])
    //console.log(arr[j])
    let b = arr[i] //india ,pak,nepal
    arr[i] = arr[j]  //esrael,maldives,bhutan
    arr[j] = b
}
// console.log(arr)

rev = function (A) {
    let b = A.length
    for (let i = 0, j = b - 1; i <= b / 2, j >= b / 2; i++, j--) {
        let f = A[i]
        A[i] = A[j]
        A[j] = f
    }
    console.log(A)
}
let s = ['sangamner', 'akole', 'pune', 'nashik', 'shirdi']
console.log(rev(s))
let k = rev([34,56,78,98,74,35,45,34])
console.log(k)

// let x=['sachin','pankaj','rahul','sanket','pranamya']
// let n2=x.length
// for(let i=0,j=n2-1;i<=n2/2,j>=n2/2;i++,j--){
//     let t=x[i]
//     x[i]=x[j]
//     x[j]=t
// }
// console.log(x)

//  node day5.js


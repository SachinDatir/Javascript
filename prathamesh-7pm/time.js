//find difference in time 
// let a = 10, b = 45
// let c = 7, d = 59
// //   hh : mm
// let i = a * 60 + b  //645
// let j = c * 60 + d  //479
// let ans = 0
// if (i <= j) {
//     ans = j - i
// }
// else if (i > j) {
//     let total = 24 * 60  //1440
//     ans = total - (i - j)  // 1440-166= 1274
// console.log(total)
// console.log(ans)
// }
// let hour = Math.floor(ans / 60)    //21                                                                                                                                                                                                                                                                                
// let rem = ans % 60   //
// console.log(rem)

// console.log(hour, ':', rem)



// let A = 12, B = 35
// let C = 9, D = 30

// let p = A * 60 + B
// let q = C * 60 + D
// let Ans = 0
// if (p < q) {
//     Ans = p - q
// }
// else if (p > q) {
//     let total = 24 * 60
//     Ans = total - (p - q)
//     // console.log(Ans)
// }
// // let Hour = Math.floor(Ans/60)
// // console.log(Hour)
// // let rem1 = Ans%60
// // console.log(rem1)
// // console.log(Hour,':',rem1)



// let e = 7, f = 34
// let g = 4, h = 50

// let x = e * 60 + f
// let y = g * 60 + h
// let answ = 0
// if (x < y) {
//     answ = y - x
// }
// else if (x > y) {
//     let total = 24 * 60
//     answ = total - (x - y)
//     //console.log(answ)
// }
// // let Hour1 = Math.floor(answ / 60)
// // console.log(Hour1)
// // let min = answ % 60
// // console.log(min)
// // console.log(Hour1, ':', min)

// function times(p, q, r, s) {
//     let w = p * 60 + q
//     let x = r * 60 + s
//     let answer = 0
//     if (w < x) {
//         answer = x - w
//     }
//     else if (w > x) {
//         let total = 24 * 60
//         answer = total - (w - x)
//     }
//     let hour2 = Math.floor(answer / 60)
//     // console.log(hour2)
//     let min2 = answer % 60
//     console.log(hour2, ':', min2)
// }
// times(12, 48, 9, 54)

function Time(w, x, y, z) {
    let p = w * 60 + x
    let q = y * 60 + z
    let ans = 0
    if (p <= q) {
        ans = q - p
    }
    else if (p > q) {
        let total = 24 * 60
        ans = total - (p - q)
    }
    let hour = Math.floor(ans / 60)
    let min = ans % 60
    console.log(hour, ':', min)
}
Time(6, 20, 5, 21)
Time(12, 32, 2, 45)



function tme(a, b, c, d) {
    let i = a * 60 + b//285
    let j = c * 60 + d//611  // 326
    let ans = 0
    if (i <= j) {
        ans = j - i
    }
    else if (i > j) {
        let total = 24 * 60
        ans = total - (i - j)
    }
    let hour = Math.floor(ans / 60)
    let rem = ans % 60

    console.log(hour, ':', rem)
}


tme(12, 34, 1, 35)
tme(5, 55, 14, 12)

function timess(a, b, c, d) {
    let p = a * 60 + b
    let q = c * 60 + d
    let ans = 0
    if (p < q) {
        ans = q - p
    }
    else if (p > q) {
        let total = 24 * 60
        ans = total - (p - q)
    }
    let hours = Math.floor(ans / 60)
    let rem = ans % 60
    console.log(hours, ':', rem)
}
timess(12, 00, 12, 15)

// node time.js
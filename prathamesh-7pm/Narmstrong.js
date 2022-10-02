// .armstrong number(each no of cube addition is equal to the Number )

let num = 153
let sum = 0
let m = num
while(m>0){
    let r=m%10
    sum+=r**3
    m=Math.floor(m/10)
}
// console.log(sum)
if(sum==num){
    console.log(`${num} is armstrong Number`)
}
else{
    console.log(`${num} is not armstrong Number`)
}


function armstrong(num){
    let sum = 0
    let m = num
    while(m>0){
        let r = m%10
        sum+=r**3
        m=Math.floor(m/10)
    }
    if(sum==num){
        console.log(`${num} is armstrong Number`)
    }
    else{
        console.log(`${num} is not armstrong Number`)
    }
}
armstrong(123)
armstrong(370)
armstrong(371)

function Arm(num){
    let m = num
    let sum  =0
    while(m>0){
        let r = m%10
        sum+=r**3
        m= Math.floor(m/10)
    }
    if(sum==num){
        console.log(`${num} is armstrong Number`)
    }
    else{
        console.log(`${num} is not armstrong Number`)
    }
}
Arm(0)
Arm(1)

let arm = function(n){
    let sum = 0
    let m = n
    while(m>0){
        let r = m%10
        sum+=r**3
        m=Math.floor(m/10)
    }
    if(sum==n){
        console.log('Arm strong nu')
    }
    else{
        console.log('not arm strong Nu')
    }
}
arm(370)
arm(234)
//   cd prathamesh-7pm
//   node Narmstrong.js

// find the char with highest occurance in given array or string

let arr = [1,4,5,6,'a','a','a','a','g','t',3,1,1,1,1,2,2,2,2,2,2,2]
let m = new Map()
for(let i=0; i<arr.length;i++){
    m.set(arr[i],0)
}
for(let i = 0;i<arr.length;i++){
    let x = m.get(arr[i])
    x++
    m.set(arr[i],x)
    
}
console.log(m)

let ans = 0
let char = ''
for(let key of m){
    if(key[1]>=ans){
        ans = key[1]
        char=key[0]
       
    }
}
console.log(char)
console.log(ans)


// find the char with highest occurance in given array or string  by using function 

function find(str){
    let m = new Map()
for(let i=0; i<str.length;i++){
    m.set(str[i],0)
}
for(let i = 0;i<str.length;i++){
    let x = m.get(str[i])
    x++
    m.set(str[i],x)
    
}
console.log(m)

let ans = 0
let char = ''
for(let key of m){
    if(key[1]>=ans){
        ans = key[1]
        char=key[0]
       
    }
}
console.log(char)
console.log(ans)
}
find('25252365w553543')
find([1,5,7,8,90,3,4,4,4,4,4,4,4,4,5,6,'t','gn',true,false])


//   cd prathamesh-7pm
//   node day14.js
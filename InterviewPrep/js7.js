let str = "sachin"
let rev=''
for(let i =0;i<str.length;i++){
rev=str[i]+rev
}
console.log(rev)

//reverse by words 
const reverseStringbyWord=(str)=>{
    // let str1 ='today is sunday'
    return str.split(' ').reverse().join(' ')
    
}

console.log(reverseStringbyWord('today is friday'))

let r = reverseStringbyWord('sunday is today')
console.log(r)
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')

let arr = [4,6,7,9,2,5]
let sum = 0
for (let i =0;i<arr.length;i++){
    if(arr[i]%2==0){
        sum = sum+arr[i]
    }
}
console.log(sum)

const removeDuplicate=(arr)=>{
let a = arr.filter((el,i)=>{
return arr.indexOf(el)==i
})
// console.log(a)
return a

}

console.log(removeDuplicate([12,23,45,12,5,5,5]))

const findMaximum=(arr)=>{
let a1 = arr.reduce((acc,el)=>{
    if(el>acc){
        return el
    }
    else{
        return acc
    }
})
console.log(a1)
}
findMaximum([122,45,67,890,75])

const findMinimum=(arr)=>{
let a = arr.reduce((acc,el)=>{
    if(el>acc){
        return acc
    }
    else{
        return el
    }
})
console.log(a)
}
findMinimum([12,45,36,78,9,13])

const reverseArray=(arr)=>{
    let a = arr.length
    for(let i = 0,j=a-1;i<=a/2,j>=a/2;i++,j--){
let t = arr[i]
arr[i]=arr[j]
arr[j]=t
    }
    return arr
}
let a1=reverseArray(['sachin','pankaj','rahul','sanket'])
console.log(a1)
console.log(a1[0])
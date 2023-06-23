// //INTERVIEW Logical Questions

// // Program 1
// // removing dulpicates from array

// // Using includes()

// let arr1=[12,1,23,12,23,12,13,12,14,12]
// let removeDupli=[]
// for(let i=0;i<arr1.length;i++){
//     if(!removeDupli.includes(arr1[i])){
//         removeDupli.push(arr1[i])
//     }
// }

// console.log(removeDupli)


// // Using indexOf()

// let arr2=[12,23,24,21,12,12,1,21,12]
// let removeDupli1=[]
// for(let i=0;i<arr2.length;i++){
//     if(removeDupli1.indexOf(arr2[i])<0){
//         removeDupli1.push(arr2[i])
//     }
// }
// console.log(removeDupli1)

// // Using filter

// let arr3=[12,1,3,23,2,4,12,12,12,12]
// let m1=arr3.filter(function(el,index){
//     return arr3.indexOf(el)==index
// })
// console.log(m1)

// // Using set()

// let arr4=[12,13,34,33,23,12,12,12,12,78,12]
// let m2=new Set(arr4)
// console.log(m2)

// // //--------------------------------------------------------------------------------->

// // //Program 2

// // //Find the max and min from the given array

// let arr5=[-199,22,33,44,11,22,33,-300,11,22]
// let max=arr5.reduce(function(acc,el){
//     if(el>acc){
//         return el
//     }
//     else{
//         return acc
//     }

// },0)
// console.log(max)

// let min=arr5.reduce(function(acc,el){
//     if(el>acc){
//         return acc
//     }
//     else{
//         return el
//     }
// })
// console.log(min)

// //--------------------------------------------------------------------->

// //Program 3
// //Reverse the string from the array

// console.log("---Reverse the string----")

//  let string="Shital"
//  let rev=" "
//  for(let i=0;i<string.length;i++){


//     rev=string[i]+rev

//  }
//  console.log(rev)

//  console.log("--Or")

// let rev1=" "
//  for(let i=string.length-1;i>=0;i--){

//     rev1=rev1+string[i]
//  }
// console.log(rev1)

//  //Program 4
//  //find the largest word in the string

//  console.log("--Finding largest word----")
//  let str2="I am learning javascript"
//  let largest=str2.split(" ").reduce(function(acc,el){
//      if(el.length>acc.length){
//          return el
//      }
//      else{
//          return acc
//      }
//  },"")

//  console.log(largest)

// //Program 5
// //Print first 10 even numbers

// console.log("--First 10 even no.--------")

// for(let i=0;i<=18;i+=2){
//     console.log(i)
// }

// for(let i=0;i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

//--------------------------------------------------------------------->

// console.log("----string logical------")

// //Problem 6
// let cities="Pune Mumbai nashik nagpur Beed"
// let userInput="nashik"

// if(cities.includes(userInput)){
//     console.log(userInput+" is included")
// }
// else{
//     console.log(userInput+" is not included")
// }

// //Alternate way

// if(cities.indexOf(userInput)>=0){
//     console.log(userInput + " is available")
// }
// else{
//     console.log(userInput + " is not available")
// }

// //Problem 7
// //remove spaces in between

// let city5="Mum bai"
// let removeSpace=""

// for(let i=0;i<city5.length;i++){
//     if(city5[i]!==" "){
//         removeSpace=removeSpace+city5[i]
//     }
// }

// console.log(removeSpace)

// //Program 8
// //remove spaces in between and print out in a reverse way

// let city6="Nas hik"
// let removeSpace1=""
// for(let i=0;i<city6.length;i++){
//     if(city6[i]!==" "){
//         removeSpace1= city6[i] + removeSpace1
//     }
// }
// console.log(removeSpace1)

// //Program 9
// //Calculate vowels in the string

let str8 = "I want a very good job as early as possible"

let count = 0

// for(let i=0;i<str8.length;i++){
//     if(str8[i]=='a' || str8[i]=='e' || str8[i]=='i' || str8[i]=='o' || str8[i]=='u'){
//         count=count +1
//     }
// }
// console.log(count)

// //Alternate way

for (let i = 0; i < str8.length; i++) {
    switch (str8[i]) {
        case 'a':
        case 'A':
            count = count++

        case 'e':
        case 'E':
            count = count++

        case 'i':
        case 'I':
            count = count++

        case 'o':
        case 'O':
            count = count++

        case 'u':
        case 'U':
            count = count++

    }
}
console.log(count)

// //------------------------------------------------------------------------->>

//  //Program 11
//  //Take one no and return addition of factors of that no
//  console.log("--add of factors of number--")

//  let x=15
//  let sum=0
// for(i=0;i<x;i++){
//     if(x%i==0){ 
//          sum=sum+i
//     }
// }
// console.log(sum)

let x1 = 14
let sum1 = 0
for (let i = 0; i < x1; i++) {
    if (x1 % i == 0) {
        sum = sum + i
    }
}

// //Program 12
// //Check no whether that no is perfect no or not

// let y=12
// let sum1=0
// for(let i=0;i<y;i++){
//     if(y%i==0){
//         sum1=sum1+i

//     }   
// }
// if(sum1==y){
//     console.log(y+" no is a perfect number")
// }
// else{
//     console.log(y+" no is not perfect")
// }

// //Program 13
// //Take one no and return the no of digit from that no

let z = 234
let result = []
newN = z.toString()

for (let i = 0; i < newN.length; i++) {
    result.push(newN.charAt(i))
}
console.log(result)

//Program 14
//Take two no one is row and other is column and print it in square, right angle triangle

// let row=3
// let col=3
// for(i=0;i<row.length;i++){
//     for(j=0;j<col.length;j++){
//         if(row[i]==col[j]){
//             console.log("*")
//         }
//     }
// }

//Program 15
//Calculate count of capitals in the string

let str11 = "My name is Priyanka Dani"
count = 0
for (let i = 0; i < str11.length; i++) {
    if (str11.charCodeAt(i) >= 65 && str11.charCodeAt(i) <= 90) {
        count++
    }
}
console.log(count)

//Alternate way
count = 0
for (let i = 0; i < str11.length; i++) {
    if (str11[i] >= 'A' && str11[i] <= 'Z') {
        count++
    }
}
console.log(count)

//Alternate way2

let capitalss = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let str12 = "Try Try But Dont Cry"
count = 0
for (let i = 0; i < str12.length; i++) {
    if (capitalss.includes(str12[i])) {
        count++
    }
}
console.log(count)

//Alternate way
count = 0
for (let i = 0; i < str12.length; i++) {
    if (capitalss.indexOf(str12[i]) >= 0) {
        count++
    }
}
console.log(count)

//---------------------------------------------------------------------------------------->>>>>
//Problem 16
//input-"you are great"  output-"uoy era taerg"
let a = 'Wednsday is good day'
let c = "This is our company"
let d = "you are great"
function reverse(str) {
    rev = ""
    for (let i = 0; i < str.length; i++) {
        rev = str[i] + rev
    }
    //console.log(rev) 
    let c = rev.split(' ')
    let d = c.reverse()
    let b = d.join(' ')
    console.log(b)
}
reverse(a)
reverse(c)
reverse(d)
reverse('Shital')

//-------------------------------------------------->>>
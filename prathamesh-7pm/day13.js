//1.   4a3b2c-->aaaabbbcc

let a = '4a3b2c'
let final = ''
for (let i = 0; i < a.length; i += 2) {
    let x = Number(a[i])
    while (x > 0) {
        final += a[i + 1]
        x--
    }

    // console.log(x)
}
console.log(final)

function finalValue(str) {
    let final = ''
    for (let i = 0; i < str.length; i++) {
        let x = Number(str[i])
        while (x > 0) {
            final += str[i + 1]
            x--
        }
    }
    console.log(final)
}
finalValue('5s3k1d')

// In an unsorted array ,let index of element x be i, find index of x after sorting


console.log('**********')
function sort(arr) {
  let a = arr.length
    for (let i = 0; i < a; i++) {
        for (let j = 0; j!=i,j < a; j++) {
            if (arr[i] <= arr[j]) {
                let t = arr[i];
                arr[i] = arr[j]
                arr[j] = t
            }
        }
    }
   return arr
}
let a1 = ['sachin','pankaj','rahul','pranamya','sanket','gaurav']
let a2 =  sort(a1)
console.log(a2)

let ans = -1
let x = 'rahul'
for(let i =0;i<a2.length;i++){
    if(a2[i]==x){
        ans=i
        break;
    }
}
if(ans!=1){
    console.log(ans)
}
else if(ans==-1){
    console.log('not found')
}


function SortOut(n){
    let m = n.length
    for(let i =0;i<m;i++){
        for(let j=0;j!=i,j<m;j++){
            if(n[i]<=n[j]){
                let t = n[i]
                n[i]=n[j]
                n[j]=t
            }
        }
    }
    return n
}
let A = ['satara','sangli','akole','sangamner','mumbai','pune']
let A1 = SortOut(A)
console.log(A1)

let Ans = -1
let y = 'mumbai'
for(let i = 0;i<A1.length;i++){
    if(A1[i]==y){
        Ans=i
        break;
    }
}
if(Ans!=-1){
    console.log(Ans)
}
else{
   console.log('not found')
}

// cd prathamesh-7pm
//   node day13.js
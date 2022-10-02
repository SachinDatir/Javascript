//    STAR PATTERN
/*

*....
**...
***..
****.
*****

*/

for(let i =1;i<=5;i++){
  let s=''
  for(let j =1;j<=i;j++){
    s+='* '
  }
//   console.log(s)
}

/*
....*
...**
..***
.****
*****
*/

for(let i=5;i>=1;i--){
    let s=''
    for(let j =1;j<=5;j++){
      if(j>=i){
        s+='*'
      }else if(j<i){
        s+=' '
      }
    }
    // console.log(s)
}


/*
****
***.
**..
*...

*/

for(let i =5;i>=1;i--){
    let s =''
    for(let j=1;j<=5;j++){
        if(j<=i){
            s+='*'
        }else if(j>=i){
            s+=' '
        }
    }
    // console.log(s)
}

// ****
// .***
// ..**
// ...*
for(let i =5;i>=0;i--){
    let s=''
    for(let j=5;j>=0;j--){
        if(i>j){
            s+='*'
        }else if(i<j){
            s+=' '
        }
    }
    console.log(s)
}

//  cd rivision-logical
//  node star.js
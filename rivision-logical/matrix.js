
function matrix1(m) {
    for (let i = m; i >= 0; i--) {
        let s = ' '
        for (let j = 0; j <= m; j++) {
            if (j >= i) {
                s = s + '* '
            }
            else {
                s += ' '
            }
        }
        console.log(s)
    }
}
// matrix1(5)

//matrix  without using function
let n = 4
for (let i = n; i >= 0; i--) {
    let s = ' '
    for (let j = 0; j <= n; j++) {
        if (j >= i) {
            s = s + '* '
        }
        else {
            s += ' '
        }
    }
    // console.log(s)
}

function MAT(n) {
    for (let i = n; i >= 1; i--) {
        let s = ' '
        for (j = 0; j <= n; j++) {
            if (j >= i) {
                s = s + '* '
            } else {
                s += ' '
            }
        }
        console.log(s)
    }

}
MAT(5)

function MATRIX(n){
    for(let i=n;i>=1;i--){
        let s=''
        for(let j=1;j<=n;j++){
            if(j>=i){
                s=s+'* '
            }else{
                s+=' '
            }
        }
        console.log(s)
    }
}
MATRIX(7)
//  cd rivision-logical
//  node matrix.js
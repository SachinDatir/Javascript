// 1. Find smallest positive number n such that sum of its digits is exactly equal to
// given x and without repetition of digits (ex for x=25,n=1789).

// 2. Given certain tickets available with 7 colours(VIBGYOR)and n people numbered from 1 to n, 
//1st person gets ticket with colour Voilet,2nd with Indigo,3rd with blue ,7 th with red ..... 8th with again voilet , 
//9th with indigo and so on uptil n . Find which colour of ticket nth person will 

//  Question 1st

let nu = 23  //14,6
let a1 = []  //9,8,
for (let i = 9; i >= 1; i--) {
    if (nu > i) {
        a1.push(i)
        nu -= i // 23-9=14,
    }
    else if (nu < i) {
        a1.push(nu)
        break
    }
}
console.log(a1)
console.log(Number(a1.reverse().join('')))

function smallest(N) {
    let a2 = []
    for (let i = 9; i >= 1; i--) {
        if (N > i) {
            a2.push(i)
            N -= i
        }
        else if (N < i) {
            a2.push(N)
            break
        }
    }
    console.log(Number(a2.reverse().join('')))
}
smallest(11)


// 2. Given certain tickets available with 7 colours(VIBGYOR)and n people numbered from 1 to n, 
//1st person gets ticket with colour Voilet,2nd with Indigo,3rd with blue ,7 th with red ..... 8th with again voilet , 
//9th with indigo and so on uptil n . Find which colour of ticket nth person will 

/*
// low wavelength to high wavelength===>
// high frequency to low frequency
v  1  8  15  
i  2  9
b  3  10
g  4  11
y  5  12
o  6  13
r  7  14
*/
let n = 49
if (n % 7 == 1) {
    console.log('violet')
}
else if (n % 7 == 2) {
    console.log('indigo')
}
else if (n % 7 == 3) {
    console.log('blue')
}
else if (n % 7 == 4) {
    console.log('green')
}
else if (n % 7 == 5) {
    console.log('yellow')
}
else if (n % 7 == 6) {
    console.log('orange')
}
else if (n % 7 == 0) {
    console.log('red')
}

function colour(n) {
    if (n % 7 == 1) {
        console.log('violet')
    }
    else if (n % 7 == 2) {
        console.log('indigo')
    }
    else if (n % 7 == 3) {
        console.log('blue')
    }
    else if (n % 7 == 4) {
        console.log('green')
    }
    else if (n % 7 == 5) {
        console.log('yellow')
    }
    else if (n % 7 == 6) {
        console.log('orange')
    }
    else if (n % 7 == 0) {
        console.log('red')
    }
}
colour(45)
colour(47753463)


/*
// high wavelength to low wavelength===>
// low frequency to high frequency
 r  1  8  15
 o  2  9
 y  3  10
 g  4  11
 b  5  12
 i  6  13
 v  7  14
*/
console.log('****************')
function HighTOLow(N) {
    if (N % 7 == 1) {
        console.log('red')
    }
    else if (N % 7 == 2) {
        console.log('orange')
    }
    else if (N % 7 == 3) {
        console.log('yellow')
    }
    else if (N % 7 == 4) {
        console.log('green')
    }
    else if (N % 7 == 5) {
        console.log('blue')
    }
    else if (N % 7 == 6) {
        console.log('indigo')
    }
    else if (N % 7 == 0) {
        console.log('violet')
    }
}
HighTOLow(70)
HighTOLow(343)

//   cd prathamesh-7pm
//   node day15.js


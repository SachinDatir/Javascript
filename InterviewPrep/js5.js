
// find the char with highest occurance in given array or string  by using function 

function FindHighest(arr) {
    let m = new Map()
    for (let i = 0; i < arr.length; i++) {
        m.set(arr[i], 0)
    }
    for (let i = 0; i < arr.length; i++) {
        let x = m.get(arr[i])
        x++
        m.set(arr[i], x)
    }
    console.log(m)
}
FindHighest([1, 56, 54, 33, 2, 56, 54])
FindHighest('sachin')


function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let x = arr[i]
                arr[i] = arr[j]
                arr[j] = x
            }
        }

    }
    console.log(arr)
}
sort(['sachin', 'pankaj', 'rahul', 'sanket'])


// Let str =“,(‘a’),and{a}”

// Output should be —-
// (){}
let str = "('a')and{a}";
let output = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
        output = output + str[i]
    }
    else if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
        output = output + str[i]
    }
}
console.log(output)

//  rotate array 
let arr = [10, 9, 8, 7, 6, 5]
newArr = []
for (let i = 0; i < 6; i++) {
    newArr = []
    for (let j = 0; j < arr.length - 1; j++) {
        if (newArr.length == 0) {
            firstVar = arr[arr.length - 1]
            newArr.push(firstVar)
        }
        newArr.push(arr[j])
    }
    console.log(newArr)
    arr = newArr
}
//  cd interviewPrep
//  node js5.js
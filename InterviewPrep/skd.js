//  reverse String by words
import faker from '@faker-js/faker'
let str = 'today is sunday'
let a = str.split(' ').reverse().join(' ')
console.log(a)
let arr = ['today', 'is', 'good', 'day']
console.log(arr.reverse())
console.log(typeof(arr.reverse()))

let a1 =arr.length
for(let i=0,j=a1-1;i<=a1/2,j>=a1/2;i++,j--){
    let f = arr[i]
    arr[i]=arr[j]
    arr[j]=f

}
console.log(arr)


 const getRandomPassword = (length=3) => {
    let password = '';
    let passwordLength = length > 3 ? length : 3;

    const capitalChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const capitalNumber = getRandomNumber(1, capitalChar.length);
    password += capitalChar.substring(capitalNumber, capitalNumber + 1);
    password += getRandomNumber(0, 9);

    const specialChar = '!@#$*';
    const specialRandomNumber = getRandomNumber(1, specialChar.length);
    password += specialChar.substring(specialRandomNumber, specialRandomNumber + 1);

    // const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i <= passwordLength - 3; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
};

getRandomPassword(13)

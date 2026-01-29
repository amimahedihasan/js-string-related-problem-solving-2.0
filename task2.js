
// task 2
const myString = 'I am Mahedi Hasan'
// console.log(myString.includes('a'));
let count = 0
for (let i= 0 ; i<myString.length; i++){
    if (myString[i] === 'a' || myString[i] === 'A' ){
        count ++;
    }
}
console.log(count)

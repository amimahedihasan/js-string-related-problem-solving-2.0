
// task 3
const myString3 = 'I am Mahedi Hasan'
// console.log(myString3.includes('a' ,'e' , 'i', 'o', 'u'));
let array= [ 'a','e' , 'i' ,'o','u']
let vowelFound = true;
for (const key of array){
    if(!myString3.includes(key)){
        vowelFound = false;
    }
}
console.log(vowelFound)
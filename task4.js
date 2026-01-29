
// task 4
const myString1 = 'The eXtra Young Fox jumps over the Yard'
let updatedString = ''
for(const key of myString1){
    // console.log(key)
    if(key === 'x'){
        updatedString += 'y';
    }
    else if(key === 'X'){
        updatedString += 'Y'  
    }
    else{
        updatedString += key
    }
}
console.log(updatedString)

